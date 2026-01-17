import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { nome, texto, lang } = (req.body ?? {}) as {
      nome?: string;
      texto?: string;
      lang?: "pt" | "es";
    };

    if (!nome || typeof nome !== "string") {
      return res.status(400).json({ error: "Campo 'nome' é obrigatório." });
    }
    if (!texto || typeof texto !== "string") {
      return res.status(400).json({ error: "Campo 'texto' é obrigatório." });
    }

    const safeNome = nome.trim().slice(0, 60);
    const safeTexto = texto.trim().slice(0, 600);

    const idioma = lang === "es" ? "espanhol" : "português";

    const system = `Você escreve uma mensagem curta e acolhedora de oração cristã, com tom respeitoso.
Não mencione IA. Não prometa resultados absolutos.
Responda SEMPRE em ${idioma}.
Saída: JSON com as chaves "headline" e "paragrafo".`;

    const user = `Nome: ${safeNome}
Intenção: ${safeTexto}

Gere:
- headline: título curto (até 10 palavras)
- paragrafo: 1 parágrafo (80 a 130 palavras), cite o nome uma vez.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    });

    const content = completion.choices?.[0]?.message?.content;
    if (!content) {
      return res.status(500).json({ error: "Sem resposta do modelo." });
    }

    const parsed = JSON.parse(content) as { headline?: string; paragrafo?: string };

    return res.status(200).json({
      headline: parsed.headline ?? "",
      paragrafo: parsed.paragrafo ?? "",
    });
  } catch (err: any) {
    return res.status(500).json({ error: "Erro ao gerar mensagem.", detail: String(err?.message ?? err) });
  }
}
import OpenAI from "openai";

type ReqBody = {
  nome?: string;
  texto?: string;
  name?: string;
  prayer?: string;
  email?: string;
  lang?: "pt" | "es";
};

type VercelRequestLike = {
  method?: string;
  body?: ReqBody;
};

type VercelResponseLike = {
  status: (code: number) => VercelResponseLike;
  json: (body: unknown) => VercelResponseLike;
  setHeader?: (name: string, value: string) => void;
};

export default async function handler(
  req: VercelRequestLike,
  res: VercelResponseLike
) {
  try {
    if (res.setHeader) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: "OPENAI_API_KEY não configurada.",
      });
    }

    const body = req.body ?? {};

    const nome = String(body.nome || body.name || "").trim();
    const texto = String(body.texto || body.prayer || "").trim();
    const lang = body.lang === "es" ? "es" : "pt";

    if (!nome) {
      return res.status(400).json({
        error: "Campo 'nome' é obrigatório.",
      });
    }

    if (!texto) {
      return res.status(400).json({
        error: "Campo 'texto' é obrigatório.",
      });
    }

    const safeNome = nome.slice(0, 60);
    const safeTexto = texto.slice(0, 600);

    const idioma = lang === "es" ? "espanhol" : "português";

    const system =
      `Você escreve uma mensagem curta e acolhedora de oração cristã, com tom respeitoso. ` +
      `Não mencione IA. Não prometa resultados absolutos. ` +
      `Responda SEMPRE em ${idioma}. ` +
      `Retorne SOMENTE JSON válido com as chaves "headline" e "paragrafo".`;

    const user = `Nome: ${safeNome}
Intenção: ${safeTexto}

Gere:
- headline: título curto, até 10 palavras
- paragrafo: 1 parágrafo entre 80 e 130 palavras, citando o nome uma vez`;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

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
      return res.status(500).json({
        error: "Sem resposta do modelo.",
      });
    }

    let parsed: { headline?: string; paragrafo?: string };

    try {
      parsed = JSON.parse(content);
    } catch (parseError) {
      return res.status(500).json({
        error: "Resposta inválida do modelo.",
        detail: String(parseError),
        raw: content,
      });
    }

    return res.status(200).json({
      headline: String(parsed.headline || "").trim(),
      paragrafo: String(parsed.paragrafo || "").trim(),
    });
  } catch (err: unknown) {
    return res.status(500).json({
      error: "Erro ao gerar mensagem.",
      detail: err instanceof Error ? err.message : String(err),
    });
  }
}
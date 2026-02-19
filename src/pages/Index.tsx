
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      prayer: ""
    }
  });

  const onSubmit = async (data) => {
  setIsSubmitting(true);

  try {

    // Envia o lead para a ActiveCampaign
    await fetch("https://api-email-delta.vercel.app/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        prayer: data.prayer
      })
    });

    // Gera headline e parágrafo
    const gptRes = await fetch("https://api-sellpage.vercel.app/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        prayer: data.prayer
      })
    });

    const gptData = await gptRes.json();
    localStorage.setItem("headline", gptData.headline);
    localStorage.setItem("paragrafo", gptData.paragrafo);

    toast({
      title: "✉️ Oração recebida",
      description: "Mantenha essa página aberta."
    });

    // Redireciona para /salvando com nome e gênero
    navigate("/salvando", {
      state: {
        nome: data.name,
      }
    });

  } catch (error) {
    console.error("Erro no envio:", error);
    toast({
      title: "Erro",
      description: "Algo deu errado. Tente novamente.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Voluntários de Lourdes</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Como Funciona</a>
            <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Por Que Lourdes?</a>
            <a href="#formulario" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Formulário de Oração</a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Abrir menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              🕊 Bençãos Acontecem Todos os Dias na Gruta de Lourdes
            </h2>
            <p className="text-xl md:text-2xl font-playfair mb-6 text-[#5f9ea0]">
              Envie Seu Pedido de Oração ao Santuário Internacional de Nossa Senhora de Lourdes, na França
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Todos os anos, mais de 6 milhões de peregrinos viajam até a Gruta de Lourdes, na França, em busca de fé, consolo e renovação espiritual.
              Agora, sua intenção de oração também pode ser levada até esse local de profunda devoção, mesmo à distância.
              Permita-nos conduzir sua mensagem até a gruta sagrada onde, ao longo dos anos, milhões de fiéis reuniram suas preces e testemunharam graças e momentos de esperança.
            </p>
            <Button 
              asChild
              className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#formulario">
                ➡️ Enviar Meu Pedido de Oração
              </a>
            </Button>
          </div>
        </section>

        {/* Entrega da Oração */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#f4d58d]/10 border border-[#f4d58d]/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Sua Oração, Entregue na Gruta de Lourdes
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Periodicamente, realizamos visitas à Gruta de Lourdes levando as intenções de oração recebidas por meio da plataforma. 
                Ao preencher o formulário abaixo, sua intenção será incluída na próxima entrega organizada pelos voluntários. 
                Após a realização da visita, enviamos por e-mail registros da entrega das orações, compartilhando com os participantes esse momento de devoção vivido no local sagrado.
              </p>
              
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img01.jpg" 
                  alt="Gruta de Lourdes" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">
                    ➡️ Enviar Meu Pedido de Oração
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

       {/* Formulário */}
        <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg sm:max-w-2xl">
            <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
              Envie sua oração a Gruta de lourdes
            </h3>
            <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                    <Input
                      id="name"
                      placeholder="Digite seu nome"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("name", { required: "O nome é obrigatório" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">E-mail</label>
                    <Input
                      id="email"
                      placeholder="Digite seu e-mail"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("email", {
                        required: "O e-mail é obrigatório",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "E-mail inválido"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="prayer" className="block text-sm font-medium">Sua intenção de oração</label>
                    <Textarea
                      id="prayer"
                      placeholder="Escreva sua oração aqui..."
                      className="w-full min-h-[150px] border-[#5f9ea0]/30"
                      {...register("prayer", { required: "A oração é obrigatória" })}
                    />
                    {errors.prayer && <p className="text-red-500 text-sm">{errors.prayer.message}</p>}
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando sua oração...
                        </span>
                      ) : (
                        "Enviar minha oração"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">Como Funciona</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <BookText className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 1</h4>
                <p className="text-center">Sua intenção de oração é registrada em nosso sistema e cuidadosamente preparada para ser levada durante a próxima visita à Gruta de Lourdes.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Durante a visita, as intenções são levadas até a Gruta e depositadas no local destinado aos pedidos de oração, em um momento de recolhimento e devoção. Esse momento é registrado em imagens.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Após a realização da visita, enviamos por e-mail os registros da entrega das orações, permitindo que você acompanhe esse momento especial vivido no santuário.</p>
              </div>
            </div>
          </div>
        </section>

        {/* As Bençãos Esperam por Você */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">As Bençãos Esperam por Você</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Ao enviar sua intenção de oração à Gruta de Lourdes, você se une a milhões de fiéis que, ao longo dos anos, peregrinaram até esse local em busca de fé, consolo e esperança. 
              Muitos encontram ali um espaço de silêncio, oração e renovação espiritual, profundamente marcado pela devoção à Virgem Maria.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Seja em momentos de busca por paz, cura interior, direção ou serenidade, confiar sua oração a Lourdes representa um gesto de fé e entrega. 
              Para muitos devotos, essa experiência se torna uma lembrança significativa — um sinal concreto de sua intenção de se aproximar de Deus por meio da oração.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <a href="#formulario">
                  ➡️ Enviar Minha Oração Agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Viva as Bênçãos de Lourdes */}
        <section className="py-16 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Viva as Bênçãos de Lourdes Sem Sair de Casa</h3>
            <p className="text-lg mb-8 text-center leading-relaxed">
              Nem todos podem viajar até Lourdes, mas a oração permite que a fé ultrapasse distâncias.
              Ao confiar sua intenção para ser levada à Gruta, você participa espiritualmente desse lugar de profunda devoção, unindo sua prece às de milhões de fiéis que ali rezam todos os anos.
              Dessa forma, mesmo à distância, você pode viver esse gesto de fé e manter sua oração presente em um dos mais conhecidos locais de peregrinação mariana do mundo.
            </p>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/img02.webp" 
                alt="Paisagem serena representando bênçãos de Lourdes" 
                className="w-full max-w-none aspect-video object-cover"
              />
            </div>
          </div>
        </section>

        {/* Compartilhe este gesto de fé com quem você ama */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">Compartilhe este gesto de fé com quem você ama</h3>
              <p className="text-lg mb-6 text-center leading-relaxed">
                Envie uma intenção por alguém querido e transforme esse gesto em um sinal de cuidado, esperança e fé. 
                Confiar uma oração em favor de outra pessoa é uma forma profunda de amor e intercessão, unindo pensamentos e preces em um momento de espiritualidade e devoção.
              </p>
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">
                    ➡️ Enviar Oração por um Ente Querido
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Por Que a Gruta de Lourdes */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">Por Que a Gruta de Lourdes?</h3>
            
            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/img03.webp" 
                alt="Interior de catedral representando a Gruta de Lourdes" 
                className="w-full max-w-none aspect-video object-cover"
              />
            </div>
            
            <Card className="border-[#f4d58d]/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="text-[#5f9ea0]" size={48} />
                  </div>
                </div>
                <p className="text-lg mb-0 leading-relaxed text-center">
                  Desde as aparições de Nossa Senhora a Santa Bernadette, em 1858,
                  a Gruta de Lourdes tornou-se um dos mais importantes destinos de peregrinação cristã do mundo. 
                  Milhões de fiéis visitam o local movidos pela fé,
                  pela busca de consolo espiritual e pelos inúmeros testemunhos de graças alcançadas ao longo dos anos. 
                  Hoje, mesmo à distância, sua intenção de oração também pode ser levada até esse espaço de profunda devoção,
                  unindo sua prece à tradição de oração vivida diariamente na gruta.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Principal */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Confie sua oração à Nossa Senhora de Lourdes hoje mesmo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Envie sua intenção de oração para ser levada à Gruta de Lourdes e una sua prece à tradição de fé vivida diariamente nesse local sagrado.
              Sua oração fará parte desse gesto devocional, sendo conduzida com respeito e reverência durante a visita à gruta.
            </p>
            <a
              href="#formulario"
              className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
            >
              ➡️ Enviar Minha Oração<br />à Gruta de Lourdes
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="bg-gray-800 text-gray-300">
  <div className="max-w-screen-lg mx-auto px-6 py-12">
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Branding */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-marian-blue p-2 rounded-xl">
            <HandHeart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-white">
              Voluntários da Gruta de Lourdes
            </h3>
            <p className="text-sm text-marian-blue">Levando intenções de oração até a Gruta de Lourdes, na França</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Somos um grupo independente de devotos comprometidos em levar intenções de oração à Gruta de Lourdes, local de profunda devoção mariana onde, segundo a tradição católica, Nossa Senhora apareceu a Santa Bernadette em 1858.
        </p>
      </div>

      {/* Contato */}
      <div>
        <h4 className="font-playfair text-lg font-semibold text-white mb-4">
          Contato
        </h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-marian-blue" />
            <a href="mailto:espiritualidadeviva.org@gmail.com" className="hover:text-white transition-colors">
              espiritualidadeviva.org@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-playfair text-lg font-semibold text-white mb-4">
          Informações Legais
        </h4>
        <div className="space-y-2">
          <a href="#" className="block hover:text-white transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="block hover:text-white transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>

    {/* Aviso Legal */}
    <div className="border-t border-gray-700 pt-8">
      <div className="bg-gray-700 rounded-xl p-6 mb-6">
        <h4 className="font-playfair text-lg font-semibold text-white mb-3">
          Aviso Legal Importante
        </h4>
        <p className="text-gray-300 leading-relaxed text-sm">
  Nossa missão é levar as intenções de oração dos fiéis até a Gruta de Lourdes, local onde,
  segundo a tradição católica, Nossa Senhora apareceu a Santa Bernadette.
  Realizamos esse trabalho com respeito, fé e dedicação, reunindo pedidos de oração
  enviados por pessoas que confiam na intercessão de Nossa Senhora e desejam unir suas preces a esse lugar de profunda devoção.  
  <br /><br />
  O projeto Voluntários da Gruta de Lourdes é uma iniciativa devocional independente e não possui vínculo oficial com o
  Santuário de Nossa Senhora de Lourdes, com a Diocese de Tarbes e Lourdes ou com qualquer instituição religiosa oficial.
  Trata-se de uma ação de caráter devocional, organizada de forma estruturada para viabilizar o envio e a entrega das intenções recebidas.  
  Não prometemos milagres nem resultados espirituais específicos. Nosso propósito é conduzir, com respeito e reverência,
  as intenções enviadas pelos participantes até a gruta sagrada, preservando o caráter espiritual e simbólico desse gesto de fé.
</p>
      </div>

      <div className="text-center text-gray-400">
        <p>&copy; Este projeto é operado por uma agência independente responsável pela gestão digital e operacional da iniciativa,
          incluindo a manutenção da plataforma, registro das intenções recebidas, atendimento aos participantes,
          processamento das transações e organização logística dos pedidos de oração enviados.
          Todas as solicitações são registradas em sistema próprio, garantindo rastreabilidade,
          controle operacional e acompanhamento da prestação do serviço contratado.
          Trata-se de uma prestação de serviço de intermediação e organização devocional, realizada de forma estruturada e transparente,
          com fluxo operacional definido e suporte ao cliente disponível.
          Esta iniciativa possui caráter devocional independente e não mantém vínculo oficial com o Santuário de Nossa Senhora de Lourdes,
          com a Diocese de Tarbes e Lourdes ou com qualquer instituição religiosa oficial.</p>
        <p className="mt-2 text-sm">
          © 2026 Agência Adspot. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Index;

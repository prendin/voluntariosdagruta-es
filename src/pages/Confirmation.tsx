import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";




const Confirmation = () => {
  const saudacao = "Caro(a) fiel";

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
            <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribuir</a>
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
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
        <HeartPulse className="text-[#5f9ea0]" size={40} />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-[#333333]">
        📿 Falta apenas um passo para sua oração chegar à Gruta de Lourdes
      </h2>

      {/* Frase de alerta logo abaixo */}
      <div className="bg-[#5f9ea0]/10 border-l-4 border-[#5f9ea0] text-[#22505a] p-4 rounded-md mt-6">
        <p className="text-lg font-medium">
          Sua intenção de oração foi recebida e registrada, mas ainda{" "}
          <strong className="text-[#5f9ea0]">
            precisa ser confirmada para que possa ser incluída na próxima entrega
          </strong>
          . Siga até o final da página para{" "}
          <strong className="text-[#5f9ea0]">concluir este envio.</strong>
        </p>
      </div>
    </div>
  </section>

  {/* Carta / Seção de Boas-vindas */}
  <section className="py-16 px-2 sm:px-4 bg-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
        Caro(a) fiel,
      </h3>

      <div className="flex flex-col gap-8">
        <div>
          <p className="text-lg mb-4 leading-relaxed">
            Aqui é a Irmã Fátima, e escrevo a você hoje com alegria e esperança no
            coração. Há anos participo como voluntária em visitas à Gruta de
            Lourdes, um lugar que acolhe diariamente pessoas vindas de diferentes
            partes do mundo em busca de oração, consolo e renovação espiritual.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Sempre que estou diante da Gruta, sinto profunda emoção ao presenciar
            relatos de fé e esperança compartilhados por peregrinos que encontram
            ali paz e fortalecimento interior. Esse local sagrado, onde segundo a
            tradição católica a Santíssima Virgem Maria apareceu, tornou-se um
            dos mais conhecidos destinos de peregrinação cristã do mundo. Com
            humildade e devoção, levamos até esse lugar as intenções de oração
            confiadas a nós.
          </p>
        </div>

        <div className="my-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/img04.webp"
            alt="Gruta de Lourdes"
            className="w-full max-w-none aspect-video object-cover"
          />
        </div>
      </div>
    </div>
  </section>

        
        {/* Lourdes: A Place of Miracles */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
                Lourdes: Um lugar de fé e esperança
              </h3>
              
              <p className="text-lg mb-4 leading-relaxed">
  Ao longo das visitas à Gruta de Lourdes, testemunhei profundamente a força que a oração exerce na vida das pessoas.
 Vi peregrinos chegarem carregando dores e preocupações e encontrarem ali consolo, serenidade e renovação interior. Para muitos, é como se o coração encontrasse descanso diante de Deus, em um ambiente marcado pela fé e pela misericórdia divina.
              </p>
              
              <p className="text-lg leading-relaxed">
                Em Lourdes, a experiência vivida vai além do físico: é também espiritual e emocional. Milhares de peregrinos visitam a gruta todos os anos em busca de oração e esperança, confiando suas intenções à intercessão da Virgem Maria e fortalecendo sua fé por meio desse encontro com o sagrado.
              </p>
            </div>
          </div>
        </section>
        
        {/* Prayer Journey Steps */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">
              A Jornada da Sua Oração
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
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
                  <Check className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Após a realização da visita, enviamos por e-mail os registros da entrega das orações, permitindo que você acompanhe esse momento especial vivido no santuário.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Lourdes Extraordinary */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              O Que Torna Lourdes Tão Especial?
            </h3>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Lourdes é reconhecida no mundo inteiro como um dos mais importantes destinos de peregrinação cristã, para onde pessoas de diferentes países viajam em busca de oração, consolo e renovação espiritual. Ao longo dos anos, inúmeros peregrinos relatam experiências profundas de fé e esperança vividas nesse lugar marcado pela devoção à Virgem Maria.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Há mais de 160 anos, milhões de pessoas passaram pela gruta confiando suas intenções a Deus. Muitos retornam fortalecidos espiritualmente, com o coração renovado e a fé reacendida. Para quem visita Lourdes, o ambiente de oração e recolhimento cria a sensação de proximidade com o sagrado, tornando esse encontro uma experiência profundamente significativa.
                </p>
              </div>
                <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img05.webp" 
                  alt="Rio entre montanhas" 
                  className="w-full max-w-none aspect-video object-cover"
                />
                </div>
            </div>
          </div>
        </section>
        
        {/* Join the Healing Chain */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Una-se a esta corrente de oração e fé
              </h3>
              
              <p className="text-lg mb-6 text-center leading-relaxed">
                Você tem a oportunidade de enviar sua intenção de oração à Gruta de Lourdes — um local de profunda devoção, conhecido em todo o mundo pela fé e esperança que inspira milhões de peregrinos. Imagine seus pedidos mais sinceros sendo levados com respeito e reverência até esse espaço dedicado à oração.
                Seja por você ou por alguém querido, esse gesto representa um momento de entrega e confiança em Deus, unindo sua prece à de incontáveis fiéis que, ao longo dos anos, encontraram em Lourdes um lugar de silêncio, esperança e renovação espiritual.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ready to Feel Lourdes' Healing Power */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
  Sua intenção será incluída na entrega das orações.
</h3>
            
            <div className="flex flex-col gap-8">
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/img06.webp" 
                  alt="Árvores de pinheiro" 
                  className="w-full max-w-none aspect-video object-cover"
                />
              </div> <div>
                <p className="text-lg leading-relaxed">
                  Muitos fiéis encontram profunda paz interior ao confiar suas preces a Lourdes, um lugar marcado pela oração e pela devoção à Virgem Maria. Seja em momentos de busca por serenidade, fortalecimento espiritual ou consolo emocional, a experiência de oração nesse local sagrado inspira esperança e renovação pela graça de Deus.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contribution Section */}
        <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
              Envie Seu Pedido de Oração Agora
            </h3>
            
            <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              Sabemos que nem todos têm a oportunidade de viajar até Lourdes e deixar pessoalmente suas orações em um dos mais conhecidos locais de peregrinação do mundo. Por isso, organizamos esta iniciativa para ajudar pessoas a enviarem suas intenções de oração até a Gruta de Lourdes, permitindo que esse gesto de fé possa ser vivido mesmo à distância.
            </p>
            
            <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
              Como devotos, acreditamos que a oração deve estar ao alcance de todos. Por isso, buscamos tornar possível o envio das intenções à Gruta de Lourdes de forma acessível e organizada, permitindo que mais pessoas participem desse gesto de fé.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1 */}
              <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 19.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Participação Solidária</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Gostaria de enviar minha intenção de oração à Gruta de Lourdes e participar deste gesto de fé de forma acessível.”
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718672" target="_blank" rel="noopener noreferrer">
                      Incluir minha oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    É uma alegria incluir sua intenção na próxima entrega.
                  </p>
                </CardContent>
              </Card>
              
              {/* Option 2 */}
              <Card className="border-[#5f9ea0] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#5f9ea0] text-white text-xs py-1 px-3 rounded-bl-lg">
                  Recomendado
                </div>
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <HeartPulse className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 39.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Custo Real da Entrega</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Desejo contribuir com o valor correspondente à organização e entrega da minha intenção de oração na Gruta de Lourdes.”
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718780" target="_blank" rel="noopener noreferrer">
                      Entrega Completa da Oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Este valor contribui para a organização e realização da entrega das intenções.
                  </p>
                </CardContent>
              </Card>
              
              {/* Option 3 */}
              <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#f4d58d]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 55.00</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Envio + Apoio Solidário</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Além de enviar minha intenção, desejo contribuir para que outras pessoas também possam participar deste gesto de fé.”
                  </p>
                  
                  <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718847" target="_blank" rel="noopener noreferrer">
                      Enviar e Apoiar
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Obrigado por apoiar esta iniciativa devocional.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
  <p className="text-lg font-playfair italic text-[#5f9ea0]">
  Caro(a) fiel, Deus tocou seu coração por um motivo. Escolha agora uma forma de levar sua oração até Lourdes.
</p>

  <p className="text-lg font-playfair italic text-[#333333] mt-6">
    "Levai as cargas uns dos outros e, assim, cumprireis a lei de Cristo."
  </p>

  <p className="text-sm text-[#666666]">– Gálatas 6:2</p>
</div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Confie sua intenção de oração à Gruta de Lourdes hoje mesmo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Envie sua intenção de oração para ser levada à Gruta de Lourdes e una sua prece à tradição de fé vivida diariamente nesse local sagrado.
              Sua oração será incluída na próxima entrega realizada pelos voluntários, conduzida com respeito e reverência nesse espaço de profunda devoção.
            </p>
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
        <p>&copy; Este projeto é operado por uma agência independente responsável pela gestão digital e operacional da iniciativa, incluindo a manutenção da plataforma, registro das intenções recebidas, atendimento aos participantes, processamento das transações e organização logística dos pedidos de oração enviados.
          Todas as solicitações são registradas em sistema próprio, garantindo rastreabilidade, controle operacional e acompanhamento da prestação do serviço contratado.
          Trata-se de uma prestação de serviço de intermediação e organização devocional, realizada de forma estruturada e transparente, com fluxo operacional definido e suporte ao cliente disponível.
          Esta iniciativa possui caráter devocional independente e não mantém vínculo oficial com o Santuário de Nossa Senhora de Lourdes, com a Diocese de Tarbes e Lourdes ou com qualquer instituição religiosa oficial.</p>
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

export default Confirmation;

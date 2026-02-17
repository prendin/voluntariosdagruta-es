import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";




const Confirmation = () => {
  const [headline, setHeadline] = useState("");
  const [paragrafo, setParagrafo] = useState("");

  const location = useLocation();
  const state = location.state as { nome?: string; genero?: string } | null;

  const nomeCompleto = state?.nome || "irmã";
  const genero = state?.genero || ""; // ✅ agora declarado corretamente

  const primeiroNome = nomeCompleto.split(" ")[0];
  const firstName = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();
  const saudacao = `Olá, ${firstName}`;
  const prontx = genero === "feminino" ? "pronta" : "pronto";

  useEffect(() => {
    const h = localStorage.getItem("headline");
    const p = localStorage.getItem("paragrafo");
    if (h) setHeadline(h);
    if (p) setParagrafo(p);
  }, []);

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
  <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
    <div className="w-20 h-20 mx-auto mb-6 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center">
      <HeartPulse className="text-[#5f9ea0]" size={40} />
    </div>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-[#333333]">
      {headline || "📿 Falta apenas um passo para sua oração chegar à Gruta de Lourdes"}
    </h2>

    {/* Frase de alerta logo abaixo */}
    <div className="bg-[#5f9ea0]/10 border-l-4 border-[#5f9ea0] text-[#22505a] p-4 rounded-md mt-6">
      <p className="text-lg font-medium">
      Sua oração foi recebida com fé, mas ainda <strong className="text-[#5f9ea0]">não foi entregue</strong>.
      Siga até o final da página para <strong className="text-[#5f9ea0]">concluir esse gesto sagrado</strong>.
      </p>
    </div>
  </div>
</section>
        
        {/* Personal Greeting Section */}
        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
           <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
  {saudacao}
</h3>

            {paragrafo && (
              <p className="text-lg mb-6 leading-relaxed">
                {paragrafo}
              </p>
            )}

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Aqui é a Irmá Fátima, e escrevo a você hoje com grande alegria e esperança no coração. Por muitos anos fui abençoada por servir como voluntáriária na Gruta de Lourdes, um lugar onde milagres de cura acontecem todos os dias.
                </p>
                <p className="text-lg mb-4 leading-relaxed">
                  Sempre que estou diante da Gruta, fico comovida com os testemunhos de pessoas que encontraram cura, paz e restauração no corpo e no espírito. Esse local sagrado, onde a Santíssima Virgem Maria apareceu, é conhecido em todo o mundo por seu poder divino de curar. Pela graça de Deus, temos o privilégio de levar suas orações até esse lugar milagroso.
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
                Lourdes: Um Lugar de Milagres
              </h3>
              
              <p className="text-lg mb-4 leading-relaxed">
                {firstName}, eu pessoalmente testemunhei o poder curador da oração em Lourdes. Vi pessoas encontrarem alívio de doenças crônicas, se recuperarem fisicamente e alcançarem uma paz interior que só Deus pode oferecer. É como se o Céu tocasse a Terra em Lourdes — e cada oração elevada ali é acolhida com compaixão e misericórdia divina.
              </p>
              
              <p className="text-lg leading-relaxed">
                A cura em Lourdes não é apenas física — é espiritual e emocional também. Milhares de peregrinos buscam a intervenção divina e, pela intercessão da Virgem Maria, recebem milagres que superam tudo o que poderiam imaginar.
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
                <p className="text-center">Sua oração é impressa com respeito e carinho.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 2</h4>
                <p className="text-center">Sua oração é entregue pessoalmente na Gruta de Lourdes, colocada em um local sagrado onde milagres já aconteceram. Também realizamos uma bênção especial por você.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Passo 3</h4>
                <p className="text-center">Você receberá por e-mail as fotos da sua oração colocada na Gruta assim que chegarmos ao local sagrado, na visita mensal.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Lourdes Extraordinary */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              O Que Torna Lourdes Tão Extraordinária?
            </h3>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Lourdes é reconhecida no mundo inteiro como um santuário de cura, onde os doentes buscam alívio e restauração. Todos os dias, vejo a fé transformar vidas neste lugar. Seja por cura física, paz interior ou renovação espiritual, a presença da Virgem Maria pode ser sentida em cada canto deste sagrado local.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Há mais de 160 anos, milhões de pessoas buscaram cura aqui — e muitas foram agraciadas com recuperações milagrosas. Corações restaurados, corpos curados, esperanças renovadas. Parece que o véu entre o Céu e a Terra se torna mais fino em Lourdes, permitindo que nossas orações cheguem rapidamente aos ouvidos do Pai.
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
                Una-se a Esta Corrente de Cura e Fé
              </h3>
              
              <p className="text-lg mb-6 text-center leading-relaxed">
                Você tem a oportunidade preciosa de enviar sua oração à Gruta de Lourdes — um local sagrado conhecido por milagres de cura. Imagine seus pedidos mais profundos sendo levados com fé até esse solo abençoado. Seja por você ou por alguém querido, esse ato de fé é mais que um pedido — é uma conexão direta com nosso Senhor e com todos que já foram tocados pela graça de Lourdes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ready to Feel Lourdes' Healing Power */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
              {firstName}, o seu pedido será colocado na caixa de orações.
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
                  Não há nada como a paz e a cura que tomam conta do coração quando confiamos nossas preces a Lourdes. Seja por cura física, restauração espiritual ou alívio emocional, este local santo tem o poder de renovar pela graça de Deus.
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
              Sabemos que nem todos têm a chance de deixar suas orações em um dos locais mais sagrados do mundo — especialmente em tempos difíceis financeiramente. Por isso, decidimos ajudar outras pessoas a enviarem suas orações e receberem as bênçãos que merecem.
            </p>
            
            <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
              Como devotos, jamais queremos que o dinheiro seja um obstáculo para suas preces sinceras.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1 */}
              <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">R$ 19.90</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Preciso de um Pequeno Apoio</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    "Por favor, levem minha oração até Lourdes. No momento, não consigo arcar com o valor completo, mas desejo participar deste ato sagrado."
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718672" target="_blank" rel="noopener noreferrer">
                      Incluir minha oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    É uma honra incluir sua oração.
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
                    "Estou cobrindo o custo total para levar minha oração à Gruta. Obrigado por tornar isso possível."
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718780" target="_blank" rel="noopener noreferrer">
                      Entrega Completa da Oração
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Este é o custo real da missão de entrega.
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
                  <h4 className="font-sans text-lg mb-4 text-center">Leve Minha Oração + Apoie Outro Devoto</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    "Quero contribuir um pouco mais para ajudar outra pessoa que talvez não possa. Que minha oração e minha doação tragam bênçãos a quem precisa."
                  </p>
                  
                  <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://voluntariosdagruta.carrinho.app/one-checkout/ocmdf/33718847" target="_blank" rel="noopener noreferrer">
                      Enviar e Ajudar
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Obrigado por sua generosidade.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
  <p className="text-lg font-playfair italic text-[#5f9ea0]">
    {firstName}, Deus tocou seu coração por um motivo. Escolha agora uma forma de levar sua oração até Lourdes.
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
              Receba o Presente dos Milagres Hoje Mesmo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Coloque sua oração na Gruta de Lourdes e confie no poder da intervenção divina. 
              Sua oração, entregue pessoalmente, fará parte da tradição sagrada desse lugar santo.
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
              Voluntários de Lourdes
            </h3>
            <p className="text-sm text-marian-blue">Levando sua fé até os pés de Maria</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Somos um grupo independente de devotos católicos comprometidos em levar intenções de oração ao Santuário Internacional de Nossa Senhora de Lourdes.
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
  Nossa missão é levar as orações dos fiéis até a Gruta de Lourdes, onde Maria apareceu a Santa Bernadette.  
  Já fazemos isso com amor, fé e dedicação há mais de 14 anos, entregando cada intenção com respeito e reverência.  
  Todos os dias, recebemos pedidos de oração de pessoas que confiam no poder da intercessão de Nossa Senhora.  
  É uma honra poder ser ponte entre o coração dos devotos e este local de tantas graças.  
  <br /><br />
  O projeto Voluntários de Lourdes é uma iniciativa devocional independente e não possui vínculo oficial com o Santuário de Nossa Senhora de Lourdes,  
  a Diocese de Tarbes e Lourdes ou qualquer instituição religiosa oficial. Nossa missão é puramente espiritual e voluntária.  
  Não prometemos milagres, apenas entregamos com fé as intenções enviadas à gruta sagrada onde Maria apareceu.
</p>
      </div>

      <div className="text-center text-gray-400">
        <p>&copy; 2025 Voluntários de Lourdes. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Desenvolvido com fé para levar esperança a quem mais precisa.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Confirmation;

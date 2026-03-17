import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, HeartPulse, Gift, HandHeart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";




const Confirmation = () => {
  const saudacao = "Querido fiel,";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">Voluntarios de la Gruta de Lourdes</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#como-funciona" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Cómo Funciona</a>
            <a href="#por-que-lourdes" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">¿Por Qué Lourdes?</a>
            <a href="#contribuicao" className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors">Contribuir</a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Abrir menú</span>
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
        📿 Solo falta un paso para que tu oración llegue a la Gruta de Lourdes
      </h2>

      {/* Frase de alerta logo abaixo */}
      <div className="bg-[#5f9ea0]/10 border-l-4 border-[#5f9ea0] text-[#22505a] p-4 rounded-md mt-6">
        <p className="text-lg font-medium">
          Tu intención de oración ha sido recibida y registrada, pero aún{" "}
          <strong className="text-[#5f9ea0]">
            debe confirmarse para que pueda incluirse en la próxima entrega
          </strong>
          . Continúa hasta el final de la página para{" "}
          <strong className="text-[#5f9ea0]">completar este envío.</strong>
        </p>
      </div>
    </div>
  </section>

  {/* Carta / Seção de Boas-vindas */}
  <section className="py-16 px-2 sm:px-4 bg-white">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg">
      <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
        Querido fiel,
      </h3>

      <div className="flex flex-col gap-8">
        <div>
          <p className="text-lg mb-4 leading-relaxed">
            Soy la Hermana Fátima y hoy te escribo con alegría y esperanza en el
            corazón. Desde hace años participo como voluntaria en visitas a la Gruta de
            Lourdes, un lugar que acoge cada día a personas de distintas
            partes del mundo en busca de oración, consuelo y renovación espiritual.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Siempre que estoy ante la Gruta, siento una profunda emoción al presenciar
            testimonios de fe y esperanza compartidos por peregrinos que encuentran
            allí paz y fortaleza interior. Este lugar sagrado, donde según la
            tradición católica se apareció la Santísima Virgen María, se ha convertido en uno
            de los destinos de peregrinación cristiana más conocidos del mundo. Con
            humildad y devoción, llevamos hasta ese lugar las intenciones de oración
            que nos son confiadas.
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
                Lourdes: un lugar de fe y esperanza
              </h3>
              
              <p className="text-lg mb-4 leading-relaxed">
  A lo largo de mis visitas a la Gruta de Lourdes, he sido testigo de la fuerza que la oración ejerce en la vida de las personas.
 Vi llegar a peregrinos cargando dolores y preocupaciones, y encontrar allí consuelo, serenidad y renovación interior. Para muchos, es como si el corazón encontrara descanso ante Dios, en un ambiente marcado por la fe y la misericordia divina.
              </p>
              
              <p className="text-lg leading-relaxed">
                En Lourdes, la experiencia va más allá de lo físico: también es espiritual y emocional. Miles de peregrinos visitan la gruta cada año en busca de oración y esperanza, confiando sus intenciones a la intercesión de la Virgen María y fortaleciendo su fe a través de este encuentro con lo sagrado.
              </p>
            </div>
          </div>
        </section>
        
        {/* Prayer Journey Steps */}
        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">
              El Recorrido de Tu Oración
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 1</h4>
                <p className="text-center">Tu intención de oración se registra en nuestro sistema y se prepara cuidadosamente para ser llevada durante la próxima visita a la Gruta de Lourdes.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 2</h4>
                <p className="text-center">Durante la visita, las intenciones se llevan hasta la Gruta y se depositan en el lugar destinado a las peticiones de oración, en un momento de recogimiento y devoción. Ese momento queda registrado en imágenes.</p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 3</h4>
                <p className="text-center">Después de la visita, te enviamos por correo electrónico los registros de la entrega de las oraciones, para que puedas acompañar este momento especial vivido en el santuario.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes Lourdes Extraordinary */}
        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              ¿Qué Hace que Lourdes Sea Tan Especial?
            </h3>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-lg mb-4 leading-relaxed">
                  Lourdes es reconocida en todo el mundo como uno de los destinos de peregrinación cristiana más importantes, al que personas de distintos países viajan en busca de oración, consuelo y renovación espiritual. A lo largo de los años, innumerables peregrinos relatan profundas experiencias de fe y esperanza vividas en este lugar marcado por la devoción a la Virgen María.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Desde hace más de 160 años, millones de personas han pasado por la gruta confiando sus intenciones a Dios. Muchos regresan fortalecidos espiritualmente, con el corazón renovado y la fe reavivada. Para quienes visitan Lourdes, el ambiente de oración y recogimiento crea una sensación de cercanía con lo sagrado, convirtiendo este encuentro en una experiencia profundamente significativa.
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
                Únete a esta cadena de oración y fe
              </h3>
              
              <p className="text-lg mb-6 text-center leading-relaxed">
                Tienes la oportunidad de enviar tu intención de oración a la Gruta de Lourdes, un lugar de profunda devoción, conocido en todo el mundo por la fe y la esperanza que inspira a millones de peregrinos. Imagina que tus peticiones más sinceras sean llevadas con respeto y reverencia hasta este espacio dedicado a la oración.
                Ya sea por ti o por un ser querido, este gesto representa un momento de entrega y confianza en Dios, uniendo tu plegaria a la de incontables fieles que, a lo largo de los años, han encontrado en Lourdes un lugar de silencio, esperanza y renovación espiritual.
              </p>
            </div>
          </div>
        </section>
        
        {/* Ready to Feel Lourdes' Healing Power */}
        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0]">
  Tu intención será incluida en la entrega de las oraciones.
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
                  Muchos fieles encuentran una profunda paz interior al confiar sus plegarias a Lourdes, un lugar marcado por la oración y la devoción a la Virgen María. Ya sea en momentos de búsqueda de serenidad, fortaleza espiritual o consuelo emocional, la experiencia de oración en este lugar sagrado inspira esperanza y renovación por la gracia de Dios.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contribution Section */}
        <section id="contribuicao" className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-[#5f9ea0] text-center">
              Envía Tu Petición de Oración Ahora
            </h3>
            
            <p className="text-lg mb-8 text-center leading-relaxed max-w-3xl mx-auto">
              Sabemos que no todos tienen la oportunidad de viajar a Lourdes y dejar personalmente sus oraciones en uno de los lugares de peregrinación más conocidos del mundo. Por eso, organizamos esta iniciativa para ayudar a las personas a enviar sus intenciones de oración a la Gruta de Lourdes, permitiendo que este gesto de fe también pueda vivirse a la distancia.
            </p>
            
            <p className="text-lg mb-10 text-center font-semibold max-w-3xl mx-auto">
              Como devotos, creemos que la oración debe estar al alcance de todos. Por eso, buscamos hacer posible el envío de intenciones a la Gruta de Lourdes de una manera accesible y organizada, permitiendo que más personas participen en este gesto de fe.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1 */}
              <Card className="border-[#5f9ea0]/30 shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#5f9ea0]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">$10.00</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Participación Solidaria</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Me gustaría enviar mi intención de oración a la Gruta de Lourdes y participar en este gesto de fe de una manera accesible.”
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://pay.hotmart.com/M104952419M?off=vi359vds&checkoutMode=10" target="_blank" rel="noopener noreferrer">
                      Incluir mi oración
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Es una alegría incluir tu intención en la próxima entrega.
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
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">$19</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Costo Real de la Entrega</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Deseo contribuir con el valor correspondiente a la organización y entrega de mi intención de oración en la Gruta de Lourdes.”
                  </p>
                  
                  <Button className="w-full bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://pay.hotmart.com/M104952419M?off=gzivvj4c&checkoutMode=10" target="_blank" rel="noopener noreferrer">
                      Entrega Completa de la Oración
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Este valor contribuye a la organización y realización de la entrega de las intenciones.
                  </p>
                </CardContent>
              </Card>
              
              {/* Option 3 */}
              <Card className="border-[#f4d58d] shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 px-4 pb-6">
                  <div className="flex justify-center mb-4">
                    <Gift className="text-[#f4d58d]" size={32} />
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl mb-2 text-center">$39</h3>
                  <h4 className="font-sans text-lg mb-4 text-center">Envío + Apoyo Solidario</h4>
                  
                  <p className="text-sm mb-6 text-center italic">
                    “Además de enviar mi intención, deseo contribuir para que otras personas también puedan participar en este gesto de fe.”
                  </p>
                  
                  <Button className="w-full bg-[#f4d58d] hover:bg-[#e3c47c] text-[#333333] px-4 py-2 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all" asChild>
                    <a href="https://pay.hotmart.com/M104952419M?off=7km4f3n7&checkoutMode=10" target="_blank" rel="noopener noreferrer">
                      Enviar y Apoyar
                    </a>
                  </Button>
                  
                  <p className="text-xs mt-3 text-center text-gray-500">
                    Gracias por apoyar esta iniciativa devocional.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 text-center">
  <p className="text-lg font-playfair italic text-[#5f9ea0]">
  Dios tocó tu corazón por una razón. Elige ahora una forma de llevar tu oración hasta Lourdes.
</p>

  <p className="text-lg font-playfair italic text-[#333333] mt-6">
    "Lleven los unos las cargas de los otros, y así cumplirán la ley de Cristo."
  </p>

  <p className="text-sm text-[#666666]">– Gálatas 6:2</p>
</div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Confía tu intención de oración a la Gruta de Lourdes hoy mismo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Envía tu intención de oración para que sea llevada a la Gruta de Lourdes y une tu plegaria a la tradición de fe que se vive diariamente en este lugar sagrado.
              Tu oración será incluida en la próxima entrega realizada por los voluntarios, llevada con respeto y reverencia a este espacio de profunda devoción.
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
              Voluntarios de la Gruta de Lourdes
            </h3>
            <p className="text-sm text-marian-blue">Llevando intenciones de oración hasta la Gruta de Lourdes, en Francia</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Somos un grupo independiente de devotos comprometidos con llevar intenciones de oración a la Gruta de Lourdes, un lugar de profunda devoción mariana donde, según la tradición católica, la Virgen María se apareció a Santa Bernadette en 1858.
        </p>
      </div>

      {/* Contato */}
      <div>
        <h4 className="font-playfair text-lg font-semibold text-white mb-4">
          Contacto
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
          Información Legal
        </h4>
        <div className="space-y-2">
          <a href="#" className="block hover:text-white transition-colors">
            Términos de Uso
          </a>
          <a href="#" className="block hover:text-white transition-colors">
            Política de Privacidad
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
  Nuestra misión es llevar las intenciones de oración de los fieles hasta la Gruta de Lourdes, lugar donde,
  según la tradición católica, la Virgen María se apareció a Santa Bernadette.
  Realizamos este trabajo con respeto, fe y dedicación, reuniendo peticiones de oración
  enviadas por personas que confían en la intercesión de la Virgen María y desean unir sus plegarias a este lugar de profunda devoción.  
  <br /><br />
  El proyecto Voluntarios de la Gruta de Lourdes es una iniciativa devocional independiente y no tiene vínculo oficial con el
  Santuario de Nuestra Señora de Lourdes, con la Diócesis de Tarbes y Lourdes ni con ninguna institución religiosa oficial.
  Se trata de una acción de carácter devocional, organizada de forma estructurada para hacer posible el envío y la entrega de las intenciones recibidas.  
  No prometemos milagros ni resultados espirituales específicos. Nuestro propósito es llevar, con respeto y reverencia,
  las intenciones enviadas por los participantes hasta la gruta sagrada, preservando el carácter espiritual y simbólico de este gesto de fe.
</p>
      </div>

      <div className="text-center text-gray-400">
        <p>&copy; Este proyecto es operado por una agencia independiente responsable de la gestión digital y operativa de la iniciativa, incluyendo el mantenimiento de la plataforma, el registro de las intenciones recibidas, la atención a los participantes, el procesamiento de las transacciones y la organización logística de las peticiones de oración enviadas.
          Todas las solicitudes se registran en un sistema propio, garantizando trazabilidad, control operativo y seguimiento de la prestación del servicio contratado.
          Se trata de un servicio de intermediación y organización devocional, realizado de forma estructurada y transparente, con un flujo operativo definido y soporte al cliente disponible.
          Esta iniciativa tiene carácter devocional independiente y no mantiene vínculo oficial con el Santuario de Nuestra Señora de Lourdes, con la Diócesis de Tarbes y Lourdes ni con ninguna institución religiosa oficial.</p>
        <p className="mt-2 text-sm">
          © 2026 Agência Adspot. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Confirmation;

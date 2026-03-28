
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, BookText, Heart, HandHeart } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type FormData = {
  name: string;
  email: string;
  prayer: string;
};

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      prayer: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        name: data.name.trim(),
        email: data.email.trim(),
        prayer: data.prayer.trim(),
        lang: "es",
      };

      const gptRes = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await gptRes.text();

      console.log("gptRes status:", gptRes.status);
      console.log("gptRes body:", responseText);

      if (!gptRes.ok) {
        throw new Error(`HTTP ${gptRes.status} - ${responseText || "Resposta vazia da API"}`);
      }

      let gptData: any;

      try {
        gptData = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Erro ao converter resposta em JSON:", parseError);
        throw new Error("A API retornou uma resposta inválida.");
      }

      localStorage.setItem("headline", gptData?.headline || "");
      localStorage.setItem("paragrafo", gptData?.paragrafo || "");

      toast({
        title: "✉️ Oración recibida",
        description: "Mantén esta página abierta.",
      });

      navigate("/salvando", {
        state: {
          nome: data.name,
        },
      });
    } catch (error) {
      console.error("Erro no envio:", error);

      let errorMessage = "Algo salió mal. Inténtalo de nuevo.";

      if (error instanceof Error && error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <HandHeart className="text-[#5f9ea0]" size={24} />
            </div>
            <h1 className="text-xl font-playfair font-semibold text-[#5f9ea0]">
              Voluntarios de la Gruta de Lourdes
            </h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#como-funciona"
              className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#por-que-lourdes"
              className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors"
            >
              ¿Por qué Lourdes?
            </a>
            <a
              href="#formulario"
              className="text-sm text-gray-700 hover:text-[#5f9ea0] transition-colors"
            >
              Formulario de oración
            </a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Abrir menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-[#333333]">
              🕊 Las bendiciones suceden todos los días en la Gruta de Lourdes
            </h2>
            <p className="text-xl md:text-2xl font-playfair mb-6 text-[#5f9ea0]">
              Envía tu petición de oración al Santuario Internacional de Nuestra Señora de Lourdes, en Francia
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Cada año, más de 6 millones de peregrinos viajan hasta la Gruta de Lourdes, en Francia, en busca de fe,
              consuelo y renovación espiritual. Ahora, tu intención de oración también puede ser llevada a este lugar de
              profunda devoción, incluso a la distancia. Permítenos llevar tu mensaje hasta la gruta sagrada donde, a lo
              largo de los años, millones de fieles han reunido sus plegarias y han vivido momentos de gracia y esperanza.
            </p>
            <Button
              asChild
              className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              <a href="#formulario">➡️ Enviar mi petición de oración</a>
            </Button>
          </div>
        </section>

        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#f4d58d]/10 border border-[#f4d58d]/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Tu oración, entregada en la Gruta de Lourdes
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Periódicamente realizamos visitas a la Gruta de Lourdes llevando las intenciones de oración recibidas a
                través de la plataforma. Al completar el formulario a continuación, tu intención será incluida en la próxima
                entrega organizada por los voluntarios. Después de la visita, enviamos por correo electrónico registros de la
                entrega de las oraciones, compartiendo con los participantes este momento de devoción vivido en el lugar
                sagrado.
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
                  <a href="#formulario">➡️ Enviar mi petición de oración</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg sm:max-w-2xl">
            <h3 className="text-3xl font-playfair font-semibold mb-10 text-center text-[#333333]">
              Envía tu oración a la Gruta de Lourdes
            </h3>
            <Card className="w-full border-[#5f9ea0]/30 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Escribe tu nombre"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("name", { required: "El nombre es obligatorio" })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      placeholder="Escribe tu correo electrónico"
                      className="w-full border-[#5f9ea0]/30"
                      {...register("email", {
                        required: "El correo electrónico es obligatorio",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Correo electrónico inválido",
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="prayer" className="block text-sm font-medium">
                      Tu intención de oración
                    </label>
                    <Textarea
                      id="prayer"
                      placeholder="Escribe aquí tu oración..."
                      className="w-full min-h-[150px] border-[#5f9ea0]/30"
                      {...register("prayer", { required: "La oración es obligatoria" })}
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
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Enviando tu oración...
                        </span>
                      ) : (
                        "Enviar mi oración"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="como-funciona" className="py-16 md:py-24 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-5xl">
            <h3 className="text-3xl font-playfair font-semibold mb-12 text-center text-[#333333]">Cómo Funciona</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <BookText className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 1</h4>
                <p className="text-center">
                  Tu intención de oración se registra en nuestro sistema y se prepara cuidadosamente para ser llevada durante
                  la próxima visita a la Gruta de Lourdes.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 2</h4>
                <p className="text-center">
                  Durante la visita, las intenciones se llevan hasta la gruta y se depositan en el lugar destinado a las
                  peticiones de oración, en un momento de recogimiento y devoción. Este momento queda registrado en imágenes.
                </p>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
                <div className="w-20 h-20 bg-[#5f9ea0]/10 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#5f9ea0]" size={32} />
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-4 text-[#333333]">Paso 3</h4>
                <p className="text-center">
                  Después de la visita, te enviamos por correo electrónico los registros de la entrega de las oraciones para
                  que puedas acompañar este momento especial vivido en el santuario.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              Las Bendiciones Te Esperan
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Al enviar tu intención de oración a la Gruta de Lourdes, te unes a millones de fieles que, a lo largo de los
              años, han peregrinado a este lugar en busca de fe, consuelo y esperanza. Muchos encuentran allí un espacio de
              silencio, oración y renovación espiritual, profundamente marcado por la devoción a la Virgen María.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Ya sea en momentos de búsqueda de paz, sanación interior, orientación o serenidad, confiar tu oración a Lourdes
              es un gesto de fe y entrega. Para muchos devotos, esta experiencia se convierte en un recuerdo significativo —
              una señal concreta de su deseo de acercarse a Dios a través de la oración.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <a href="#formulario">➡️ Enviar Mi Oración Ahora</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              Vive las Bendiciones de Lourdes sin Salir de Casa
            </h3>
            <p className="text-lg mb-8 text-center leading-relaxed">
              No todos pueden viajar hasta Lourdes, pero la oración permite que la fe trascienda cualquier distancia. Al
              confiar tu intención para que sea llevada a la gruta, participas espiritualmente de este lugar de profunda
              devoción, uniendo tu oración a la de millones de fieles que rezan allí cada año. Así, incluso a la distancia,
              puedes vivir este gesto de fe y mantener tu oración presente en uno de los lugares de peregrinación mariana más
              conocidos del mundo.
            </p>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/img02.webp"
                alt="Paisaje sereno representando las bendiciones de Lourdes"
                className="w-full max-w-none aspect-video object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-2 sm:px-4 bg-white">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <div className="bg-[#5f9ea0]/5 border border-[#5f9ea0]/10 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-[#333333]">
                Comparte este gesto de fe con quienes amas
              </h3>
              <p className="text-lg mb-6 text-center leading-relaxed">
                Envía una intención de oración por alguien querido y transforma este gesto en una señal de cuidado, esperanza
                y fe. Confiar una oración en favor de otra persona es una forma profunda de amor e intercesión, uniendo
                pensamientos y plegarias en un momento de espiritualidad y devoción.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <a href="#formulario">➡️ Enviar una Oración por un Ser Querido</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="por-que-lourdes" className="py-16 px-2 sm:px-4 bg-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-8 text-center text-[#333333]">
              ¿Por Qué la Gruta de Lourdes?
            </h3>

            <div className="my-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/img03.webp"
                alt="Interior de catedral representando la Gruta de Lourdes"
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
                  Desde las apariciones de la Virgen María a Santa Bernadette en 1858, la Gruta de Lourdes se ha convertido
                  en uno de los destinos de peregrinación cristiana más importantes del mundo. Millones de fieles visitan este
                  lugar movidos por la fe, en busca de consuelo espiritual y por los numerosos testimonios de gracias recibidas
                  a lo largo de los años. Hoy, incluso a la distancia, tu intención de oración también puede ser llevada a este
                  espacio de profunda devoción, uniendo tu plegaria a la tradición de oración que se vive diariamente en la
                  gruta.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24 px-2 sm:px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-screen-lg text-center max-w-4xl">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-[#333333]">
              Confía tu oración a Nuestra Señora de Lourdes hoy mismo
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Envía tu intención de oración para que sea llevada a la Gruta de Lourdes y une tu plegaria a la tradición de fe
              que se vive diariamente en este lugar sagrado. Tu oración formará parte de este gesto de devoción, siendo
              presentada con respeto y reverencia durante la visita a la gruta.
            </p>
            <a
              href="#formulario"
              className="inline-block px-6 py-4 bg-[#5f9ea0] hover:bg-[#4e8a8c] text-white rounded-lg text-lg font-medium shadow-md hover:shadow-lg text-center leading-tight"
            >
              ➡️ Enviar Mi Oración
              <br />a la Gruta de Lourdes
            </a>
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-gray-800 text-gray-300">
        <div className="max-w-screen-lg mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-marian-blue p-2 rounded-xl">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">
                    Voluntarios de la Gruta de Lourdes
                  </h3>
                  <p className="text-sm text-marian-blue">
                    Llevando intenciones de oración a la Gruta de Lourdes, en Francia
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Somos un grupo independiente de devotos comprometidos en llevar intenciones de oración a la Gruta de Lourdes,
                lugar de profunda devoción mariana donde, según la tradición católica, la Virgen María se apareció a Santa
                Bernadette en 1858.
              </p>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-marian-blue" />
                  <a
                    href="mailto:espiritualidadeviva.org@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    espiritualidadeviva.org@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold text-white mb-4">Información Legal</h4>
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

          <div className="border-t border-gray-700 pt-8">
            <div className="bg-gray-700 rounded-xl p-6 mb-6">
              <h4 className="font-playfair text-lg font-semibold text-white mb-3">
                Aviso Legal Importante
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Nuestra misión es llevar las intenciones de oración de los fieles a la Gruta de Lourdes, lugar donde, según la
                tradición católica, la Virgen María se apareció a Santa Bernadette. Realizamos este trabajo con respeto, fe y
                dedicación, reuniendo pedidos de oración enviados por personas que confían en la intercesión de la Virgen María
                y desean unir sus plegarias a este lugar de profunda devoción.
                <br />
                <br />
                El proyecto Voluntarios de la Gruta de Lourdes es una iniciativa devocional independiente y no tiene vínculo
                oficial con el Santuario de Nuestra Señora de Lourdes, con la Diócesis de Tarbes y Lourdes ni con ninguna
                institución religiosa oficial. Se trata de una acción de carácter devocional organizada de forma estructurada
                para hacer posible el envío y la entrega de las intenciones recibidas. No prometemos milagros ni resultados
                espirituales específicos. Nuestro propósito es llevar, con respeto y reverencia, las intenciones enviadas por
                los participantes hasta la gruta sagrada, preservando el carácter espiritual y simbólico de este gesto de fe.
              </p>
            </div>

            <div className="text-center text-gray-400">
              <p>
                &copy; Este proyecto es operado por una agencia independiente responsable de la gestión digital y operativa de
                la iniciativa, incluyendo el mantenimiento de la plataforma, el registro de las intenciones recibidas, la
                atención a los participantes, el procesamiento de las transacciones y la organización logística de los pedidos
                de oración enviados. Todas las solicitudes se registran en un sistema propio que garantiza la trazabilidad, el
                control operativo y el seguimiento de la prestación del servicio contratado. Se trata de un servicio de
                intermediación y organización devocional, realizado de forma estructurada y transparente, con un flujo operativo
                definido y soporte al cliente disponible. Esta iniciativa tiene carácter devocional independiente y no mantiene
                vínculo oficial con el Santuario de Nuestra Señora de Lourdes, con la Diócesis de Tarbes y Lourdes ni con
                ninguna institución religiosa oficial.
              </p>
              <p className="mt-2 text-sm">© 2026 Agência Adspot. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
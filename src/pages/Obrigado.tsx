import { Heart, MessageCircle, BookOpen, Mail } from "lucide-react";
import heroImage from "@/assets/gruta-hero.jpg";
import nossaSenhora from "@/assets/nossa-senhora.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Gruta de Lourdes iluminada por velas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">
          <div className="flex justify-center mb-6">
            <Heart className="w-10 h-10 text-accent animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-navy leading-tight mb-6">
            Agradecemos Sinceramente Pela Sua Participação
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Sua intenção de oração foi recebida e será incluída na próxima entrega realizada na Gruta de Lourdes.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-foreground/80 leading-relaxed mb-6">
              Para acompanhar os avisos e atualizações sobre os envios, entre no grupo informativo pelo link abaixo.
            </p>
            <a
              href="https://chat.whatsapp.com/LV2CvO3pxjc3A1coQliMqN?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Grupo Informativo
            </a>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-foreground/80 leading-relaxed">
              Caso tenha adquirido o Devocional, ele será enviado no seu e-mail.
            </p>
          </div>

          <div className="bg-teal-light rounded-2xl p-8 border border-primary/20">
            <p className="text-foreground/80 leading-relaxed italic">
              Como forma de agradecimento, compartilhamos a seguir a Oração de Lourdes. Que este momento fortaleça sua fé e traga paz ao seu coração.
            </p>
            <p className="text-navy font-bold mt-4 text-lg">Salve Maria!</p>
          </div>
        </div>
      </section>

      {/* Nossa Senhora Image + Prayer Title */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={nossaSenhora}
              alt="Nossa Senhora de Lourdes"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
              <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-2">Oração a</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Nossa Senhora de Lourdes
              </h2>
              <p className="text-primary mt-3 uppercase tracking-[0.2em] text-sm font-semibold">
                Conforto, Fé e Esperança
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <BookOpen className="w-8 h-8 text-accent mx-auto mb-6" />
            <p className="text-foreground/80 leading-relaxed text-center">
              Nossa Senhora de Lourdes é uma das figuras mais veneradas da Igreja Católica, conhecida por suas aparições em Lourdes, França, em 1858, à jovem Bernadette Soubirous. Durante essas aparições, Maria pediu que fosse construído um santuário e que a água de uma nascente fosse usada para curar os doentes. Desde então, Lourdes tornou-se um local de peregrinação e cura espiritual.
            </p>
            <p className="text-foreground/80 leading-relaxed text-center mt-6">
              Este livreto é dedicado a compartilhar a oração a Nossa Senhora de Lourdes, com o objetivo de trazer conforto, cura e esperança aos que buscam sua intercessão.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            Oração a Nossa Senhora de Lourdes
          </h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg italic">
            <p>
              Ó Maria, imaculada Conceição, Nossa Senhora de Lourdes, mãe de misericórdia, vós que revelaste ao mundo, através da jovem Bernadette, a força da oração e o poder da água sagrada, eu vos imploro:
            </p>
            <p>
              Intercedei por mim diante de vosso Filho, Jesus Cristo, e alcançai-me a graça que tanto necessito.
            </p>
            <p>
              Que, pela vossa intercessão, eu possa ser fortalecido na fé, curado em corpo e alma, e encontrado em paz no coração.
            </p>
            <p>
              Que a luz de Lourdes ilumine minha vida e me conduza sempre mais perto do Senhor.
            </p>
            <p>
              Em vossa imagem de mãe e intercessora, ponho minha confiança e minha oração, certa de que, com o vosso auxílio, jamais estarei sozinho em minha jornada.
            </p>
            <p className="text-navy font-bold not-italic text-xl">Amém.</p>
          </div>
        </div>
      </section>

      {/* Reflections */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-10">
            Reflexões Sobre a Oração
          </h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Esta oração nos lembra da imensa misericórdia de Maria e da sua capacidade de nos conduzir até o Senhor. Ao pedirmos sua intercessão, reconhecemos que ela não é apenas nossa mãe espiritual, mas também uma fonte de consolo e força.
            </p>
            <p>
              Lourdes é um lugar de cura, não apenas física, mas também espiritual. Quando rezamos, colocamos nossa confiança em Maria, que nos aponta sempre para a verdadeira fonte de cura: Jesus Cristo.
            </p>
            <p>
              Em momentos de dor, sofrimento ou incerteza, a oração a Nossa Senhora de Lourdes é um farol de esperança. Que este livreto seja um instrumento de fé, ajudando a fortalecer a confiança em Maria e no poder da oração.
            </p>
            <p className="text-center font-semibold text-navy">
              Lembre-se: nunca estamos sozinhos em nossa caminhada espiritual.
            </p>
            <p className="text-center italic text-primary font-medium">
              Que as bênçãos de Nossa Senhora de Lourdes estejam sobre você, agora e sempre. Amém.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-card border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          🕊 Voluntários de Lourdes — Levando sua fé até a Gruta Sagrada
        </p>
      </footer>
    </div>
  );
};

export default Index;
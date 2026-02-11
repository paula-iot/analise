import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("analise");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary" />
      
      {/* Diagonal overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      />

      {/* Content */}
      <div className="container relative z-10 text-center px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight">
            Análise Competitiva
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold">
            Kairos IT Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estudo estratégico do mercado de infraestrutura de TI e redes nas regiões de 
            Embu das Artes, Itapecerica da Serra, Taboão da Serra, Cotia e oportunidades 
            na Grande São Paulo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Concorrentes Analisados</p>
              <p className="text-3xl font-mono text-accent">3+</p>
            </div>
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Bairros Mapeados</p>
              <p className="text-3xl font-mono text-accent">15+</p>
            </div>
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Oportunidades</p>
              <p className="text-3xl font-mono text-accent">Alto Potencial</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Rolar para conteúdo"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sparkles, TrendingUp } from "lucide-react";

const neighborhoods = [
  {
    name: "Vila Olímpia",
    profile: "Polo tecnológico e corporativo",
    potential: "Alto",
    description: "Startups e empresas de tecnologia demandam infraestrutura robusta",
    color: "accent"
  },
  {
    name: "Pinheiros",
    profile: "Centro de inovação",
    potential: "Alto",
    description: "Coworkings e negócios inovadores necessitam de redes confiáveis",
    color: "accent"
  },
  {
    name: "Mooca & Barra Funda",
    profile: "Bairros em transformação",
    potential: "Muito Alto",
    description: "Galpões sendo reformados precisam de infraestrutura do zero",
    color: "primary"
  },
  {
    name: "Tatuapé & Santana",
    profile: "Rápida expansão",
    potential: "Alto",
    description: "Novos empreendimentos necessitam de cabeamento desde a planta",
    color: "accent"
  },
  {
    name: "Brooklin",
    profile: "Centro empresarial premium",
    potential: "Médio-Alto",
    description: "Grandes corporações valorizam qualidade e certificação",
    color: "accent"
  },
  {
    name: "Brás & Bela Vista",
    profile: "Alta concentração de MEIs",
    potential: "Alto",
    description: "Pacotes básicos com foco em custo-benefício e atendimento rápido",
    color: "accent"
  }
];

const expansionPhases = [
  {
    phase: "Fase 1",
    period: "0-6 meses",
    title: "Consolidação",
    description: "Fortalecer base de clientes nas cidades atuais (Embu, Itapecerica, Taboão, Cotia)",
    actions: ["Coletar depoimentos", "Criar cases de sucesso", "Estabelecer processos"]
  },
  {
    phase: "Fase 2",
    period: "6-12 meses",
    title: "Expansão Adjacente",
    description: "Prospecção em bairros da Zona Oeste e Sul próximos",
    actions: ["Butantã, Morumbi", "Campo Limpo, Capão Redondo", "Facilidade logística"]
  },
  {
    phase: "Fase 3",
    period: "12-24 meses",
    title: "Penetração em Polos",
    description: "Avançar para polos de alta densidade de PMEs",
    actions: ["Pinheiros, Vila Olímpia", "Brooklin", "Serviços especializados"]
  }
];

export default function Opportunities() {
  return (
    <section id="oportunidades" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Oportunidades na Grande São Paulo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bairros estratégicos com alto potencial para expansão
            </p>
          </div>

          {/* Neighborhoods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <MapPin className="text-accent" size={24} />
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      Potencial {neighborhood.potential}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{neighborhood.name}</CardTitle>
                  <CardDescription>{neighborhood.profile}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{neighborhood.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expansion Strategy */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="text-primary" size={28} />
                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                  Estratégia de Expansão
                </h3>
              </div>
              <p className="text-muted-foreground">
                Abordagem gradual baseada em proximidade e potencial de mercado
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {expansionPhases.map((phase, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border relative overflow-hidden"
                >
                  {/* Phase number background */}
                  <div className="absolute top-0 right-0 text-9xl font-display text-primary/5 leading-none pr-4">
                    {index + 1}
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <Badge className="w-fit bg-primary/20 text-primary border-primary/30 mb-2">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                    <CardDescription className="text-sm font-mono">{phase.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-accent" />
                        <h4 className="font-semibold text-xs uppercase tracking-wide">Ações</h4>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {phase.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

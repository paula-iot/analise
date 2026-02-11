import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Package, Award } from "lucide-react";

const positioning = {
  title: "O Especialista Confiável para PMEs",
  description: "Enquanto grandes concorrentes focam em clientes corporativos e outros possuem portfólio generalista, a Kairos IT pode se posicionar como a parceira especialista em infraestrutura de TI para pequenas e médias empresas e comércios.",
  benefits: [
    "Mais profissional que técnicos autônomos",
    "Mais acessível que grandes consultorias",
    "Atendimento personalizado e próximo"
  ]
};

const differentials = [
  {
    title: "Custo-benefício Inteligente",
    current: "Baixo custo com qualidade profissional",
    strategy: "Enfatizar que investimento em rede certificada economiza a longo prazo",
    action: "Criar materiais comparando custo de rede malfeita vs. solução profissional",
    icon: Award
  },
  {
    title: "Atendimento Personalizado",
    current: "Genuinamente personalizado",
    strategy: "Usar depoimentos e mostrar equipe em ação, destacando atenção aos detalhes",
    action: "Solicitar depoimentos em vídeo e criar 'diário de bordo' de projetos",
    icon: Target
  },
  {
    title: "Relacionamento de Confiança",
    current: "Baseado em confiança",
    strategy: "Oferecer revisão gratuita de 30 dias como prova de confiança",
    action: "Destacar revisão gratuita em propostas e criar checklist de qualidade",
    icon: Lightbulb
  }
];

const packages = [
  {
    name: "Meu Comércio Conectado",
    target: "Pequenos comércios",
    includes: [
      "2 a 4 pontos de rede",
      "Roteador Wi-Fi de qualidade",
      "2 câmeras CFTV",
      "Preço fixo e competitivo"
    ],
    badge: "Básico"
  },
  {
    name: "Escritório Eficiente",
    target: "PMEs e escritórios",
    includes: [
      "Planejamento de rack",
      "5 a 10 pontos com certificação",
      "Organização de cabos",
      "Foco em performance"
    ],
    badge: "Intermediário"
  },
  {
    name: "Infraestrutura do Zero",
    target: "Empresas em reforma/expansão",
    includes: [
      "Projeto completo de cabeamento",
      "CFTV IP",
      "Gerenciamento de energia",
      "Acompanhamento de todas as fases"
    ],
    badge: "Premium"
  }
];

export default function Recommendations() {
  return (
    <section id="recomendacoes" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Recomendações Estratégicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Como se destacar e conquistar novos clientes
            </p>
          </div>

          {/* Positioning */}
          <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 text-9xl font-display text-primary/5 leading-none pr-4">
              1
            </div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-primary" size={32} />
                <Badge className="bg-primary/30 text-primary border-primary/50">
                  Posicionamento
                </Badge>
              </div>
              <CardTitle className="text-3xl">{positioning.title}</CardTitle>
              <CardDescription className="text-base">{positioning.description}</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-4">
                {positioning.benefits.map((benefit, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
                    <p className="text-sm text-center">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Differentials */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Exploração dos Diferenciais Competitivos
              </h3>
              <p className="text-muted-foreground">
                Transforme seus valores em vantagens competitivas tangíveis
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {differentials.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <CardHeader>
                      <Icon className="text-accent mb-2" size={28} />
                      <CardTitle className="text-xl">{diff.title}</CardTitle>
                      <CardDescription className="text-sm">
                        <span className="font-semibold">Atual:</span> {diff.current}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-accent mb-1">
                          Estratégia
                        </h4>
                        <p className="text-sm text-muted-foreground">{diff.strategy}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
                          Ação
                        </h4>
                        <p className="text-sm text-muted-foreground">{diff.action}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Service Packages */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="text-accent" size={28} />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Pacotes de Serviços Sugeridos
                </h3>
              </div>
              <p className="text-muted-foreground">
                Ofertas estruturadas para diferentes perfis de clientes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardHeader>
                    <Badge className="w-fit bg-accent/20 text-accent border-accent/30 mb-2">
                      {pkg.badge}
                    </Badge>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.target}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

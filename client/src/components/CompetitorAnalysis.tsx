import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, AlertCircle } from "lucide-react";

const competitors = [
  {
    name: "NetSupport",
    profile: "Empresa corporativa com mais de 10 anos de mercado",
    location: "São Paulo (Vila Cordeiro)",
    strengths: [
      "Marca consolidada e com experiência",
      "Estrutura profissional",
      "Foco em outsourcing"
    ],
    opportunities: [
      "Preços mais elevados",
      "Menor flexibilidade",
      "Foco em grandes clientes"
    ],
    threat: "medium"
  },
  {
    name: "AGT Infraestrutura",
    profile: "Empresa de médio porte com portfólio amplo",
    location: "Atuação regional",
    strengths: [
      "Mais de 50 serviços diferentes",
      "Forte presença online (SEO)",
      "Atende diversos segmentos"
    ],
    opportunities: [
      "Portfólio muito amplo dilui especialização",
      "Dificuldade em manter qualidade",
      "Atendimento menos personalizado"
    ],
    threat: "high"
  },
  {
    name: "Técnicos Autônomos",
    profile: "Profissionais e pequenas equipes locais",
    location: "Região",
    strengths: [
      "Baixo custo",
      "Atendimento direto"
    ],
    opportunities: [
      "Falta de profissionalismo",
      "Qualidade inconsistente",
      "Sem certificação de rede"
    ],
    threat: "low"
  }
];

const threatColors = {
  low: "bg-green-500/20 text-green-300 border-green-500/30",
  medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  high: "bg-destructive/20 text-destructive border-destructive/30"
};

const threatLabels = {
  low: "Ameaça Baixa",
  medium: "Ameaça Média",
  high: "Ameaça Alta"
};

export default function CompetitorAnalysis() {
  return (
    <section id="concorrentes" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Cenário Competitivo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Análise detalhada dos principais concorrentes na região de atuação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((competitor, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Building2 className="text-primary" size={28} />
                    <Badge className={threatColors[competitor.threat as keyof typeof threatColors]}>
                      {threatLabels[competitor.threat as keyof typeof threatLabels]}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{competitor.name}</CardTitle>
                  <CardDescription className="text-base">{competitor.profile}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">📍 {competitor.location}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={16} className="text-green-400" />
                      <h4 className="font-semibold text-sm">Pontos Fortes</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {competitor.strengths.map((strength, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle size={16} className="text-accent" />
                      <h4 className="font-semibold text-sm">Oportunidades para Kairos IT</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {competitor.opportunities.map((opp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Preços de Mercado</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Cabeamento Estruturado</h4>
                  <p className="text-3xl font-mono text-accent mb-2">R$ 130 - R$ 350</p>
                  <p className="text-sm text-muted-foreground">por ponto de rede</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fatores que Influenciam</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Categoria dos materiais (Cat5e, Cat6, Cat6a)</li>
                    <li>• Complexidade da instalação</li>
                    <li>• <span className="text-accent font-semibold">Certificação de rede</span> (diferencial crítico)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

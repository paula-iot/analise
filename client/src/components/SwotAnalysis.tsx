import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, AlertTriangle } from "lucide-react";

const swotData = {
  strengths: {
    title: "Forças",
    icon: TrendingUp,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    items: [
      { title: "Qualidade Profissional", description: "Certificação de rede com equipamentos Fluke Networks" },
      { title: "Atendimento Personalizado", description: "Relacionamento próximo e genuíno com cada cliente" },
      { title: "Custo-Benefício", description: "Preços competitivos sem comprometer a qualidade" },
      { title: "Experiência Local", description: "Conhecimento profundo da região de atuação" },
      { title: "Valores Sólidos", description: "Foco em crescer e evoluir junto com os clientes" }
    ]
  },
  weaknesses: {
    title: "Fraquezas",
    icon: TrendingDown,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    items: [
      { title: "Marca Menos Conhecida", description: "Menor visibilidade comparado a concorrentes estabelecidos" },
      { title: "Equipe Limitada", description: "Capacidade de atendimento simultâneo pode ser restrita" },
      { title: "Presença Digital", description: "Marketing online ainda em desenvolvimento" },
      { title: "Portfólio de Cases", description: "Necessidade de documentar mais projetos realizados" }
    ]
  },
  opportunities: {
    title: "Oportunidades",
    icon: Target,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    items: [
      { title: "Mercado de PMEs", description: "Grande demanda por serviços profissionais acessíveis" },
      { title: "Transformação Digital", description: "Empresas investindo em infraestrutura de TI" },
      { title: "Expansão Geográfica", description: "Bairros em crescimento na Grande São Paulo" },
      { title: "Parcerias Estratégicas", description: "Imobiliárias, construtoras e coworkings" },
      { title: "Serviços Recorrentes", description: "Contratos de manutenção e suporte contínuo" }
    ]
  },
  threats: {
    title: "Ameaças",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
    items: [
      { title: "Concorrência Estabelecida", description: "Empresas grandes com mais recursos de marketing" },
      { title: "Técnicos Autônomos", description: "Competição por preço com profissionais informais" },
      { title: "Crise Econômica", description: "PMEs podem reduzir investimentos em infraestrutura" },
      { title: "Commoditização", description: "Clientes podem não valorizar certificação e qualidade" }
    ]
  }
};

type SwotCategory = keyof typeof swotData;

export default function SwotAnalysis() {
  const [activeCategory, setActiveCategory] = useState<SwotCategory | null>(null);

  return (
    <section id="swot" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Análise SWOT
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Avaliação estratégica das forças, fraquezas, oportunidades e ameaças
            </p>
          </div>

          {/* SWOT Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.keys(swotData) as SwotCategory[]).map((category) => {
              const data = swotData[category];
              const Icon = data.icon;
              const isActive = activeCategory === category;

              return (
                <Card
                  key={category}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive
                      ? `${data.bgColor} ${data.borderColor} border-2 shadow-xl`
                      : "bg-card/50 backdrop-blur-sm border-border hover:border-primary/30"
                  }`}
                  onClick={() => setActiveCategory(isActive ? null : category)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className={data.color} size={28} />
                        <CardTitle className="text-2xl">{data.title}</CardTitle>
                      </div>
                      <Badge className={`${data.bgColor} ${data.color} ${data.borderColor}`}>
                        {data.items.length}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isActive ? (
                      <div className="space-y-3">
                        {data.items.map((item, index) => (
                          <div
                            key={index}
                            className="p-3 bg-card/80 rounded-lg border border-border animate-in fade-in slide-in-from-bottom-2"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Clique para ver detalhes
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Síntese Estratégica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp size={18} className="text-green-400" />
                    Estratégia Ofensiva
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Usar <span className="text-green-400 font-semibold">qualidade profissional</span> e{" "}
                    <span className="text-green-400 font-semibold">atendimento personalizado</span> para
                    capturar <span className="text-accent font-semibold">mercado de PMEs</span> em{" "}
                    <span className="text-accent font-semibold">expansão geográfica</span>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target size={18} className="text-accent" />
                    Estratégia Defensiva
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fortalecer <span className="text-green-400 font-semibold">presença digital</span> e{" "}
                    <span className="text-green-400 font-semibold">portfólio de cases</span> para se
                    diferenciar de <span className="text-destructive font-semibold">técnicos autônomos</span> e{" "}
                    <span className="text-destructive font-semibold">concorrentes estabelecidos</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

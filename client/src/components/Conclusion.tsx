import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";

const keyTakeaways = [
  "A Kairos IT possui diferenciais sólidos que, bem comunicados, podem garantir crescimento sustentável",
  "O mercado da Grande São Paulo oferece vastas oportunidades, especialmente para PMEs e comércios",
  "Posicionamento como especialista confiável preenche lacuna entre técnicos autônomos e grandes consultorias",
  "Expansão gradual baseada em proximidade geográfica minimiza riscos e custos logísticos",
  "Certificação de rede é diferencial crítico que justifica preços competitivos"
];

const nextSteps = [
  {
    title: "Curto Prazo (0-3 meses)",
    actions: [
      "Coletar depoimentos de clientes atuais",
      "Criar materiais de marketing destacando diferenciais",
      "Desenvolver pacotes de serviços estruturados",
      "Estabelecer presença digital (site, redes sociais)"
    ]
  },
  {
    title: "Médio Prazo (3-12 meses)",
    actions: [
      "Iniciar prospecção em bairros adjacentes (Butantã, Morumbi)",
      "Criar parcerias com imobiliárias e construtoras",
      "Implementar programa de indicações",
      "Participar de eventos de networking local"
    ]
  },
  {
    title: "Longo Prazo (12+ meses)",
    actions: [
      "Expandir para polos estratégicos (Pinheiros, Vila Olímpia)",
      "Considerar contratação de equipe adicional",
      "Desenvolver serviços premium para grandes clientes",
      "Consolidar marca como referência regional"
    ]
  }
];

export default function Conclusion() {
  return (
    <section id="conclusao" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Conclusão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Síntese dos insights e próximos passos recomendados
            </p>
          </div>

          {/* Key Takeaways */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent" size={32} />
                <CardTitle className="text-2xl">Principais Conclusões</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-0.5">•</span>
                    <span className="text-muted-foreground">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="text-primary" size={28} />
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Próximos Passos
                </h3>
              </div>
              <p className="text-muted-foreground">
                Roadmap de ações para implementação da estratégia
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">✓</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <Card className="bg-gradient-to-br from-card to-secondary border-border text-center">
            <CardContent className="py-12 px-6">
              <p className="text-xl md:text-2xl text-foreground font-semibold mb-4">
                Com estratégia clara e execução focada, a Kairos IT Solutions tem grande 
                potencial para se tornar referência em infraestrutura de TI na região.
              </p>
              <p className="text-muted-foreground">
                O diferencial está na combinação de qualidade profissional, atendimento 
                personalizado e foco genuíno no sucesso do cliente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

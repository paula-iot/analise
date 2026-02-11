import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, AlertCircle } from "lucide-react";

export default function RoiCalculator() {
  const [networkPoints, setNetworkPoints] = useState(10);
  const [employees, setEmployees] = useState(5);
  const [monthlyDowntime, setMonthlyDowntime] = useState(4);

  // Cálculos
  const professionalCostPerPoint = 250;
  const improvisedCostPerPoint = 150;
  
  const professionalTotalCost = networkPoints * professionalCostPerPoint;
  const improvisedTotalCost = networkPoints * improvisedCostPerPoint;
  const initialSavings = professionalTotalCost - improvisedTotalCost;
  
  // Custo de downtime
  const avgHourlyWage = 25; // R$ por hora
  const downtimeHoursPerIncident = 2;
  const monthlyDowntimeCost = monthlyDowntime * downtimeHoursPerIncident * employees * avgHourlyWage;
  const yearlyDowntimeCost = monthlyDowntimeCost * 12;
  
  // Manutenção
  const improvisedMaintenanceCost = improvisedTotalCost * 0.3; // 30% ao ano
  const professionalMaintenanceCost = professionalTotalCost * 0.1; // 10% ao ano
  
  // ROI em 3 anos
  const improvisedTotal3Years = improvisedTotalCost + (improvisedMaintenanceCost * 3) + (yearlyDowntimeCost * 3);
  const professionalTotal3Years = professionalTotalCost + (professionalMaintenanceCost * 3) + (yearlyDowntimeCost * 0.2 * 3); // 80% menos downtime
  
  const savings3Years = improvisedTotal3Years - professionalTotal3Years;
  const roiPercentage = ((savings3Years / professionalTotalCost) * 100).toFixed(0);
  const breakEvenMonths = Math.ceil((initialSavings / (monthlyDowntimeCost * 0.8 + (improvisedMaintenanceCost - professionalMaintenanceCost) / 12)) * -1);

  return (
    <section id="roi" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Calculator className="text-accent" size={36} />
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Calculadora de ROI
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare o custo real entre infraestrutura certificada e soluções improvisadas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Dados do Seu Negócio</CardTitle>
                <CardDescription>Ajuste os valores conforme sua realidade</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="points" className="text-base">Pontos de Rede</Label>
                    <span className="text-2xl font-mono text-accent">{networkPoints}</span>
                  </div>
                  <Slider
                    id="points"
                    min={5}
                    max={50}
                    step={5}
                    value={[networkPoints]}
                    onValueChange={(value) => setNetworkPoints(value[0])}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Número de pontos de rede necessários
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="employees" className="text-base">Funcionários</Label>
                    <span className="text-2xl font-mono text-accent">{employees}</span>
                  </div>
                  <Slider
                    id="employees"
                    min={1}
                    max={50}
                    step={1}
                    value={[employees]}
                    onValueChange={(value) => setEmployees(value[0])}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Número de colaboradores que dependem da rede
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="downtime" className="text-base">Problemas/Mês</Label>
                    <span className="text-2xl font-mono text-destructive">{monthlyDowntime}</span>
                  </div>
                  <Slider
                    id="downtime"
                    min={0}
                    max={20}
                    step={1}
                    value={[monthlyDowntime]}
                    onValueChange={(value) => setMonthlyDowntime(value[0])}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Incidentes de rede por mês (típico em redes improvisadas: 4-8)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {/* Investment Comparison */}
              <Card className="bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Investimento Inicial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg border border-destructive/30">
                    <div>
                      <p className="text-sm text-muted-foreground">Solução Improvisada</p>
                      <p className="text-xs text-muted-foreground mt-1">Sem certificação</p>
                    </div>
                    <p className="text-2xl font-mono text-destructive">
                      R$ {improvisedTotalCost.toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <div>
                      <p className="text-sm text-muted-foreground">Infraestrutura Certificada</p>
                      <p className="text-xs text-muted-foreground mt-1">Kairos IT Solutions</p>
                    </div>
                    <p className="text-2xl font-mono text-green-400">
                      R$ {professionalTotalCost.toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-xs text-muted-foreground">Diferença inicial</p>
                    <p className="text-lg font-mono text-yellow-400">
                      + R$ {Math.abs(initialSavings).toLocaleString('pt-BR')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 3-Year ROI */}
              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-accent" size={24} />
                    <CardTitle className="text-xl">Custo Total em 3 Anos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Improvisada</p>
                      <p className="text-xl font-mono text-destructive">
                        R$ {improvisedTotal3Years.toLocaleString('pt-BR')}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Certificada</p>
                      <p className="text-xl font-mono text-green-400">
                        R$ {professionalTotal3Years.toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-accent/20 rounded-lg border border-accent/40">
                    <p className="text-sm text-muted-foreground mb-2">Economia Total</p>
                    <p className="text-3xl font-mono text-accent font-bold">
                      R$ {savings3Years.toLocaleString('pt-BR')}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      ROI de <span className="text-accent font-semibold">{roiPercentage}%</span> em 3 anos
                    </p>
                  </div>

                  {breakEvenMonths > 0 && (
                    <div className="flex items-start gap-2 p-3 bg-primary/10 rounded-lg">
                      <AlertCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        O investimento adicional se paga em aproximadamente{" "}
                        <span className="text-primary font-semibold">{breakEvenMonths} meses</span> através
                        da redução de downtime e manutenções.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hidden Costs */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Custos Ocultos de Redes Improvisadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-destructive">Downtime</h4>
                  <p className="text-2xl font-mono text-muted-foreground">
                    R$ {yearlyDowntimeCost.toLocaleString('pt-BR')}/ano
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Perda de produtividade com rede fora do ar
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-destructive">Manutenção</h4>
                  <p className="text-2xl font-mono text-muted-foreground">
                    R$ {improvisedMaintenanceCost.toLocaleString('pt-BR')}/ano
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Reparos frequentes e chamados emergenciais
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-destructive">Performance</h4>
                  <p className="text-2xl font-mono text-muted-foreground">
                    -40%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Redução de velocidade e instabilidade
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

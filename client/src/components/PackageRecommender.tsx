import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

type ClientType = "residencia" | "comercio" | "pme" | "empresa";
type BudgetRange = "baixo" | "medio" | "alto";

interface Package {
  id: string;
  name: string;
  icon: string;
  description: string;
  services: string[];
  priceRange: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

const packages: Record<string, Package> = {
  "residencia-basico": {
    id: "residencia-basico",
    name: "Casa Conectada",
    icon: "🏠",
    description: "Solução básica para residências com internet confiável",
    services: ["2-3 pontos de rede", "Roteador Wi-Fi dual-band", "Organização de cabos"],
    priceRange: "R$ 800 - R$ 2.000",
    color: "bg-blue-500",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10"
  },
  "residencia-premium": {
    id: "residencia-premium",
    name: "Casa Inteligente",
    icon: "🏡",
    description: "Infraestrutura completa com cabeamento estruturado e CFTV",
    services: ["4-6 pontos de rede certificados", "Wi-Fi mesh", "2 câmeras CFTV", "Painel de distribuição"],
    priceRange: "R$ 3.000 - R$ 8.000",
    color: "bg-purple-500",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10"
  },
  "comercio-basico": {
    id: "comercio-basico",
    name: "Comércio Conectado",
    icon: "🏪",
    description: "Pacote essencial para pequenos comércios e lojas",
    services: ["3-5 pontos de rede", "Roteador Wi-Fi de qualidade", "2-4 câmeras CFTV", "Suporte básico"],
    priceRange: "R$ 2.000 - R$ 5.000",
    color: "bg-green-500",
    textColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10"
  },
  "comercio-completo": {
    id: "comercio-completo",
    name: "Comércio Profissional",
    icon: "🏬",
    description: "Infraestrutura certificada com cabeamento estruturado",
    services: ["6-10 pontos de rede certificados", "Wi-Fi corporativo", "4-6 câmeras CFTV IP", "Rack organizado", "Manutenção 3 meses"],
    priceRange: "R$ 5.000 - R$ 15.000",
    color: "bg-emerald-500",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgColor: "bg-emerald-500/10"
  },
  "pme-eficiente": {
    id: "pme-eficiente",
    name: "Escritório Eficiente",
    icon: "💼",
    description: "Solução para PMEs com até 10 funcionários",
    services: ["5-10 pontos de rede certificados", "Pequeno rack", "Wi-Fi de qualidade", "Organização profissional", "Certificação de rede"],
    priceRange: "R$ 5.000 - R$ 12.000",
    color: "bg-accent",
    textColor: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/10"
  },
  "pme-completa": {
    id: "pme-completa",
    name: "PME Completa",
    icon: "🏢",
    description: "Infraestrutura completa para PMEs em crescimento",
    services: ["10-20 pontos de rede certificados", "Rack profissional", "CFTV IP (4-8 câmeras)", "Wi-Fi mesh", "Gerenciamento de energia", "Suporte mensal"],
    priceRange: "R$ 12.000 - R$ 30.000",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10"
  },
  "empresa-premium": {
    id: "empresa-premium",
    name: "Empresa Premium",
    icon: "🏛️",
    description: "Solução enterprise com redundância e alta disponibilidade",
    services: ["20+ pontos de rede Cat6a", "Infraestrutura do zero", "CFTV IP avançado", "Backup de energia", "Monitoramento 24/7", "Suporte dedicado"],
    priceRange: "R$ 30.000 - R$ 100.000+",
    color: "bg-yellow-500",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10"
  }
};

export default function PackageRecommender() {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState<ClientType | null>(null);
  const [networkPoints, setNetworkPoints] = useState<number | null>(null);
  const [hasSecurityNeeds, setHasSecurityNeeds] = useState<boolean | null>(null);
  const [budget, setBudget] = useState<BudgetRange | null>(null);
  const [recommendedPackage, setRecommendedPackage] = useState<Package | null>(null);

  const recommendPackage = () => {
    let packageId = "";

    if (clientType === "residencia") {
      if (budget === "baixo" || (networkPoints && networkPoints <= 3)) {
        packageId = "residencia-basico";
      } else {
        packageId = "residencia-premium";
      }
    } else if (clientType === "comercio") {
      if (budget === "baixo" || (networkPoints && networkPoints <= 5)) {
        packageId = "comercio-basico";
      } else {
        packageId = "comercio-completo";
      }
    } else if (clientType === "pme") {
      if (budget === "baixo" || (networkPoints && networkPoints <= 10)) {
        packageId = "pme-eficiente";
      } else {
        packageId = "pme-completa";
      }
    } else if (clientType === "empresa") {
      packageId = "empresa-premium";
    }

    setRecommendedPackage(packages[packageId] || null);
  };

  const handleNext = () => {
    if (step === 1 && clientType) {
      setStep(2);
    } else if (step === 2 && networkPoints) {
      setStep(3);
    } else if (step === 3 && hasSecurityNeeds !== null) {
      setStep(4);
    } else if (step === 4 && budget) {
      recommendPackage();
      setStep(5);
    }
  };

  const handleReset = () => {
    setStep(1);
    setClientType(null);
    setNetworkPoints(null);
    setHasSecurityNeeds(null);
    setBudget(null);
    setRecommendedPackage(null);
  };

  return (
    <section id="recomendador" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Lightbulb className="text-accent" size={36} />
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Qual é o Seu Pacote Ideal?
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Responda algumas perguntas e descubra qual solução se encaixa perfeitamente no seu negócio
            </p>
          </div>

          {/* Progress */}
          {step < 5 && (
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= s
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all ${
                        step > s ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form Steps */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl">
                {step === 1 && "Qual é o seu tipo de negócio?"}
                {step === 2 && "Quantos pontos de rede você precisa?"}
                {step === 3 && "Você precisa de segurança (CFTV)?"}
                {step === 4 && "Qual é seu orçamento?"}
                {step === 5 && "Seu Pacote Recomendado"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Client Type */}
              {step === 1 && (
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {[
                    { id: "residencia", label: "🏠 Residência", desc: "Casa ou apartamento" },
                    { id: "comercio", label: "🏪 Comércio", desc: "Loja ou estabelecimento" },
                    { id: "pme", label: "💼 PME", desc: "Pequena/Média empresa" },
                    { id: "empresa", label: "🏢 Empresa", desc: "Grande corporação" }
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setClientType(option.id as ClientType)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        clientType === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card/30 hover:border-primary/50"
                      }`}
                    >
                      <p className="text-lg font-semibold">{option.label}</p>
                      <p className="text-xs text-muted-foreground">{option.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Network Points */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-base">Pontos de rede necessários</Label>
                    <span className="text-2xl font-mono text-accent">{networkPoints}</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { value: 2, label: "2-3 pontos (básico)" },
                      { value: 5, label: "5-6 pontos (médio)" },
                      { value: 10, label: "10-15 pontos (completo)" },
                      { value: 20, label: "20+ pontos (enterprise)" }
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setNetworkPoints(option.value)}
                        className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                          networkPoints === option.value
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card/30 hover:border-accent/50"
                        }`}
                      >
                        <p className="font-semibold">{option.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Security Needs */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: true, label: "✓ Sim, preciso de CFTV", desc: "Câmeras de segurança" },
                      { value: false, label: "✗ Não, apenas rede", desc: "Só internet e dados" }
                    ].map((option) => (
                      <button
                        key={String(option.value)}
                        onClick={() => setHasSecurityNeeds(option.value)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          hasSecurityNeeds === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-card/30 hover:border-primary/50"
                        }`}
                      >
                        <p className="font-semibold">{option.label}</p>
                        <p className="text-xs text-muted-foreground">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Budget */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: "baixo", label: "💰 Baixo", range: "< R$ 5.000" },
                      { id: "medio", label: "💵 Médio", range: "R$ 5-15.000" },
                      { id: "alto", label: "💴 Alto", range: "> R$ 15.000" }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setBudget(option.id as BudgetRange)}
                        className={`p-4 rounded-lg border-2 transition-all text-center ${
                          budget === option.id
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card/30 hover:border-accent/50"
                        }`}
                      >
                        <p className="text-xl font-semibold mb-1">{option.label}</p>
                        <p className="text-xs text-muted-foreground">{option.range}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Recommendation */}
              {step === 5 && recommendedPackage && (
                <div className={`p-6 rounded-lg border-2 ${recommendedPackage.bgColor} ${recommendedPackage.borderColor}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-5xl mb-2">{recommendedPackage.icon}</p>
                      <h3 className="text-3xl font-semibold mb-2">{recommendedPackage.name}</h3>
                      <p className="text-muted-foreground">{recommendedPackage.description}</p>
                    </div>
                    <CheckCircle2 className={recommendedPackage.textColor} size={48} />
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <span>📋 O que está incluído</span>
                      </h4>
                      <ul className="space-y-1">
                        {recommendedPackage.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className={recommendedPackage.textColor}>✓</span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                      <p className={`text-2xl font-mono font-bold ${recommendedPackage.textColor}`}>
                        {recommendedPackage.priceRange}
                      </p>
                    </div>

                    <div className="bg-card/50 p-4 rounded-lg border border-border">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">
                          Este é um orçamento estimado. Para uma cotação precisa, entre em contato conosco com mais detalhes sobre seu projeto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 justify-between pt-6">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    ← Voltar
                  </Button>
                )}
                {step < 5 ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !clientType) ||
                      (step === 2 && !networkPoints) ||
                      (step === 3 && hasSecurityNeeds === null) ||
                      (step === 4 && !budget)
                    }
                    className="flex-1"
                  >
                    Próximo →
                  </Button>
                ) : (
                  <Button onClick={handleReset} className="flex-1">
                    Fazer Novo Teste
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

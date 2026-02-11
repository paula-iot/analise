import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, DollarSign, Users } from "lucide-react";

interface RegionData {
  id: string;
  name: string;
  status: "current" | "phase1" | "phase2" | "phase3";
  lat: number;
  lng: number;
  clientType: string;
  services: string[];
  avgBudget: string;
  potential: "Baixo" | "Médio" | "Alto" | "Muito Alto";
  description: string;
}

const regions: RegionData[] = [
  // Áreas Atuais
  {
    id: "embu",
    name: "Embu das Artes",
    status: "current",
    lat: -23.6489,
    lng: -46.8522,
    clientType: "PMEs, Comércios Locais",
    services: ["Cabeamento estruturado", "CFTV", "Wi-Fi"],
    avgBudget: "R$ 2.000 - R$ 8.000",
    potential: "Alto",
    description: "Base atual de operação com clientes estabelecidos"
  },
  {
    id: "itapecerica",
    name: "Itapecerica da Serra",
    status: "current",
    lat: -23.7172,
    lng: -46.8489,
    clientType: "PMEs, Indústrias Pequenas",
    services: ["Cabeamento estruturado", "CFTV", "Infraestrutura completa"],
    avgBudget: "R$ 3.000 - R$ 12.000",
    potential: "Alto",
    description: "Região com crescimento industrial e comercial"
  },
  {
    id: "taboao",
    name: "Taboão da Serra",
    status: "current",
    lat: -23.6093,
    lng: -46.7586,
    clientType: "PMEs, Escritórios, Comércios",
    services: ["Cabeamento estruturado", "CFTV", "Wi-Fi", "Racks"],
    avgBudget: "R$ 2.500 - R$ 10.000",
    potential: "Muito Alto",
    description: "Proximidade com São Paulo, alto potencial comercial"
  },
  {
    id: "cotia",
    name: "Cotia",
    status: "current",
    lat: -23.6039,
    lng: -46.9189,
    clientType: "PMEs, Condomínios Empresariais",
    services: ["Cabeamento estruturado", "CFTV", "Infraestrutura completa"],
    avgBudget: "R$ 5.000 - R$ 20.000",
    potential: "Muito Alto",
    description: "Condomínios empresariais e logísticos em expansão"
  },
  
  // Fase 1 - Expansão Adjacente
  {
    id: "butanta",
    name: "Butantã",
    status: "phase1",
    lat: -23.5706,
    lng: -46.7236,
    clientType: "PMEs, Clínicas, Escritórios",
    services: ["Cabeamento estruturado", "Wi-Fi", "CFTV"],
    avgBudget: "R$ 3.000 - R$ 12.000",
    potential: "Alto",
    description: "Bairro residencial e comercial próximo à USP"
  },
  {
    id: "morumbi",
    name: "Morumbi",
    status: "phase1",
    lat: -23.6178,
    lng: -46.7019,
    clientType: "Escritórios, Clínicas Premium",
    services: ["Infraestrutura completa", "CFTV IP", "Wi-Fi corporativo"],
    avgBudget: "R$ 8.000 - R$ 30.000",
    potential: "Alto",
    description: "Região de alto padrão com escritórios corporativos"
  },
  {
    id: "campo-limpo",
    name: "Campo Limpo",
    status: "phase1",
    lat: -23.6536,
    lng: -46.7689,
    clientType: "PMEs, Comércios, Indústrias",
    services: ["Cabeamento estruturado", "CFTV", "Wi-Fi"],
    avgBudget: "R$ 2.000 - R$ 8.000",
    potential: "Médio",
    description: "Grande concentração de comércio local"
  },
  
  // Fase 2 - Polos Estratégicos
  {
    id: "pinheiros",
    name: "Pinheiros",
    status: "phase2",
    lat: -23.5629,
    lng: -46.6825,
    clientType: "Startups, Coworkings, Agências",
    services: ["Infraestrutura completa", "Wi-Fi de alta performance", "Cabeamento Cat6a"],
    avgBudget: "R$ 10.000 - R$ 40.000",
    potential: "Muito Alto",
    description: "Centro de inovação com alta demanda por infraestrutura"
  },
  {
    id: "vila-olimpia",
    name: "Vila Olímpia",
    status: "phase2",
    lat: -23.5958,
    lng: -46.6864,
    clientType: "Empresas de Tecnologia, Startups",
    services: ["Infraestrutura completa", "Cabeamento Cat6a/7", "CFTV IP", "Wi-Fi empresarial"],
    avgBudget: "R$ 15.000 - R$ 60.000",
    potential: "Muito Alto",
    description: "Polo tecnológico com empresas de médio e grande porte"
  },
  {
    id: "mooca",
    name: "Mooca",
    status: "phase2",
    lat: -23.5503,
    lng: -46.5997,
    clientType: "Galpões Reformados, Escritórios",
    services: ["Infraestrutura do zero", "Cabeamento estruturado", "CFTV", "Wi-Fi"],
    avgBudget: "R$ 20.000 - R$ 80.000",
    potential: "Muito Alto",
    description: "Transformação urbana com projetos de grande porte"
  },
  {
    id: "barra-funda",
    name: "Barra Funda",
    status: "phase2",
    lat: -23.5269,
    lng: -46.6653,
    clientType: "Galpões, Escritórios, Eventos",
    services: ["Infraestrutura do zero", "Cabeamento estruturado", "CFTV IP"],
    avgBudget: "R$ 25.000 - R$ 100.000",
    potential: "Muito Alto",
    description: "Revitalização com grandes projetos comerciais"
  },
  
  // Fase 3 - Diversificação
  {
    id: "brooklin",
    name: "Brooklin",
    status: "phase3",
    lat: -23.6056,
    lng: -46.7025,
    clientType: "Corporações, Escritórios Premium",
    services: ["Infraestrutura premium", "Certificação avançada", "CFTV IP", "Wi-Fi empresarial"],
    avgBudget: "R$ 20.000 - R$ 100.000",
    potential: "Alto",
    description: "Centro empresarial de alto padrão"
  },
  {
    id: "tatuape",
    name: "Tatuapé",
    status: "phase3",
    lat: -23.5403,
    lng: -46.5764,
    clientType: "PMEs, Novos Empreendimentos",
    services: ["Cabeamento estruturado", "CFTV", "Wi-Fi", "Infraestrutura completa"],
    avgBudget: "R$ 5.000 - R$ 25.000",
    potential: "Alto",
    description: "Rápida expansão comercial e residencial"
  },
  {
    id: "santana",
    name: "Santana",
    status: "phase3",
    lat: -23.5044,
    lng: -46.6289,
    clientType: "PMEs, Comércios, Clínicas",
    services: ["Cabeamento estruturado", "CFTV", "Wi-Fi"],
    avgBudget: "R$ 3.000 - R$ 15.000",
    potential: "Alto",
    description: "Principal polo comercial da zona norte"
  }
];

const statusConfig = {
  current: {
    label: "Atuação Atual",
    color: "bg-green-500",
    textColor: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10"
  },
  phase1: {
    label: "Fase 1 (6-12 meses)",
    color: "bg-accent",
    textColor: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/10"
  },
  phase2: {
    label: "Fase 2 (12-24 meses)",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10"
  },
  phase3: {
    label: "Fase 3 (24+ meses)",
    color: "bg-purple-500",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10"
  }
};

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredRegions = filterStatus === "all" 
    ? regions 
    : regions.filter(r => r.status === filterStatus);

  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Mapa de Expansão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Regiões de atuação atual e oportunidades de crescimento na Grande São Paulo
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-4 py-2 rounded-lg border transition-all ${
                filterStatus === "all"
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-card/50 border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              Todas as Regiões
            </button>
            {Object.entries(statusConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setFilterStatus(key)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  filterStatus === key
                    ? `${config.bgColor} ${config.borderColor} ${config.textColor}`
                    : "bg-card/50 border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {config.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl">Visualização Geográfica</CardTitle>
                  <CardDescription>Clique em uma região para ver detalhes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-secondary/30 rounded-lg p-8 min-h-[600px]">
                    {/* Simplified map representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-2xl">
                        {filteredRegions.map((region) => {
                          const config = statusConfig[region.status];
                          // Normalize coordinates to fit in container (simplified positioning)
                          const x = ((region.lng + 47) * 100) + 20;
                          const y = ((region.lat + 24) * 100) + 20;
                          
                          return (
                            <button
                              key={region.id}
                              onClick={() => setSelectedRegion(region)}
                              className={`absolute group transition-all duration-300 ${
                                selectedRegion?.id === region.id ? "z-20 scale-125" : "z-10"
                              }`}
                              style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: "translate(-50%, -50%)"
                              }}
                            >
                              <div className={`relative ${config.color} w-4 h-4 rounded-full animate-pulse`}>
                                <div className={`absolute inset-0 ${config.color} rounded-full opacity-50 group-hover:scale-150 transition-transform`} />
                              </div>
                              <div className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium ${config.textColor} opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 px-2 py-1 rounded border ${config.borderColor}`}>
                                {region.name}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-border space-y-2">
                      <p className="text-xs font-semibold mb-2">Legenda</p>
                      {Object.entries(statusConfig).map(([key, config]) => (
                        <div key={key} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${config.color}`} />
                          <span className="text-xs text-muted-foreground">{config.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Region Details */}
            <div className="space-y-6">
              {selectedRegion ? (
                <Card className={`${statusConfig[selectedRegion.status].bgColor} backdrop-blur-sm border ${statusConfig[selectedRegion.status].borderColor}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className={statusConfig[selectedRegion.status].textColor} size={24} />
                        <CardTitle className="text-2xl">{selectedRegion.name}</CardTitle>
                      </div>
                      <Badge className={`${statusConfig[selectedRegion.status].bgColor} ${statusConfig[selectedRegion.status].textColor} ${statusConfig[selectedRegion.status].borderColor}`}>
                        {statusConfig[selectedRegion.status].label}
                      </Badge>
                    </div>
                    <CardDescription>{selectedRegion.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Users size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Tipo de Cliente</p>
                          <p className="text-sm">{selectedRegion.clientType}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Building2 size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Serviços Demandados</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedRegion.services.map((service, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <DollarSign size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Orçamento Médio</p>
                          <p className="text-lg font-mono text-accent">{selectedRegion.avgBudget}</p>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Potencial</p>
                        <Badge className={
                          selectedRegion.potential === "Muito Alto" ? "bg-accent/20 text-accent border-accent/30" :
                          selectedRegion.potential === "Alto" ? "bg-green-500/20 text-green-400 border-green-500/30" :
                          "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }>
                          {selectedRegion.potential}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="py-12 text-center">
                    <MapPin className="text-muted-foreground mx-auto mb-4" size={48} />
                    <p className="text-muted-foreground">
                      Selecione uma região no mapa para ver detalhes
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Quick Stats */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg">Resumo Geral</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Regiões Atuais</span>
                    <span className="text-xl font-mono text-green-400">
                      {regions.filter(r => r.status === "current").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expansão Fase 1</span>
                    <span className="text-xl font-mono text-accent">
                      {regions.filter(r => r.status === "phase1").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expansão Fase 2</span>
                    <span className="text-xl font-mono text-primary">
                      {regions.filter(r => r.status === "phase2").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expansão Fase 3</span>
                    <span className="text-xl font-mono text-purple-400">
                      {regions.filter(r => r.status === "phase3").length}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import SwotAnalysis from "@/components/SwotAnalysis";
import Opportunities from "@/components/Opportunities";
import InteractiveMap from "@/components/InteractiveMap";
import RoiCalculator from "@/components/RoiCalculator";
import PackageRecommender from "@/components/PackageRecommender";
import Recommendations from "@/components/Recommendations";
import Conclusion from "@/components/Conclusion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="analise">
        <Hero />
        <CompetitorAnalysis />
        <SwotAnalysis />
        <Opportunities />
        <InteractiveMap />
        <RoiCalculator />
        <PackageRecommender />
        <Recommendations />
        <Conclusion />
      </main>
      <footer className="bg-card/50 border-t border-border py-8">
        <div className="container px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Análise Competitiva - Kairos IT Solutions</p>
          <p className="mt-2">Desenvolvido por Manus AI</p>
        </div>
      </footer>
    </div>
  );
}

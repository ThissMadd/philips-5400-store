import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import FeatureSection from "@/components/FeatureSection";
import SpecSheet from "@/components/SpecSheet";
import CompareTable from "@/components/CompareTable";
import Reviews from "@/components/Reviews";
import Guarantee from "@/components/Guarantee";
import Includes from "@/components/Includes";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <TopBar />
      <Header />
      <Hero />
      <FeatureStrip />

      <FeatureSection
        id="ausstattung"
        image="/images/front.webp"
        imageAlt="Philips 5400 Series Frontansicht mit Touch-Display und Bohnenbehälter"
        eyebrow="My Coffee Choice"
        title="Dein Kaffee. Genau nach deinem Geschmack."
        lead="Über das intuitive Touch-Display wählst du aus 12 Kaffeespezialitäten – von Espresso bis Latte Macchiato. Bis zu 4 Profile merken sich eure Lieblingsgetränke, damit jede Tasse genauso schmeckt wie beim letzten Mal."
        bullets={[
          "12 Kaffeespezialitäten auf Knopfdruck",
          "4 individuelle Nutzerprofile, 8 gespeicherte Getränke",
          "Übersichtliches, reaktionsschnelles Touch-Display",
        ]}
      />

      <FeatureSection
        reverse
        image="/images/pour.webp"
        imageAlt="Nahaufnahme: LatteGo Milchsystem gießt Milchschaum in ein Latte Macchiato Glas"
        eyebrow="LatteGo Milchsystem"
        title="Cremiger Milchschaum ohne Schlauch, ohne Aufwand."
        lead="Das LatteGo-System besteht aus nur zwei Teilen – keine Schläuche, kein umständliches Zerlegen. Einfach abnehmen, unter den Wasserhahn halten oder in die Spülmaschine stellen."
        bullets={[
          "In Sekunden gereinigt, keine Schläuche",
          "Spülmaschinenfest",
          "Feinporiger, cremiger Milchschaum",
        ]}
      />

      <FeatureSection
        image="/images/lifestyle.webp"
        imageAlt="Philips 5400 Series mit verschiedenen Kaffeespezialitäten und Bohnenbehälter"
        eyebrow="Keramikmahlwerk & AquaClean"
        title="Für jeden Moment die passende Tasse."
        lead="Das geräuscharme Keramikmahlwerk mahlt die Bohnen frisch für jede Tasse – in 12 Stufen fein einstellbar. Der AquaClean Wasserfilter sorgt dafür, dass du bis zu 5.000 Tassen lang nicht entkalken musst."
        bullets={[
          "12-stufig einstellbares Keramikmahlwerk",
          "Bis zu 5.000 Tassen ohne Entkalken (AquaClean)",
          "Herausnehmbare Brühgruppe für die Reinigung von Hand",
        ]}
      />

      <SpecSheet />
      <CompareTable />
      <Reviews />
      <Guarantee />
      <Includes />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

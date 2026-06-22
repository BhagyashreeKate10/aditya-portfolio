import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import ImpactDashboard from "./components/ImpactDashboard/ImpactDashboard";
import SkillsGalaxy from "./components/SkillsGalaxy/SkillsGalaxy";
import CreativeStudio from "./components/CreativeStudio/CreativeStudio";
import Contact from "./components/Contact/Contact";
import FloatingStats from "./components/FloatingStats";
import CareerJourney from "./components/CareerJourney/CareerJourney";
import MarketingDashboard from "./components/MarketingDashboard/MarketingDashboard";


function App() {
  return (
    <>
     <FloatingStats />

      <Hero />

      <About />

      <ImpactDashboard />

      <CareerJourney />

      <Journey />

      <CreativeStudio />

      <MarketingDashboard />

      <SkillsGalaxy />

      <Contact />
    </>
  );
}

export default App;
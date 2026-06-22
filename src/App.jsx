import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import ImpactDashboard from "./components/ImpactDashboard/ImpactDashboard";
import SkillsGalaxy from "./components/SkillsGalaxy/SkillsGalaxy";
import CreativeStudio from "./components/CreativeStudio/CreativeStudio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <About />
      <ImpactDashboard />
      <Journey />
      <CreativeStudio />
      <SkillsGalaxy />
      <Contact />
    </>
  );
}

export default App;
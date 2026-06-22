import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#030712",
          },
        },
        particles: {
          number: {
            value: 80,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            distance: 150,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}
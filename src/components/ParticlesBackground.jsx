import Particles from "@tsparticles/react";

function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        inset: 0,
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 80,
          },
            color: {
            value: "#00eaff",
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
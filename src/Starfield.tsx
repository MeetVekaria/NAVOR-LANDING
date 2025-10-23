import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Starfield() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // load the slim bundle (shapes, presets, etc.)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="navor-starfield"
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: "#0a0a0a" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true }
          },
          color: { value: ["#22d3ee", "#3b82f6", "#a855f7"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 2.2 } },
          move: { enable: true, speed: 0.35 }
        },        
        detectRetina: true
      }}
    />
  );
}
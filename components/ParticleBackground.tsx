const particles = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 10) * 0.4}s`,
  duration: `${6 + (i % 5)}s`,
}));

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-pink-300/40 shadow-[0_0_12px_rgba(244,114,182,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            animationName: "floatParticle",
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
            animationDirection: "alternate",
          }}
        />
      ))}
    </div>
  );
}
import { useEffect, useRef } from 'react';

/**
 * CursorParticles — High-density, volumetric smoke cloud trail.
 * Spawns interpolated smoke puffs on cursor movement for a continuous billowy smoke trail.
 */
export default function CursorParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;
    let animId;

    const particles = [];
    const MAX_PARTICLES = 280;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMouseMove, { passive: true });

    // Smoke Puff Particle Class
    class SmokeParticle {
      constructor(x, y, speedFactor = 1) {
        this.x = x + (Math.random() - 0.5) * 8;
        this.y = y + (Math.random() - 0.5) * 8;
        
        // Velocity: slight outward spread + gentle upward drift
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 0.8 + 0.2) * speedFactor;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - 0.35; // gentle upward smoke rise

        // Size: starts soft, expands like billowy smoke cloud
        this.size = Math.random() * 12 + 8;
        this.maxSize = this.size + Math.random() * 35 + 25;
        this.growth = Math.random() * 0.45 + 0.25;

        // Opacity & Lifespan
        this.alpha = Math.random() * 0.28 + 0.18;
        this.decay = Math.random() * 0.008 + 0.005;

        // Smoke Palette: Orbital Electric Cyan, Soft Neon Purple, and Ether White
        const rand = Math.random();
        if (rand < 0.45) {
          this.r = 0; this.g = 180; this.b = 255; // Electric Blue
        } else if (rand < 0.8) {
          this.r = 139; this.g = 92; this.b = 246; // Neon Purple
        } else {
          this.r = 230; this.g = 240; this.b = 255; // Luminous White
        }

        // Slight rotation for cloud texture
        this.rotation = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Expand cloud size over time
        if (this.size < this.maxSize) {
          this.size += this.growth;
        }

        // Soft air drag slows velocity
        this.vx *= 0.98;
        this.vy *= 0.98;

        this.rotation += this.spin;
        this.alpha -= this.decay;
      }

      draw() {
        if (this.alpha <= 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Soft volumetric smoke radial gradient
        const rad = Math.max(1, this.size);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
        const a = Math.max(0, this.alpha);

        grad.addColorStop(0, `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`);
        grad.addColorStop(0.4, `rgba(${this.r}, ${this.g}, ${this.b}, ${a * 0.5})`);
        grad.addColorStop(0.8, `rgba(${this.r}, ${this.g}, ${this.b}, ${a * 0.15})`);
        grad.addColorStop(1, `rgba(${this.r}, ${this.g}, ${this.b}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, rad, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      isDead() {
        return this.alpha <= 0;
      }
    }

    const spawnSmokeTrail = (x1, y1, x2, y2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 1) return;

      // Calculate number of smoke puffs based on distance moved
      const steps = Math.min(Math.ceil(dist / 4), 16);
      const speedFactor = Math.min(dist / 10, 2);

      for (let i = 0; i < steps; i++) {
        if (particles.length >= MAX_PARTICLES) {
          particles.shift(); // remove oldest to maintain fresh continuous smoke
        }
        const t = i / steps;
        const px = x1 + dx * t;
        const py = y1 + dy * t;
        particles.push(new SmokeParticle(px, py, speedFactor));
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (prevMouseX > 0 && prevMouseY > 0) {
        spawnSmokeTrail(prevMouseX, prevMouseY, mouseX, mouseY);
      }

      prevMouseX = mouseX;
      prevMouseY = mouseY;

      // Update and draw all smoke particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.isDead()) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99997,
      }}
    />
  );
}

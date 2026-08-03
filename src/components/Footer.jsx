import { useState } from "react";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.742l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function SocialLink({ social }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.href}
      aria-label={social.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: hovered
          ? "0.5px solid rgba(255,255,255,0.5)"
          : "0.5px solid rgba(255,255,255,0.15)",
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.5)",
        background: hovered ? "rgba(255,255,255,0.08)" : "transparent",
        transition: "all 0.25s ease",
        textDecoration: "none",
      }}
    >
      {social.icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#08020f",
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .footer-shimmer {
          background: linear-gradient(90deg, #00B4FF 0%, #8B5CF6 40%, #00B4FF 70%, #00B4FF 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .footer-link {
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.01em;
        }
        .footer-link:hover { color: #ffffff; }
      `}</style>

      {/* Ambient glow top */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main footer body */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 32px 40px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#ffffff",
                marginBottom: 10,
              }}
            >
              Next<span className="footer-shimmer">Orbit</span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Mumbai's premier event production studio. We turn visions into experiences that linger long after the lights go down.
            </p>

            {/* Accent dot-row */}
            <div style={{ display: "flex", gap: 5, marginTop: 18 }}>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  style={{
                    width: i === 1 ? 20 : 5,
                    height: 5,
                    borderRadius: 9999,
                    background: i === 1
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Social block */}
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                margin: "0 0 14px",
              }}
            >
              Follow Us
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(s => <SocialLink key={s.name} social={s} />)}
            </div>

            {/* Email */}
            <a
              href="mailto:connect@nextorbitevents.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                marginTop: 18,
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              connect@nextorbitevents.com
            </a>
          </div>
        </div>

        {/* Thin divider */}
        <div
          style={{
            height: "0.5px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 70%, transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: 0, letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Next Orbit Events Pvt. Ltd. — Mumbai, India
          </p>

          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Use"].map(l => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
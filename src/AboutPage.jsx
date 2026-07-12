import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Mono:wght@400;700&display=swap');`}</style>
      <div style={{ background: "#080808", minHeight: "100vh", color: "#f5f5f5" }}>

        {/* NAV */}
        <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(8,8,8,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1a1a1a", padding: "0 32px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span onClick={() => navigate("/")} style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", cursor: "pointer" }}>
            noir<span style={{ color: "#c8f04e" }}>shop</span>
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            <button onClick={() => navigate("/about")} style={{ background: "none", border: "none", color: "#c8f04e", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>About</button>
            <button onClick={() => navigate("/contact")} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>Contact</button>
            <button onClick={() => navigate("/")} style={{ background: "none", border: "1px solid #333", color: "#888", borderRadius: "8px", padding: "8px 16px", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>← Shop</button>
          </div>
        </nav>

        {/* DISCLAIMER BANNER */}
        <div style={{ background: "#1a2a0a", borderBottom: "1px solid #c8f04e33", padding: "12px 32px", textAlign: "center" }}>
          <span style={{ color: "#c8f04e", fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "1px" }}>
            ⚠️ This is a demo e-commerce project built for learning purposes. No real transactions occur.
          </span>
        </div>

        {/* CONTENT */}
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ color: "#c8f04e", fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px" }}>ABOUT</div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", lineHeight: 1.1, marginBottom: "32px" }}>
            Built to learn.<br />
            <span style={{ color: "#c8f04e" }}>Designed to impress.</span>
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#888", fontFamily: "'Space Mono', monospace", fontSize: "13px", lineHeight: 1.8 }}>
            <p>noirshop is a full-stack e-commerce platform built as a learning project by <strong style={{ color: "#f5f5f5" }}>Purnima Nand Mehar</strong>, an ECE undergraduate at IGDTUW specializing in Artificial Intelligence.</p>
            
            <p>This project demonstrates end-to-end full-stack development — from designing a React frontend with custom state management, to building a Node.js REST API, integrating MongoDB Atlas for persistence, and implementing JWT authentication.</p>

            <div style={{ background: "#111", borderRadius: "12px", padding: "24px", border: "1px solid #222" }}>
              <div style={{ color: "#c8f04e", fontSize: "10px", letterSpacing: "2px", marginBottom: "16px" }}>TECH STACK</div>
              {[
                ["Frontend", "React, Vite, React Router, Zustand"],
                ["Backend", "Node.js, Express.js, REST API"],
                ["Database", "MongoDB Atlas, Mongoose"],
                ["Auth", "JWT, bcryptjs"],
                ["Payments", "Stripe (mock)"],
                ["Deployment", "Vercel + Render"],
              ].map(([key, val]) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a1a1a" }}>
                  <span style={{ color: "#555" }}>{key}</span>
                  <span style={{ color: "#f5f5f5" }}>{val}</span>
                </div>
              ))}
            </div>

            <p>The source code is open on <a href="https://github.com/Purnimanandmehar14/noirshop" target="_blank" style={{ color: "#c8f04e" }}>GitHub</a>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
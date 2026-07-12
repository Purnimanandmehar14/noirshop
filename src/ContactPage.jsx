import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

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
            <button onClick={() => navigate("/about")} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>About</button>
            <button onClick={() => navigate("/contact")} style={{ background: "none", border: "none", color: "#c8f04e", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>Contact</button>
            <button onClick={() => navigate("/")} style={{ background: "none", border: "1px solid #333", color: "#888", borderRadius: "8px", padding: "8px 16px", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>← Shop</button>
          </div>
        </nav>

        {/* DISCLAIMER */}
        <div style={{ background: "#1a2a0a", borderBottom: "1px solid #c8f04e33", padding: "12px 32px", textAlign: "center" }}>
          <span style={{ color: "#c8f04e", fontFamily: "'Space Mono', monospace", fontSize: "11px" }}>
            ⚠️ This is a demo project. No real transactions occur.
          </span>
        </div>

        {/* CONTENT */}
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ color: "#c8f04e", fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px" }}>CONTACT</div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", lineHeight: 1.1, marginBottom: "16px" }}>
            Get in touch.
          </h1>
          <p style={{ color: "#555", fontFamily: "'Space Mono', monospace", fontSize: "13px", marginBottom: "40px", lineHeight: 1.8 }}>
            Have questions about this project? Want to collaborate? Reach out!
          </p>

          {sent ? (
            <div style={{ background: "#1a2a0a", border: "1px solid #c8f04e33", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "24px", color: "#c8f04e" }}>Message sent!</div>
              <div style={{ color: "#555", fontFamily: "'Space Mono', monospace", fontSize: "12px", marginTop: "8px" }}>
                (This is a demo — no actual email sent)
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[["name", "Your name", "text"], ["email", "Email address", "email"]].map(([field, placeholder, type]) => (
                <input
                  key={field}
                  type={type}
                  placeholder={placeholder}
                  value={form[field]}
                  onChange={(e) => setForm(f => ({ ...f, [field]: e.target.value }))}
                  style={{ background: "#111", border: "1px solid #222", borderRadius: "8px", padding: "12px 16px", color: "#f5f5f5", fontFamily: "'Space Mono', monospace", fontSize: "12px", outline: "none" }}
                />
              ))}
              <textarea
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                rows={5}
                style={{ background: "#111", border: "1px solid #222", borderRadius: "8px", padding: "12px 16px", color: "#f5f5f5", fontFamily: "'Space Mono', monospace", fontSize: "12px", outline: "none", resize: "vertical" }}
              />
              <button
                onClick={submit}
                style={{ background: "#c8f04e", color: "#0a0a0a", border: "none", borderRadius: "10px", padding: "14px", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "14px", cursor: "pointer", letterSpacing: "1px" }}
              >
                SEND MESSAGE →
              </button>

              <div style={{ textAlign: "center", color: "#444", fontFamily: "'Space Mono', monospace", fontSize: "11px", marginTop: "8px" }}>
                Or email directly: <span style={{ color: "#c8f04e" }}>purnimanandmehar@gmail.com</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
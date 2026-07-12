import { useState } from "react";

const API_URL = "https://noirshop-backend.onrender.com";

export default function AuthModal({ onClose, onSuccess }) {
  const [mode, setMode] = useState("login"); // login | signup
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setError("");
    setLoading(true);
    const url = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
    try {
      const res = await fetch(`${API_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message); setLoading(false); return; }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      onSuccess(data.user);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  const inp = (field, placeholder, type = "text") => (
    <input
      type={type}
      placeholder={placeholder}
      value={form[field]}
      onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
      style={{
        background: "#111", border: "1px solid #2a2a2a", borderRadius: "8px",
        padding: "10px 14px", color: "#f5f5f5",
        fontFamily: "'Space Mono', monospace", fontSize: "12px",
        outline: "none", width: "100%",
      }}
    />
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(6px)" }}>
      <div style={{ background: "#0f0f0f", border: "1px solid #222", borderRadius: "16px", width: "420px", maxWidth: "95vw", padding: "32px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: "#f5f5f5" }}>
            {mode === "login" ? "Welcome back" : "Create account"}
          </span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#555", fontSize: "18px", cursor: "pointer" }}>✕</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {mode === "signup" && inp("name", "Full name")}
          {inp("email", "Email address", "email")}
          {inp("password", "Password", "password")}
        </div>

        {error && (
          <div style={{ color: "#e05555", fontFamily: "'Space Mono', monospace", fontSize: "11px", marginTop: "12px" }}>
            ❌ {error}
          </div>
        )}

        <button
          onClick={submit}
          disabled={loading}
          style={{
            width: "100%", marginTop: "20px", padding: "14px",
            background: loading ? "#1e1e1e" : "#c8f04e",
            color: loading ? "#444" : "#0a0a0a",
            border: "none", borderRadius: "10px",
            fontFamily: "'Space Mono', monospace", fontWeight: 700,
            fontSize: "14px", cursor: loading ? "not-allowed" : "pointer",
            letterSpacing: "1px",
          }}
        >
          {loading ? "Please wait..." : mode === "login" ? "LOGIN" : "SIGN UP"}
        </button>

        <div style={{ textAlign: "center", marginTop: "16px", fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#555" }}>
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            style={{ color: "#c8f04e", cursor: "pointer" }}
          >
            {mode === "login" ? "Sign up" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
}
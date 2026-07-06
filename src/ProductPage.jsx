import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8000";

function Stars({ rating }) {
  return (
    <span style={{ color: "#f5a623", letterSpacing: "1px", fontSize: "14px" }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => { setProduct(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div style={{ background: "#080808", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8f04e", fontFamily: "'Space Mono', monospace" }}>
      Loading...
    </div>
  );

  if (!product) return (
    <div style={{ background: "#080808", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", fontFamily: "'Space Mono', monospace" }}>
      Product not found.
    </div>
  );

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Mono:wght@400;700&display=swap');`}</style>
      <div style={{ background: "#080808", minHeight: "100vh", color: "#f5f5f5" }}>
        <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(8,8,8,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1a1a1a", padding: "0 32px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span onClick={() => navigate("/")} style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", cursor: "pointer" }}>
            noir<span style={{ color: "#c8f04e" }}>shop</span>
          </span>
          <button onClick={() => navigate("/")} style={{ background: "none", border: "1px solid #333", color: "#888", borderRadius: "8px", padding: "8px 16px", cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>
            ← Back
          </button>
        </nav>

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div style={{ background: "#111", borderRadius: "16px", padding: "60px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "120px", border: "1px solid #222" }}>
            {product.img}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <div style={{ color: "#888", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", marginBottom: "8px" }}>
                {product.category}
              </div>
              <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "32px", lineHeight: 1.2, margin: 0 }}>
                {product.name}
              </h1>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Stars rating={product.rating} />
              <span style={{ color: "#555", fontFamily: "'Space Mono', monospace", fontSize: "12px" }}>
                ({product.reviews?.toLocaleString()} reviews)
              </span>
            </div>

            <p style={{ color: "#888", fontFamily: "'Space Mono', monospace", fontSize: "13px", lineHeight: 1.8 }}>
              {product.desc}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "20px 0", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e" }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "36px", color: "#c8f04e" }}>
                ${product.price}
              </span>
              <span style={{ background: "#c8f04e22", color: "#c8f04e", border: "1px solid #c8f04e44", borderRadius: "6px", fontSize: "11px", fontWeight: 700, padding: "4px 10px", fontFamily: "'Space Mono', monospace" }}>
                {product.tag}
              </span>
            </div>

            <button onClick={() => navigate("/")} style={{ background: "#c8f04e", color: "#0a0a0a", border: "none", borderRadius: "10px", padding: "16px", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "14px", cursor: "pointer", letterSpacing: "1px" }}>
              ← BACK TO SHOP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
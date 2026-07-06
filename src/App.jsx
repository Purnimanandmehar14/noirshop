// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   );
// }

// export default App;

import { useState, useEffect, useRef } from "react";

const API_URL = "http://localhost:8000";

// const [products, setProducts] = useState([]);


// ─── MOCK DATA ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Mechanical Keyboard",
    category: "Electronics",
    price: 189,
    rating: 4.8,
    reviews: 342,
    tag: "Bestseller",
    img: "⌨️",
    desc: "Full aluminum chassis, Cherry MX switches, per-key RGB.",
  },
  {
    id: 2,
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 279,
    rating: 4.9,
    reviews: 891,
    tag: "Top Rated",
    img: "🎧",
    desc: "40hr battery, adaptive ANC, spatial audio support.",
  },
  {
    id: 3,
    name: "Ergonomic Desk Chair",
    category: "Furniture",
    price: 449,
    rating: 4.7,
    reviews: 215,
    tag: "Popular",
    img: "🪑",
    desc: "Lumbar mesh, adjustable armrests, 4D headrest.",
  },
  {
    id: 4,
    name: "Minimal Desk Lamp",
    category: "Furniture",
    price: 89,
    rating: 4.5,
    reviews: 128,
    tag: "New",
    img: "🪔",
    desc: "Warm/cool 2700–6500K, USB-C charging base.",
  },
  {
    id: 5,
    name: "Ultra-Wide Monitor 34″",
    category: "Electronics",
    price: 649,
    rating: 4.8,
    reviews: 473,
    tag: "Pro Pick",
    img: "🖥️",
    desc: "3440×1440, 144Hz, 1ms, HDR 400.",
  },
  {
    id: 6,
    name: "Carbon Fiber Wallet",
    category: "Accessories",
    price: 59,
    rating: 4.6,
    reviews: 302,
    tag: "Sleek",
    img: "👛",
    desc: "RFID block, 8-card capacity, 20g featherweight.",
  },
  {
    id: 7,
    name: "Stainless Steel Bottle",
    category: "Accessories",
    price: 45,
    rating: 4.7,
    reviews: 511,
    tag: "Eco",
    img: "🍶",
    desc: "Triple-wall insulation, 24hr cold / 12hr hot.",
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    category: "Electronics",
    price: 39,
    rating: 4.4,
    reviews: 199,
    tag: "Value",
    img: "⚡",
    desc: "15W fast charge, Qi compatible, LED indicator.",
  },
  {
    id: 9,
    name: "Standing Desk 160cm",
    category: "Furniture",
    price: 599,
    rating: 4.9,
    reviews: 134,
    tag: "Upgrade",
    img: "🗄️",
    desc: "3-motor lift, programmable presets, cable tray.",
  },
  {
    id: 10,
    name: "Leather Notebook A5",
    category: "Accessories",
    price: 35,
    rating: 4.8,
    reviews: 677,
    tag: "Classic",
    img: "📓",
    desc: "Full-grain leather, dot-grid, lay-flat binding.",
  },
  {
    id: 11,
    name: "Compact Mirrorless Camera",
    category: "Electronics",
    price: 899,
    rating: 4.9,
    reviews: 248,
    tag: "Creator",
    img: "📷",
    desc: "26MP, IBIS, 4K60 video, dual SD slots.",
  },
  {
    id: 12,
    name: "Minimalist Wall Clock",
    category: "Furniture",
    price: 79,
    rating: 4.5,
    reviews: 88,
    tag: "Design",
    img: "🕰️",
    desc: "Silent sweep, solid brass hands, walnut frame.",
  },
];

const CATEGORIES = ["All", "Electronics", "Furniture", "Accessories"];
const SORT_OPTIONS = [
  "Featured",
  "Price: Low→High",
  "Price: High→Low",
  "Top Rated",
  "Most Reviewed",
];

// ─── ZUSTAND-LIKE STORE (inline, no external dep) ────────────────────────────
function createStore(init) {
  let state = init;
  const listeners = new Set();
  return {
    get: () => state,
    set: (updater) => {
      state =
        typeof updater === "function"
          ? updater(state)
          : { ...state, ...updater };
      listeners.forEach((l) => l(state));
    },
    subscribe: (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
  };
}

const cartStore = createStore({ items: [], open: false });

function useCart() {
  const [state, setState] = useState(cartStore.get());
  useEffect(() => cartStore.subscribe(setState), []);
  const add = (product) =>
    cartStore.set((s) => {
      const exists = s.items.find((i) => i.id === product.id);
      return {
        ...s,
        items: exists
          ? s.items.map((i) =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
            )
          : [...s.items, { ...product, qty: 1 }],
      };
    });
  const remove = (id) =>
    cartStore.set((s) => ({ ...s, items: s.items.filter((i) => i.id !== id) }));
  const update = (id, qty) =>
    cartStore.set((s) => ({
      ...s,
      items:
        qty < 1
          ? s.items.filter((i) => i.id !== id)
          : s.items.map((i) => (i.id === id ? { ...i, qty } : i)),
    }));
  const toggle = (v) => cartStore.set((s) => ({ ...s, open: v ?? !s.open }));
  const clear = () => cartStore.set({ items: [], open: false });
  const total = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const count = state.items.reduce((acc, i) => acc + i.qty, 0);
  return { ...state, add, remove, update, toggle, clear, total, count };
}

// ─── STRIPE MOCK ─────────────────────────────────────────────────────────────
const STRIPE_MOCK = {
  async createPaymentIntent(amount) {
    await new Promise((r) => setTimeout(r, 1200));
    return { clientSecret: `pi_mock_${Date.now()}`, amount };
  },
};

// ─── COMPONENT: STAR RATING ──────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <span style={{ color: "#f5a623", letterSpacing: "1px", fontSize: "12px" }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

// ─── COMPONENT: PRODUCT CARD ─────────────────────────────────────────────────
function ProductCard({ product, onAdd, added }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#1a1a1a" : "#111",
        border: `1px solid ${hover ? "#444" : "#222"}`,
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover
          ? "0 16px 40px rgba(0,0,0,.6)"
          : "0 2px 8px rgba(0,0,0,.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          background: "#c8f04e22",
          color: "#c8f04e",
          border: "1px solid #c8f04e44",
          borderRadius: "6px",
          fontSize: "10px",
          fontWeight: 700,
          padding: "3px 8px",
          letterSpacing: "0.5px",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {product.tag}
      </span>

      <div style={{ fontSize: "52px", textAlign: "center", padding: "12px 0" }}>
        {product.img}
      </div>

      <div>
        <div
          style={{
            color: "#888",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "4px",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {product.category}
        </div>
        <div
          style={{
            color: "#f5f5f5",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: 1.3,
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          {product.name}
        </div>
      </div>

      <p
        style={{
          color: "#666",
          fontSize: "12px",
          lineHeight: 1.6,
          margin: 0,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {product.desc}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Stars rating={product.rating} />
        <span
          style={{
            color: "#555",
            fontSize: "11px",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          ({product.reviews.toLocaleString()})
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "auto",
          paddingTop: "8px",
          borderTop: "1px solid #222",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#c8f04e",
            fontFamily: "'DM Serif Display', serif",
          }}
        >
          ${product.price}
        </span>
        <button
          onClick={() => onAdd(product)}
          style={{
            background: added ? "#c8f04e22" : "#c8f04e",
            color: added ? "#c8f04e" : "#0a0a0a",
            border: added ? "1px solid #c8f04e" : "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Space Mono', monospace",
            transition: "all 0.2s",
            letterSpacing: "0.5px",
          }}
        >
          {added ? "✓ Added" : "+ Cart"}
        </button>
      </div>
    </div>
  );
}

// ─── COMPONENT: CART DRAWER ──────────────────────────────────────────────────
function CartDrawer({ onCheckout }) {
  const { items, open, toggle, remove, update, total, count } = useCart();
  return (
    <>
      {open && (
        <div
          onClick={() => toggle(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.7)",
            zIndex: 90,
            backdropFilter: "blur(4px)",
          }}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "380px",
          background: "#0f0f0f",
          borderLeft: "1px solid #222",
          zIndex: 100,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "24px",
            borderBottom: "1px solid #1e1e1e",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "20px",
              color: "#f5f5f5",
            }}
          >
            Cart <span style={{ color: "#c8f04e" }}>({count})</span>
          </span>
          <button
            onClick={() => toggle(false)}
            style={{
              background: "none",
              border: "none",
              color: "#666",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
          {items.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                color: "#444",
                paddingTop: "60px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>🛒</div>
              Your cart is empty
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "16px 0",
                  borderBottom: "1px solid #1a1a1a",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    width: "44px",
                    textAlign: "center",
                  }}
                >
                  {item.img}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      color: "#e8e8e8",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "4px",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      color: "#c8f04e",
                      fontSize: "13px",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    ${item.price}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "8px",
                    }}
                  >
                    <button
                      onClick={() => update(item.id, item.qty - 1)}
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#1e1e1e",
                        border: "1px solid #333",
                        color: "#ccc",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        color: "#f5f5f5",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "13px",
                        minWidth: "20px",
                        textAlign: "center",
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={() => update(item.id, item.qty + 1)}
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "#1e1e1e",
                        border: "1px solid #333",
                        color: "#ccc",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => remove(item.id)}
                      style={{
                        marginLeft: "auto",
                        background: "none",
                        border: "none",
                        color: "#555",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ padding: "20px", borderTop: "1px solid #1e1e1e" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                color: "#888",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
              }}
            >
              Subtotal
            </span>
            <span
              style={{
                color: "#f5f5f5",
                fontFamily: "'DM Serif Display', serif",
                fontSize: "20px",
              }}
            >
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => {
              toggle(false);
              onCheckout();
            }}
            disabled={items.length === 0}
            style={{
              width: "100%",
              padding: "14px",
              background: items.length === 0 ? "#1e1e1e" : "#c8f04e",
              color: items.length === 0 ? "#444" : "#0a0a0a",
              border: "none",
              borderRadius: "10px",
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: "14px",
              cursor: items.length === 0 ? "not-allowed" : "pointer",
              letterSpacing: "1px",
            }}
          >
            CHECKOUT →
          </button>
        </div>
      </div>
    </>
  );
}

// ─── COMPONENT: CHECKOUT MODAL ───────────────────────────────────────────────
function CheckoutModal({ onClose, onSuccess }) {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState("form"); // form | processing | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    card: "",
    expiry: "",
    cvv: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (form.card.replace(/\s/g, "").length < 16) e.card = "16 digits required";
    if (!form.expiry.match(/\d{2}\/\d{2}/)) e.expiry = "MM/YY format";
    if (form.cvv.length < 3) e.cvv = "3 digits";
    if (!form.address.trim()) e.address = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStep("processing");
    await STRIPE_MOCK.createPaymentIntent(total * 100);
    setStep("success");
    setTimeout(() => {
      clear();
      onSuccess();
    }, 2000);
  };

  const inp = (field, placeholder, type = "text") => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <input
        type={type}
        placeholder={placeholder}
        value={form[field]}
        onChange={(e) => {
          let v = e.target.value;
          if (field === "card")
            v = v
              .replace(/\D/g, "")
              .slice(0, 16)
              .replace(/(.{4})/g, "$1 ")
              .trim();
          if (field === "expiry")
            v = v
              .replace(/\D/g, "")
              .slice(0, 4)
              .replace(/^(\d{2})(\d)/, "$1/$2");
          if (field === "cvv") v = v.replace(/\D/g, "").slice(0, 3);
          setForm((f) => ({ ...f, [field]: v }));
        }}
        style={{
          background: "#111",
          border: `1px solid ${errors[field] ? "#e05555" : "#2a2a2a"}`,
          borderRadius: "8px",
          padding: "10px 14px",
          color: "#f5f5f5",
          fontFamily: "'Space Mono', monospace",
          fontSize: "12px",
          outline: "none",
        }}
      />
      {errors[field] && (
        <span
          style={{
            color: "#e05555",
            fontSize: "10px",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {errors[field]}
        </span>
      )}
    </div>
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.85)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #222",
          borderRadius: "16px",
          width: "520px",
          maxWidth: "95vw",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "32px",
        }}
      >
        {step === "success" ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>✅</div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "28px",
                color: "#c8f04e",
                marginBottom: "12px",
              }}
            >
              Order Placed!
            </div>
            <div
              style={{
                color: "#666",
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
              }}
            >
              Confirmation sent to {form.email}
            </div>
          </div>
        ) : step === "processing" ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div
              style={{
                fontSize: "48px",
                marginBottom: "20px",
                animation: "spin 1s linear infinite",
              }}
            >
              ⚙️
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "20px",
                color: "#f5f5f5",
                marginBottom: "8px",
              }}
            >
              Processing Payment…
            </div>
            <div
              style={{
                color: "#555",
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
              }}
            >
              Stripe → secure encryption
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "22px",
                  color: "#f5f5f5",
                }}
              >
                Secure Checkout
              </span>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  color: "#555",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>

            {/* Order summary */}
            <div
              style={{
                background: "#111",
                borderRadius: "10px",
                padding: "16px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  color: "#888",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontFamily: "'Space Mono', monospace",
                  marginBottom: "10px",
                }}
              >
                ORDER SUMMARY
              </div>
              {items.map((i) => (
                <div
                  key={i.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    fontFamily: "'Space Mono', monospace",
                    color: "#aaa",
                    marginBottom: "4px",
                  }}
                >
                  <span>
                    {i.img} {i.name} ×{i.qty}
                  </span>
                  <span>${(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
              <div
                style={{
                  borderTop: "1px solid #222",
                  marginTop: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#f5f5f5",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "13px",
                    fontWeight: 700,
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    color: "#c8f04e",
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "20px",
                  }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{
                  color: "#555",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                CONTACT
              </div>
              {inp("name", "Full name")}
              {inp("email", "Email address", "email")}
              <div
                style={{
                  color: "#555",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontFamily: "'Space Mono', monospace",
                  marginTop: "8px",
                }}
              >
                SHIPPING
              </div>
              {inp("address", "Shipping address")}
              <div
                style={{
                  color: "#555",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontFamily: "'Space Mono', monospace",
                  marginTop: "8px",
                }}
              >
                PAYMENT <span style={{ color: "#c8f04e" }}>🔒 Stripe</span>
              </div>
              {inp("card", "Card number")}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {inp("expiry", "MM/YY")}
                {inp("cvv", "CVV")}
              </div>
            </div>

            <button
              onClick={submit}
              style={{
                width: "100%",
                marginTop: "24px",
                padding: "14px",
                background: "#c8f04e",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "10px",
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
            >
              PAY ${total.toFixed(2)}
            </button>
          </>
        )}
      </div>
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
}

// ─── COMPONENT: USER PROFILE / ORDER HISTORY ─────────────────────────────────
function ProfileModal({ onClose }) {
  const orders = [
    {
      id: "#8821",
      date: "Mar 22, 2026",
      items: ["⌨️ Obsidian Keyboard", "🎧 Headphones"],
      total: 468,
    },
    {
      id: "#8744",
      date: "Feb 14, 2026",
      items: ["🖥️ Ultra-Wide Monitor"],
      total: 649,
    },
    {
      id: "#8701",
      date: "Jan 30, 2026",
      items: ["🪑 Ergonomic Chair", "🪔 Desk Lamp"],
      total: 538,
    },
  ];
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.85)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #222",
          borderRadius: "16px",
          width: "480px",
          maxWidth: "95vw",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "22px",
              color: "#f5f5f5",
            }}
          >
            My Profile
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#555",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "20px",
            background: "#111",
            borderRadius: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#c8f04e22",
              border: "2px solid #c8f04e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            👤
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#f5f5f5",
                fontWeight: 700,
              }}
            >
              Alex Chen
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#555",
                fontSize: "12px",
              }}
            >
              alex@studio.dev
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#c8f04e",
                fontSize: "10px",
                marginTop: "4px",
              }}
            >
              ✦ Premium Member
            </div>
          </div>
        </div>

        <div
          style={{
            color: "#555",
            fontSize: "10px",
            letterSpacing: "2px",
            fontFamily: "'Space Mono', monospace",
            marginBottom: "14px",
          }}
        >
          ORDER HISTORY
        </div>
        {orders.map((o) => (
          <div
            key={o.id}
            style={{
              background: "#111",
              borderRadius: "10px",
              padding: "16px",
              marginBottom: "10px",
              border: "1px solid #1e1e1e",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#c8f04e",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {o.id}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#555",
                  fontSize: "11px",
                }}
              >
                {o.date}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#888",
                fontSize: "11px",
                marginBottom: "8px",
              }}
            >
              {o.items.join("  ·  ")}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "#1a2a0a",
                  color: "#c8f04e",
                  borderRadius: "5px",
                  padding: "2px 8px",
                  fontSize: "10px",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Delivered
              </span>
              <span
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: "#f5f5f5",
                  fontSize: "17px",
                }}
              >
                ${o.total}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const { add, toggle, count, items } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [added, setAdded] = useState({});
  const [modal, setModal] = useState(null); // null | "checkout" | "profile"

  const handleAdd = (product) => {
    add(product);
    setAdded((a) => ({ ...a, [product.id]: true }));
    setTimeout(() => setAdded((a) => ({ ...a, [product.id]: false })), 1500);
  };

  const filtered = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  ).sort((a, b) => {
    if (sort === "Price: Low→High") return a.price - b.price;
    if (sort === "Price: High→Low") return b.price - a.price;
    if (sort === "Top Rated") return b.rating - a.rating;
    if (sort === "Most Reviewed") return b.reviews - a.reviews;
    return 0;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Mono:wght@400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; color: #f5f5f5; font-family: 'Space Mono', monospace; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        input::placeholder { color: #444; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(8,8,8,.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1a1a1a",
          padding: "0 32px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "22px",
            letterSpacing: "-0.5px",
          }}
        >
          noir<span style={{ color: "#c8f04e" }}>shop</span>
        </span>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#444",
                fontSize: "13px",
              }}
            >
              ⌕
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              style={{
                background: "#111",
                border: "1px solid #222",
                borderRadius: "8px",
                padding: "8px 12px 8px 28px",
                color: "#f5f5f5",
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                width: "220px",
                outline: "none",
              }}
            />
          </div>

          <button
            onClick={() => setModal("profile")}
            style={{
              background: "none",
              border: "1px solid #222",
              color: "#888",
              borderRadius: "8px",
              padding: "8px 14px",
              cursor: "pointer",
              fontSize: "12px",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            👤 Profile
          </button>

          <button
            onClick={() => toggle(true)}
            style={{
              position: "relative",
              background: "#c8f04e",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: "12px",
              cursor: "pointer",
              letterSpacing: "0.5px",
            }}
          >
            🛒 Cart
            {count > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  background: "#e05555",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div
        style={{
          padding: "60px 32px 40px",
          background: "linear-gradient(180deg, #0d0d0d 0%, #080808 100%)",
          borderBottom: "1px solid #111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, #c8f04e08 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              color: "#c8f04e",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              letterSpacing: "3px",
              marginBottom: "14px",
            }}
          >
            ✦ FREE SHIPPING OVER $150
          </div>
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px,5vw,56px)",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Curated gear for
            <br />
            <span style={{ color: "#c8f04e" }}>the deliberate life.</span>
          </h1>
          <p
            style={{
              color: "#555",
              fontSize: "13px",
              lineHeight: 1.8,
              maxWidth: "480px",
            }}
          >
            {filtered.length} products across {CATEGORIES.length - 1} categories
            — ruthlessly selected for quality and design.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div
        style={{
          padding: "16px 32px",
          borderBottom: "1px solid #111",
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          background: "#0a0a0a",
        }}
      >
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              background: category === c ? "#c8f04e" : "transparent",
              color: category === c ? "#0a0a0a" : "#555",
              border: `1px solid ${category === c ? "#c8f04e" : "#222"}`,
              borderRadius: "6px",
              padding: "6px 14px",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              cursor: "pointer",
              fontWeight: category === c ? 700 : 400,
              transition: "all 0.2s",
            }}
          >
            {c}
          </button>
        ))}

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "#444", fontSize: "11px" }}>Sort:</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              background: "#111",
              border: "1px solid #222",
              color: "#aaa",
              borderRadius: "6px",
              padding: "6px 10px",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              outline: "none",
            }}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* GRID */}
      <div style={{ padding: "32px", maxWidth: "1400px", margin: "0 auto" }}>
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "#333",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
            No products match your search.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAdd={handleAdd}
                added={!!added[p.id]}
              />
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #111",
          padding: "32px",
          textAlign: "center",
          color: "#333",
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: "#444",
            fontSize: "16px",
          }}
        >
          noir<span style={{ color: "#c8f04e33" }}>shop</span>
        </span>
        <div style={{ marginTop: "8px" }}>
          Built with React · Zustand · Stripe · Next.js · MongoDB
        </div>
      </footer>

      {/* CART DRAWER */}
      <CartDrawer onCheckout={() => setModal("checkout")} />

      {/* CHECKOUT MODAL */}
      {modal === "checkout" && (
        <CheckoutModal
          onClose={() => setModal(null)}
          onSuccess={() => setModal(null)}
        />
      )}

      {/* PROFILE MODAL */}
      {modal === "profile" && <ProfileModal onClose={() => setModal(null)} />}
    </>
  );
}


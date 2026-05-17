"use client";

export default function Home() {
  return (
    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ color: "#f59e0b", fontSize: "32px" }}>
          HardinBitcoin
        </h1>

        <button
          style={{
            background: "#f59e0b",
            color: "black",
            border: "none",
            padding: "12px 24px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Connect Wallet
        </button>
      </nav>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "30px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "55px",
              maxWidth: "700px",
              lineHeight: "1.1",
            }}
          >
            Buy Bitcoin. Hold Secure. Grow With Confidence.
          </h2>

          <p
            style={{
              color: "#9ca3af",
              maxWidth: "600px",
              marginTop: "20px",
              fontSize: "20px",
            }}
          >
            Secure Bitcoin platform with wallet connection and dashboard.
          </p>

          <button
            style={{
              marginTop: "25px",
              background: "#f59e0b",
              color: "black",
              border: "none",
              padding: "15px 30px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Start Now
          </button>
        </div>

        <div
          style={{
            background: "#111827",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

          <h3>Total Bitcoin</h3>
          <h1 style={{ color: "#f59e0b" }}>0.532 BTC</h1>

          <h3 style={{ marginTop: "20px" }}>Current BTC Price</h3>
          <h1>$64,892</h1>

          <h3 style={{ marginTop: "20px", color: "lightgreen" }}>
            +2.35% (24h)
          </h3>
        </div>
      </section>
    </main>
  );
}

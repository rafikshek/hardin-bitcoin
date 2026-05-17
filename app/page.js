"use client";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#f59e0b", fontSize: "50px" }}>
        HardinBitcoin
      </h1>

      <button
        style={{
          background: "#f59e0b",
          color: "black",
          padding: "15px 25px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Connect Wallet
      </button>

      <h2
        style={{
          fontSize: "60px",
          marginTop: "40px",
          maxWidth: "700px",
        }}
      >
        Buy Bitcoin. Hold Secure. Grow With Confidence.
      </h2>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "22px",
          maxWidth: "700px",
        }}
      >
        Secure Bitcoin tracking dashboard with wallet connection.
      </p>

      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "40px",
        }}
      >
        <h2>Dashboard</h2>

        <h3>Total Bitcoin</h3>
        <h1 style={{ color: "#f59e0b" }}>0.532 BTC</h1>

        <h3>Current BTC Price</h3>
        <h1>$64,892</h1>

        <h3 style={{ color: "lightgreen" }}>+2.35%</h3>
      </div>
    </div>
  );
}

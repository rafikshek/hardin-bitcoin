        "use client";

export default function Home() {

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        alert("Wallet Connected Successfully");
      } catch (err) {
        alert("Connection Cancelled");
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  return (
    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#f59e0b", fontSize: "60px" }}>
        HardinBitcoin
      </h1>

      <h2 style={{ fontSize: "42px", maxWidth: "700px" }}>
        Buy Bitcoin. Hold Secure. Grow With Confidence.
      </h2>

      <p style={{ color: "#9ca3af", maxWidth: "600px" }}>
        Secure Bitcoin platform with wallet connection.
      </p>

      <button
        onClick={connectWallet}
        style={{
          marginTop: "20px",
          background: "#f59e0b",
          color: "black",
          border: "none",
          padding: "15px 30px",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Connect Wallet
      </button>
    </main>
  );
}

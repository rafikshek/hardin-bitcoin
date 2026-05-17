export default function HardinBitcoin() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-6 border-b border-yellow-500/20">
        <h1 className="text-3xl font-bold text-yellow-400">
          HardinBitcoin
        </h1>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-2xl font-semibold">
          Connect Wallet
        </button>
      </header>

      <section className="grid md:grid-cols-2 gap-10 p-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Buy Bitcoin.
            <span className="text-yellow-400">
              {" "}Hold Secure.
            </span>
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            Secure Bitcoin tracking dashboard with wallet connection
            and daily investment strategy.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold">
              Start Now
            </button>

            <button className="border border-yellow-400 px-6 py-3 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 border border-yellow-500/20">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Dashboard
          </h3>

          <div className="grid gap-4">
            <div className="bg-black rounded-2xl p-4 border border-zinc-700">
              <p className="text-gray-400">Total Bitcoin</p>
              <h4 className="text-3xl font-bold mt-2">
                0.532 BTC
              </h4>
            </div>

            <div className="bg-black rounded-2xl p-4 border border-zinc-700">
              <p className="text-gray-400">Current BTC Price</p>
              <h4 className="text-3xl font-bold mt-2">
                $64,892
              </h4>
            </div>

            <div className="bg-black rounded-2xl p-4 border border-zinc-700">
              <p className="text-gray-400">24h Growth</p>
              <h4 className="text-3xl font-bold mt-2 text-green-400">
                +2.35%
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10">
        <div className="bg-yellow-400 text-black rounded-3xl p-10 text-center">
          <h3 className="text-4xl font-bold mb-4">
            Premium Access
          </h3>

          <p className="text-xl mb-6">
            Pay only with SOL or USDT to access premium dashboard.
          </p>

          <button className="bg-black text-yellow-400 px-8 py-4 rounded-2xl text-xl font-bold">
            Pay with SOL / USDT
          </button>
        </div>
      </section>

      <footer className="border-t border-yellow-500/20 text-center p-6 text-gray-500">
        © 2026 HardinBitcoin. All rights reserved.
      </footer>
    </div>
  )
}

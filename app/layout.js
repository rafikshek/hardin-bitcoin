export const metadata = {
  title: "HardinBitcoin",
  description: "Buy Bitcoin easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

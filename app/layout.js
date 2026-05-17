
export const metadata = {
  title: "HardinBitcoin",
  description: "Secure Bitcoin Platform",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APP — Advanced Programming Practice",
  description: "Learn programming concepts visually through interactive explanations, simulations, and code.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

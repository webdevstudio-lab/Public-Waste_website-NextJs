import "./globals.css";

export const metadata = {
  title: "WebdevStudio | Dev hosting",
  description: "Template for Webdev Site integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="Fr">
      <body>{children}</body>
    </html>
  );
}

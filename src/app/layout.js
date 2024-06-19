import "./globals.css";

export const metadata = {
  title: "AFRICA TELECOM",
  description: "AFRICA TELECOM WEBSITE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="Fr">
      <body>{children}</body>
    </html>
  );
}

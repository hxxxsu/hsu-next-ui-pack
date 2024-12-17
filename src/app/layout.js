import "./globals.css";

export const metadata = {
  title: "head - title",
  description: "head - description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

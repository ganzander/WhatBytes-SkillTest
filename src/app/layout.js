import "./globals.css";

export const metadata = {
  title: "WhatBytes-SkillTest",
  description: "Developedby Ganesh Mangla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

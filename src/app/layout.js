import "./globals.css";
import { EB_Garamond, Lato } from "next/font/google";

const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Lauro Ayestarán",
  description: "Sitio web interactivo de Lauro Ayestarán",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={garamond.className}>{children}</body>
    </html>
  );
}

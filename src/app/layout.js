import { Montserrat, Open_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/footer.css";
import "../assets/css/responsive.css";
import {Toaster} from "react-hot-toast";

// Load fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700" , "800" , "900"], // adjust as needed
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700" , "800"], // adjust as needed
  display: "swap",
});
export const metadata = {
  title: "FL Accounting – Professional Accounting, Bookkeeping & Tax Services",
  description: "Reliable accounting, bookkeeping, payroll, tax preparation, and business formation services. FL Accounting empowers small businesses with expert financial support and accurate reporting",
  keywords: [
    "accounting services",
    "bookkeeping services",
    "tax preparation",
    "payroll services",
    "business formation",
    "financial consultant",
  ],
  authors: [{ name: "FL Accounting" }],
  metadataBase: new URL("https://flaccounting.com"),
  openGraph: {
    title: "FL Accounting – Professional Accounting, Bookkeeping & Tax Services",
    description: "Reliable accounting, bookkeeping, payroll, tax preparation, and business formation services. FL Accounting empowers small businesses with expert financial support and accurate reporting",
    url: "https://flaccounting.com",
    siteName: "FL Accounting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FL Accounting – Professional Accounting, Bookkeeping & Tax Services",
    description: "Reliable accounting, bookkeeping, payroll, tax preparation, and business formation services. FL Accounting empowers small businesses with expert financial support and accurate reporting",
  },

};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        {children}
        <Toaster position="top-center"/>
      </body>
      </html>
  );
}

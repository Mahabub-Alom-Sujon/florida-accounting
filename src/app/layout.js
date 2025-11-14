import { Montserrat, Open_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  title: "Accounting | Bookkeeping | Payroll Services Florida",
  description: "We provide full range of accounting services from bookkeeping ,payroll services & tax preparation services in Florida. Call 561-939-2553 now!",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
      {children}
      </body>
      </html>
  );
}

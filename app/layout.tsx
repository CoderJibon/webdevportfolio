import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import "react-multi-carousel/lib/styles.css";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "webdev portfolio",
  description: "webdev portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        <div className="hidden md:block ">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            outerAlpha={0}
            innerScale={2}
            outerScale={2}
            innerStyle={{ backgroundColor: "white" }}
            outerStyle={{ border: "3px solid white" }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        </div>
        <ResponsiveNav></ResponsiveNav>
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

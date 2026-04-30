import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/Header";

const noteSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Todo App",
  description: "할 일을 관리해 생산성을 높이는 투두 어플리케이션",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={noteSans.className}>
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}

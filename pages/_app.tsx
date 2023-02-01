import type { AppProps } from "next/app";
import "../styles/global.css";
import { Aboreto } from "@next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-aboreto",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${aboreto.variable} font-aboreto`}>
      <Component {...pageProps} />
    </div>
  );
}

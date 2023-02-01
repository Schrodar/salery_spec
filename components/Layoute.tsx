import Head from "next/head";
import Header from "./Header";

interface LayouteProps {
  title: string;
  keywords: string;
  description: string;
}

export default function Layoute({
  title,
  children,
  keywords,
}: React.PropsWithChildren<LayouteProps>) {
  return (
    <div>
      <Head>
        <title>My page</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content="this is my description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-row bg-slate-100">{children}</main>
    </div>
  );
}

Layoute.defaultProps = {
  title: "Welcome to my app",
  keywords: "Maintenece Utö Express",
  description: "Maintenece Utö Express",
};

import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo3.png";
import { link } from "fs";

export default function Header() {
  const navLinks = [
    { name: "Service", href: "/service" },
    { name: "Lager", href: "/lager" },
    { name: "Login", href: "/login" },
  ];

  return (
    <header className="flex w-full items-center bg-gray-900 text-gray-100 shadow ">
      <div className="container mx-auto flex h-20 flex-col items-center justify-between md:flex-row">
        <Image
          className="rounded"
          src={logo}
          alt="Picture of the author"
          width={64}
          height={64}
        />
        <nav className="flex flex-wrap items-center justify-start">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="mx-5 cursor-pointer font-sans hover:text-gray-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

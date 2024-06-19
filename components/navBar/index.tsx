import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css";
import { MobileNavBar } from "./mobileNavBar";

export type LinkRoutes = { href: string; label: string };

export const NavBar = () => {
  const links: LinkRoutes[] = [
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#programa", label: "Programa" },
    { href: "#dresscode", label: "Dress code" },
    { href: "#hospedaje", label: "Hospedaje" },
    { href: "#obsequios", label: "Obsequios" },
  ];

  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image
          src={"/icons/logo.svg"}
          alt="Logo boda Michelle y Eduardo"
          className={styles.logo}
          width={50}
          height={58}
        />
      </Link>

      <ul className="text-2xl gap-x-7 xl:gap-x-12 hidden lg:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <Link className="button hidden lg:block" href="#asistencia">
        Confirma tu asistencia
      </Link>

      <MobileNavBar links={links} />
    </nav>
  );
};

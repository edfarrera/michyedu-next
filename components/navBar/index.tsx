import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css";
import { MobileNavBar } from "./mobileNavBar";

export type LinkRoutes = { href: string; label: string; icon: string };

export const NavBar = () => {
  const links: LinkRoutes[] = [
    { href: "#ubicacion", label: "Ubicación", icon: "/icons/location.svg" },
    { href: "#programa", label: "Programa", icon: "/icons/calendar.svg" },
    { href: "#dresscode", label: "Dress code", icon: "/icons/dressCode.svg" },
    { href: "#hospedaje", label: "Hospedaje", icon: "/icons/bed.svg" },
    { href: "#obsequios", label: "Obsequios", icon: "/icons/present.svg" },
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

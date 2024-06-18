import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css";

export const NavBar: React.FC = () => {
  const links = [
    { href: "ubicacion", label: "Ubicación" },
    { href: "programa", label: "Programa" },
    { href: "dresscode", label: "Dress code" },
    { href: "hospedaje", label: "Hospedaje" },
    { href: "obsequios", label: "Obsequios" },
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

      <ul className="text-2xl gap-x-8 xl:gap-x-12 hidden lg:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <Link className="button hidden lg:block" href="#asistencia">
        Confirma tu asistencia
      </Link>

      <button className="block lg:hidden">
        <Image
          src="/icons/hamburger.svg"
          alt="Abrir menu de navegación"
          width={24}
          height={24}
        />
      </button>
    </nav>
  );
};

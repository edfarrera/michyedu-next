"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LinkRoutes } from ".";
import styles from "./navBar.module.css";

export const MobileNavBar = ({ links }: { links: LinkRoutes[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleState = () => setIsOpen((prev) => !prev);

  return (
    <div className="block lg:hidden" onClick={toggleState}>
      <button>
        <Image
          src="/icons/hamburger.svg"
          alt="Abrir menu de navegación"
          width={24}
          height={24}
        />
      </button>

      <div
        className={`fixed right-0 top-[67px] overflow-hidden flex flex-col items-end bg-white rounded-bl-lg
          ${styles.shadow} ${styles.transition} ${isOpen && styles.show}`}
      >
        <ul className="text-2xl flex flex-col text-right gap-9 w-full px-[38px] pt-4 pb-9">
          {links.map(({ href, label, icon }) => (
            <li key={href} className="w-full flex justify-end gap-2">
              <Link href={href}>{label}</Link>
              <Image src={icon} alt="" width={25} height={25} />
            </li>
          ))}
        </ul>
        <Link className={`button ${styles.button}`} href="#asistencia">
          Confirma tu asistencia
        </Link>
      </div>
    </div>
  );
};

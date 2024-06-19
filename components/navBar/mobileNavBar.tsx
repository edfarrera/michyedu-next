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
      {isOpen && (
        <div className="absolute right-0 top-[69px] px-[38px] bg-white py-[20px] w-full shadow-md flex flex-col items-end overflow-hidden">
          <ul className="text-2xl flex flex-col text-right gap-7 mb-7 w-full">
            {links.map(({ href, label }) => (
              <li key={href} className="border-b-2 w-full">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <Link className="button" href="#asistencia">
            Confirma tu asistencia
          </Link>
        </div>
      )}
    </div>
  );
};

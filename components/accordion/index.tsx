"use client";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { IconHeader } from "../iconHeader";

import styles from "./accordion.module.css";

interface AccordionProps extends PropsWithChildren {
  iconSource: string;
  title: string;
}

export const Accordion = ({ title, iconSource, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className="flex w-full items-center justify-between"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IconHeader
          title={title}
          icon={iconSource}
          className="gap-x-4 text-lg"
        />
        <Image
          src="/icons/chevronDown.svg"
          className={`${
            isOpen && "-rotate-180"
          } transition-transform duration-500`}
          alt="Expand"
          width={21}
          height={21}
        />
      </button>
      <div className={`${styles.contentContainer} ${isOpen && styles.open}`}>
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </div>
  );
};

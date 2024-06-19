import Link from "next/link";
import Image from "next/image";

import styles from "./whatsappContact.module.css";

interface WhatsappContactProps {
  name: string;
  number: string;
}

export const WhatsappContact = ({ name, number }: WhatsappContactProps) => {
  return (
    <Link href={`https://wa.me/52${number}`} className={styles.container}>
      <Image
        src="/icons/whatsapp.svg"
        alt="whatsapp"
        width={27}
        height={27}
        className="mt-2"
      />
      <span>
        {name}
        <br />
        {number}
      </span>
    </Link>
  );
};

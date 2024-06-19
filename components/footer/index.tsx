import Image from "next/image";

import styles from "./footer.module.css";
import { WhatsappContact } from "../whatsappContact";

export const Footer = () => {
  return (
    <footer className={`content-grid ${styles.container}`}>
      <div className={styles.title}>
        Hecho con
        <Image src="/icons/heart.svg" alt="amor" width={40} height={40} />
        Michelle
        <Image src="/icons/ampersand.svg" alt="&" width={40} height={40} />
        Eduardo
        <div className={styles.separator}></div>
      </div>
      <p className="text-lg md:text-2xl">
        Si hay algún error en la página o con tu confirmación ponte en contacto
        con nosotros
      </p>

      <div className={styles.contactsContainer}>
        <WhatsappContact
          name="Michelle Haeberli García Sandoval"
          number="5535004310"
        />
        <WhatsappContact name="Eduardo Farrera Sartorius" number="5585683286" />
      </div>
    </footer>
  );
};

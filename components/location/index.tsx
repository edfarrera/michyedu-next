import Link from "next/link";
import Image from "next/image";

import styles from "./location.module.css";

export const Location = () => {
  return (
    <section id="ubicacion" className={`content-grid ${styles.container}`}>
      <div className={styles.subContainer}>
        <h3 className="text-[color:var(--cta)]">Ubicación</h3>
        <h2>
          Hacienda <br />
          Casa El Molino
        </h2>
        <p>Carretera Chichimequillas Km. 18, 76250 Chichimequillas, Qro.</p>
        <p>
          Teléfono: <Link href="tel:4423052577">442 305 25 77</Link>
        </p>
        <Link
          className="button"
          href="https://maps.app.goo.gl/eFVb57ynKdahoWKTA"
        >
          Ver mapa
        </Link>
        <Image
          src="/icons/leafs1.svg"
          alt=""
          width={88}
          height={182}
          className={styles.backgroundImage}
        />
      </div>

      <Image
        src="/images/el_molino.webp"
        width={550}
        height={550}
        className={styles.hero}
        alt="Hacienda casa el molino"
      />
    </section>
  );
};

import Image from "next/image";

import styles from "./dressCode.module.css";
import { IconHeader } from "../iconHeader";

export const DressCode = () => {
  return (
    <section id="dresscode" className="content-grid">
      <h3>Dress code</h3>
      <h2>Vestimenta</h2>
      <p>
        Es importante que te sientas cómod@ con tu vestimenta, pero te
        recomendamos que escojas algo elegante para que salgas fantástic@ en
        todas las fotos.
      </p>

      <div className="relative mt-7">
        <h4 className={styles.header}>
          Sábado 14 de Septiembre: <b>Vestimenta formal</b>
        </h4>
        <div className={styles.separator}></div>
      </div>

      <div className={styles.container}>
        <div className="m-auto relative">
          <Image
            width="99"
            height="69"
            src="/icons/arrow.svg"
            alt=""
            className={styles.arrow1}
          />
          <Image
            width={168}
            height={377}
            src="/images/dresscode.png"
            alt=""
            className={styles.imageShadow}
          />
          <Image
            width="99"
            height="69"
            src="/icons/arrow.svg"
            alt=""
            className={styles.arrow2}
          />
        </div>

        <ul className={`col-start-1 row-start-2 lg:row-start-1 ${styles.list}`}>
          <IconHeader icon="/icons/leaf1.svg" title="MUJERES" />
          <li>Vestido largo</li>
          <li>NO colores claros que se puedan confundir con blanco</li>
          <li>
            Te sugerimos traer tacones cómodos para caminar en pasto/piedras
          </li>
          <li className="font-semibold">Trae tus tenis para bailar</li>
        </ul>

        <ul className={styles.list}>
          <IconHeader icon="/icons/leaf1.svg" title="HOMBRES" />
          <li>Traje</li>
        </ul>
      </div>

      <div className="relative mt-4">
        <h4 className={styles.header}>
          Domingo 15 de Septiembre: <b>Vestimenta casual</b>
        </h4>
        <div className={styles.separator}></div>
      </div>

      <Image
        src="/icons/branch2.svg"
        alt=""
        width="102"
        height="156"
        className={`${styles.backgroundImage} ${styles.position1}`}
      />

      <Image
        src="/icons/branch5.svg"
        alt=""
        width="150"
        height="200"
        className={`${styles.backgroundImage} ${styles.position2}`}
      />
    </section>
  );
};

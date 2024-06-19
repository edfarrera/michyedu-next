import Image from "next/image";

import styles from "./dressCode.module.css";

export const DressCode = () => {
  return (
    <section id="dresscode" className="content-grid">
      <h3>Dress code</h3>
      <h2>Vestimenta</h2>
      <p>
        Es importante que te sientas cómodo con tu vestimenta, pero te
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
        <Image
          width={168}
          height={377}
          src="/images/vestimenta.png"
          alt=""
          className="m-auto"
        />

        <ul className={`col-start-1 row-start-2 lg:row-start-1 ${styles.list}`}>
          <Image
            src="/icons/leaf1.svg"
            width={40}
            height={40}
            alt=""
            className="inline"
          />
          <h4>MUJERES</h4>
          <li>Vestido largo</li>
          <li>NO colores claros que se puedan confundir con blanco/beige</li>
          <li>
            Te sugerimos traer tacones cómodos para caminar en pasto/piedras
          </li>
          <li>Trae tus tenis para bailar</li>
        </ul>

        <ul className={styles.list}>
          <Image
            src="/icons/leaf1.svg"
            width={40}
            height={40}
            alt=""
            className="inline"
          />
          <h4>HOMBRES</h4>
          <li>Traje o esmoquin</li>
        </ul>
      </div>

      <div className="relative">
        <h4 className={styles.header}>
          Domingo 15 de Septiembre: <b>Vestimenta casual</b>
        </h4>
        <div className={styles.separator}></div>
      </div>
    </section>
  );
};
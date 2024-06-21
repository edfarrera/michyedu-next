import Image from "next/image";

import styles from "./tips.module.css";

const tips = [
  {
    image: "/images/flor-1.png",
    text: "Si nos acompañas en la ceremonia simbólica, por favor llega 10 min antes de las 4:00 pm para escuchar las indicaciones de los rituales.",
  },
  {
    image: "/images/flor-3.png",
    text: "La hacienda cuenta con Valet parking, pero te recomendamos llegar en Uber, especialmente si vas a tomar.",
  },
  {
    image: "/images/flor-2.png",
    text: "Considera algo para abrigarte ya que en la noche puede hacer frío o haber mucho viento.",
  },
];

export const Tips = () => {
  return (
    <section id="tips" className="content-grid">
      <h3>Disfruta más la boda</h3>
      <h2>Tips</h2>
      <div className={styles.container}>
        {tips.map(({ image, text }) => (
          <>
            <Image src={image} alt="" width={45} height={45} />
            <p className="max-w-[960px]">{text}</p>
          </>
        ))}
      </div>
    </section>
  );
};

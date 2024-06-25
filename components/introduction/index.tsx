import Image from "next/image";
import { SlideShow } from "../slideShow";
import styles from "./introduction.module.css";

export const Introduction = () => {
  return (
    <section>
      <SlideShow />
      <div className={styles.inspiration}>
        <h1 className="lyrics">
          “Baby I&apos;m yours, until the sun no longer shines...”
        </h1>
        <Image
          src="/icons/leaf2.svg"
          alt=""
          width={250}
          height={250}
          className={styles.backgroundImage}
        />
      </div>
    </section>
  );
};

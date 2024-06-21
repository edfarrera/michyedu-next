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
      </div>
    </section>
  );
};

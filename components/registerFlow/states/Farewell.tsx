import { useEffect } from "react";
import styles from "../registerFlow.module.css";

interface FarewellProps {
  assistance: "attending" | "absent";
}

export const Farewell: React.FC<FarewellProps> = ({ assistance }) => {
  useEffect(() => {
    const element = document.getElementById("asistencia");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <h2 className="text-white">
        {assistance === "attending"
          ? "¡Te esperamos!"
          : "Esperamos verte pronto"}
      </h2>

      <ul className={`${styles.list} my-5`}>
        {assistance === "attending" ? (
          <li>
            Puedes cambiar tu respuesta hasta el <b>30 de agosto.</b>
          </li>
        ) : (
          <li>
            Confirmaste que <b>no asistirás</b>, puedes cambiar tu respuesta
            hasta el <b>30 de agosto.</b>
          </li>
        )}
      </ul>

      <h3 className="lyrics">
        “Yours until the mountain crumbles to the sea, in other words, until
        eternity.”
      </h3>
    </>
  );
};

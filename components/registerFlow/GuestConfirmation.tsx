import { useState } from "react";
import { GuestObject } from ".";

import styles from "./registerFlow.module.css";

interface GuestConfirmationProps {
  guests: GuestObject[];
}

export const GuestConfirmation: React.FC<GuestConfirmationProps> = ({
  guests,
}) => {
  const [confirmations, setConfirmations] = useState<boolean[]>([]);

  const changeConfirmation = (index: number, checked: boolean) => {
    setConfirmations((prev) => {
      let newValue = [...prev];
      newValue[index] = checked;
      return newValue;
    });
  };

  return (
    <div className={`${styles.inputContainer} justify-items-center`}>
      <p className="font-semibold">
        ¡Hola!, por favor confirma quiénes asistirán a la boda.
      </p>
      {guests.map(({ guest, confirmation }, index) => (
        <div key={guest} className="flex gap-3 w-full">
          <input
            type="checkbox"
            className="w-5"
            checked={confirmations[index]}
            onChange={(value) =>
              changeConfirmation(index, value.target.checked)
            }
          />
          <p className="flex-1">{guest}</p>
        </div>
      ))}

      <textarea
        className="w-full text-lg p-2 rounded-xl  outline-blue-500 "
        placeholder="Déjanos un mensaje, o haznos saber si tienes alguna restricción alimenticia."
        rows={4}
        maxLength={300}
      />
      <button className={`button mt-3 ${styles.button}`}>
        Enviar respuesta
      </button>
    </div>
  );
};

import { FormEvent, useState } from "react";
import { GuestObject } from "@/components/registerFlow";

import styles from "@/components/registerFlow/registerFlow.module.css";

interface GuestConfirmationProps {
  phone: string;
  guests: GuestObject[];
  setConfirmation: (confirmation: "attending" | "absent") => void;
}

export const GuestConfirmation: React.FC<GuestConfirmationProps> = ({
  phone,
  guests,
  setConfirmation,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmations, setConfirmations] = useState<boolean[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    const confirmation = confirmations.includes(true);
    setConfirmation(confirmation ? "attending" : "absent");

    setIsSubmitting(false);
  };

  const changeConfirmation = (index: number, checked: boolean) => {
    setConfirmations((prev) => {
      let newValue = [...prev];
      newValue[index] = checked;
      return newValue;
    });
  };

  return (
    <form
      className={`${styles.inputContainer} justify-items-center`}
      onSubmit={handleSubmit}
    >
      <p className="font-semibold mb-4">
        ¡Hola!, por favor confirma quiénes asistirán a la boda.
      </p>
      {guests.map(({ guest, confirmation }, index) => (
        <div key={guest} className="flex gap-3 w-full">
          <input
            id={`checkbox-${index}`}
            type="checkbox"
            className="w-5"
            checked={confirmations[index]}
            onChange={(value) =>
              changeConfirmation(index, value.target.checked)
            }
          />
          <label htmlFor={`checkbox-${index}`} className="flex-1">
            {guest}
          </label>
        </div>
      ))}

      <textarea
        className="w-full text-lg p-2 rounded-xl  outline-blue-500 mt-8"
        placeholder="Déjanos un mensaje, o haznos saber si tienes alguna restricción alimenticia."
        rows={4}
        maxLength={300}
      />
      <button
        type="submit"
        className={`button mt-3 ${styles.button}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "...Enviando" : "Enviar respuesta"}
      </button>
    </form>
  );
};

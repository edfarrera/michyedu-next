import { FormEvent, useEffect, useRef, useState } from "react";

import styles from "@/components/registerFlow/registerFlow.module.css";
import { somethingWentWrongError } from "..";
import { sendConfirmations } from "@/actions/sendConfirmations";

interface GuestConfirmationProps {
  phone: string;
  guests: string[];
  initialConfirmations: boolean[];
  setAssistance: (confirmation: "attending" | "absent") => void;
}

export const GuestConfirmation: React.FC<GuestConfirmationProps> = ({
  phone,
  guests,
  initialConfirmations,
  setAssistance,
}) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmations, setConfirmations] =
    useState<(boolean | undefined)[]>(initialConfirmations);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(undefined);
    setIsSubmitting(true);

    try {
      let formatedConfirmations: (boolean | null)[] = confirmations.map(
        (value, index) => {
          return value ?? (guests[index] ? false : null);
        }
      ); // Set false for all guests that didnt checked

      await sendConfirmations(
        phone,
        formatedConfirmations,
        messageRef.current?.value
      );
    } catch {
      setError(somethingWentWrongError);
    } finally {
      setIsSubmitting(false);
    }

    const confirmation = confirmations.includes(true);
    setAssistance(confirmation ? "attending" : "absent");

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
      <p className="font-semibold mb-3">
        ¡Hola!, por favor selecciona quiénes asistirán a la boda.
      </p>
      {guests.map(
        (guest, index) =>
          guest && (
            <div key={guest} className="flex gap-3 w-full mb-3 ">
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                className="w-5"
                checked={confirmations[index]}
                onChange={({ target: { checked } }) =>
                  changeConfirmation(index, checked)
                }
              />
              <label htmlFor={`checkbox-${index}`} className="flex-1">
                {guest}
              </label>
            </div>
          )
      )}

      <textarea
        ref={messageRef}
        className="w-full text-lg p-2 rounded-xl  outline-blue-500"
        placeholder="Déjanos un mensaje, o haznos saber si tienes alguna restricción alimenticia."
        rows={4}
        maxLength={300}
      />
      {error && <span className="text-red-600 text-sm">{error}</span>}
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

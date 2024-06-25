import { FormEvent, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";

import { searchGuest } from "@/actions/searchGuests";
import { missingError, somethingWentWrongError } from "..";

import styles from "../registerFlow.module.css";
import "react-international-phone/style.css";

interface PhoneVerificationProps {
  setPhone: (phone: string) => void;
  setGuests: (guests: string[]) => void;
  setConfirmations: (confirmations: boolean[]) => void;
  setInitialMessage: (message?: string) => void;
}

export const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  setPhone,
  setGuests,
  setConfirmations,
  setInitialMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNumber = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(undefined);
    try {
      let phone = inputRef.current?.value
        .replace("+52", "")
        .replaceAll(" ", "");
      if (!phone) return;

      setIsSubmitting(true);
      const { guests, confirmations, message } =
        (await searchGuest(phone)) || {};

      if (!guests || !confirmations) return setError(missingError);

      setGuests(guests);
      setConfirmations(confirmations);
      setInitialMessage(message);
      setPhone(phone);
    } catch {
      setError(somethingWentWrongError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.inputContainer} onSubmit={submitNumber}>
      <p className="font-semibold">
        Ingresa tu teléfono celular y da click en buscar
      </p>
      {error && <span className="text-red-600 text-sm">{error}</span>}
      <div className="flex gap-4 flex-wrap">
        <PhoneInput
          placeholder="Teléfono celular"
          defaultCountry="mx"
          preferredCountries={["mx", "us", "de", "es", "pl"]}
          forceDialCode
          disableCountryGuess
          historySaveDebounceMS={500}
          inputRef={inputRef}
          className={`${styles.phoneInput} ${error && styles.phoneError}`}
        />
        <button
          type="submit"
          className={`button ${styles.button}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "...Buscando" : "Buscar"}
        </button>
      </div>
    </form>
  );
};

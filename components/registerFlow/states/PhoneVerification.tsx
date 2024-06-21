import { FormEvent, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";

import { searchGuest } from "@/actions/searchGuests";
import { GuestObject } from "@/components/registerFlow";

import styles from "../registerFlow.module.css";
import "react-international-phone/style.css";

interface PhoneVerificationProps {
  setGuests: (guests: GuestObject[]) => void;
  setPhone: (phone: string) => void;
}

export const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  setGuests,
  setPhone,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitNumber = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(false);
    try {
      let phone = inputRef.current?.value
        .replace("+52", "")
        .replaceAll(" ", "");
      if (!phone) return;

      setIsSubmitting(true);
      const guests = await searchGuest(phone);

      if (!guests) return setError(true);

      setGuests(guests);
      setPhone(phone);
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.inputContainer} onSubmit={submitNumber}>
      <p className="font-semibold">
        Ingresa tu teléfono celular y da click en buscar
      </p>
      {error && (
        <span className="text-red-600 text-sm">
          Parece que no encontramos este número, por favor intenta con otro o
          ponte en contacto con nosotros
        </span>
      )}
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

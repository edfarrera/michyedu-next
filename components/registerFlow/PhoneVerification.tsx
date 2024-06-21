import { useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";

import styles from "./registerFlow.module.css";
import "react-international-phone/style.css";
import { searchGuest } from "@/actions/searchGuests";
import { GuestObject } from ".";

interface PhoneVerificationProps {
  setGuests: (guests: GuestObject[]) => void;
}

export const PhoneVerification: React.FC<PhoneVerificationProps> = ({
  setGuests,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const submitNumber = async () => {
    setError(false);
    let phone = inputRef.current?.value.replace("+52", "").replaceAll(" ", "");
    if (!phone) return;

    const guests = await searchGuest(phone);

    if (!guests) return setError(true);

    setGuests(guests);
  };

  return (
    <div className={styles.inputContainer}>
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
        <button className={`button ${styles.button}`} onClick={submitNumber}>
          Buscar
        </button>
      </div>
    </div>
  );
};

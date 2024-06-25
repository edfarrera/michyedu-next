"use client";
import { useState } from "react";
import { PhoneVerification } from "./states/PhoneVerification";

import styles from "./registerFlow.module.css";
import { GuestConfirmation } from "./states/GuestConfirmation";
import { Farewell } from "./states/Farewell";

export const missingError =
  "Parece que no encontramos este número, por favor intenta con uno diferente o ponte en contacto con nosotros.";
export const somethingWentWrongError =
  "Oops!... parece que algo salio mal, por favor vuelve a intentarlo más tarde o ponte en contacto con nosotros.";

export const RegisterFlow = () => {
  const [phone, setPhone] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const [confirmations, setConfirmations] = useState<boolean[]>([]);
  const [initialMessage, setInitialMessage] = useState<string>();
  const [assistance, setAssistance] = useState<"attending" | "absent">();

  return (
    <section
      id="asistencia"
      className={`content-grid ${styles.container}`}
      style={{
        backgroundImage: `url(${
          assistance ? "/images/promise.jpeg" : "/images/ring_maya.JPG"
        })`,
      }}
    >
      <h3>Registra tu respuesta</h3>
      {assistance ? (
        <Farewell assistance={assistance} />
      ) : (
        <>
          <h2 className="text-white">Asistencia</h2>

          <ul className={styles.list}>
            <li>
              Confirma tu asistencia hasta el <b>30 de agosto</b>
            </li>
            <li>
              Esta es una celebración sólo para adultos, <b>no niños</b>
            </li>
          </ul>

          {phone && guests.length > 0 ? (
            <GuestConfirmation
              phone={phone}
              guests={guests}
              initialConfirmations={confirmations}
              setAssistance={setAssistance}
              initialMessage={initialMessage}
            />
          ) : (
            <PhoneVerification
              setPhone={setPhone}
              setGuests={setGuests}
              setConfirmations={setConfirmations}
              setInitialMessage={setInitialMessage}
            />
          )}
        </>
      )}
    </section>
  );
};

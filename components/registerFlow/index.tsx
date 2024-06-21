"use client";
import { useState } from "react";
import { PhoneVerification } from "./states/PhoneVerification";

import styles from "./registerFlow.module.css";
import { GuestConfirmation } from "./states/GuestConfirmation";
import { Farewell } from "./states/Farewell";

export type GuestObject = { guest: string; confirmation: boolean };

export const RegisterFlow = () => {
  const [phone, setPhone] = useState<string>("");
  const [guests, setGuests] = useState<GuestObject[]>([]);
  const [confirmation, setConfirmation] = useState<"attending" | "absent">();

  return (
    <section
      id="asistencia"
      className={`content-grid ${styles.container}`}
      style={{
        backgroundImage: `url(${
          confirmation ? "/images/promise.jpeg" : "/images/ring_maya.JPG"
        })`,
      }}
    >
      <h3>Registra tu respuesta</h3>
      {confirmation ? (
        <Farewell confirmation={confirmation} />
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
              setConfirmation={setConfirmation}
            />
          ) : (
            <PhoneVerification setGuests={setGuests} setPhone={setPhone} />
          )}
        </>
      )}
    </section>
  );
};

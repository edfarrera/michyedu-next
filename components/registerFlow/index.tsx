"use client";
import { useState } from "react";
import { PhoneVerification } from "./PhoneVerification";

import styles from "./registerFlow.module.css";
import { GuestConfirmation } from "./GuestConfirmation";

export type GuestObject = { guest: string; confirmation: boolean };

export const RegisterFlow = () => {
  const [guests, setGuests] = useState<GuestObject[]>([]);

  return (
    <section id="asistencia" className={`content-grid ${styles.container}`}>
      <h3>Registra tu respuesta</h3>
      <h2 className="text-white">Asistencia</h2>

      <ul className={styles.list}>
        <li>
          Confirma tu asistencia hasta el <b>30 de agosto</b>
        </li>
        <li>
          Esta es una celebración sólo para adultos, <b>no niños</b>
        </li>
      </ul>

      {guests.length > 0 ? (
        <GuestConfirmation guests={guests} />
      ) : (
        <PhoneVerification setGuests={setGuests} />
      )}
    </section>
  );
};

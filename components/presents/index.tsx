import Image from "next/image";
import { Accordion } from "../accordion";

import styles from "./presents.module.css";

const accountDetails = [
  { fieldName: "BENEFICIARIO", fieldData: "Michelle Haeberli García Sandoval" },
  { fieldName: "BANCO", fieldData: "BBVA" },
  { fieldName: "CUENTA", fieldData: "2626398448" },
  { fieldName: "CLABE", fieldData: "012180026263984486" },
  { fieldName: "CONCEPTO", fieldData: "Boda/Luna de miel + Tu nombre" },
];

export const Presents = () => {
  return (
    <section
      id="obsequios"
      className="content-grid bg-[var(--orange-background)]"
    >
      <h3>Obsequios</h3>
      <h2>Mesa de regalos</h2>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className="mb-7">
            Gracias por ser parte de nuestra boda y llenarla de recuerdos
            hermosos. Valoramos mucho su presencia, sonrisas y amor. Si desean
            hacer un regalo, les sugerimos una transferencia con detalles
            específicos como un aporte para nuestro viaje de luna de miel o
            nuestra casa.
          </p>
          <p>
            ¡Compartir nuestra felicidad con ustedes es el mejor regalo que
            podríamos recibir!
          </p>
        </div>

        <Image
          width={500}
          height={376}
          src="/images/maya_duque.png"
          alt=""
          className={styles.image}
        />

        <div className={styles.accordionContainer}>
          <Accordion
            title="En effectivo el día de la boda"
            iconSource="/images/branch1.png"
          >
            <p>
              No olvides traerlo en un sobre con tu nombre y entregarlo
              directamente a los novios, muchas gracias
            </p>
          </Accordion>
          <Accordion
            title="Ver detalle de la cuenta"
            iconSource="/images/flor-4.png"
          >
            <div className="grid gap-y-3">
              {accountDetails.map(({ fieldName, fieldData }) => (
                <p key={fieldName}>
                  {fieldName}:<br />
                  <b>{fieldData}</b>
                </p>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

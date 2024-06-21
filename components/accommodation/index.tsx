import { HotelCard } from "../hotelCard";

import styles from "./accommodation.module.css";

const hotels = [
  {
    name: "AC Hotel by Marriott Queretaro Antea",
    journeyTime: 28,
    address: "Av. Antea 1050, Jurica, 76127 Santiago de Querétaro, Qro.",
    phone: "442 483 0812",
    reservationLink:
      "https://www.marriott.com/es/event-reservations/reservation-link.mi?id=1717695987793&key=GRP&app=resvlink",
    mapsLink: "https://maps.app.goo.gl/uaLMiuSGVVWNqRge9",
    image: "/images/ac_hotel.png",
    imageAlt: "AC Hotel",
  },
  {
    name: "Fairfield Inn",
    journeyTime: 26,
    address:
      "Ave Paseo De La República Y Fray Junípero Serra, 76127 Juriquilla, Qro.",
    phone: "442 500 9008",
    reservationLink:
      "https://www.marriott.com/es/event-reservations/reservation-link.mi?id=1717695987793&key=GRP&app=resvlink",
    mapsLink: "https://maps.app.goo.gl/ynEFKN4eGiHyn8SF9",
    image: "/images/fairfield_inn.png",
    imageAlt: "Fairfield Inn",
  },
];

export const Accommodation = () => {
  return (
    <section
      id="hospedaje"
      className="content-grid bg-[color:var(--blue-background)]"
    >
      <h3>Hospedaje</h3>
      <h2>Hoteles recomendados</h2>

      <p>
        Los siguientes hoteles son los más cercanos a la hacienda e incluyen
        transporte al reservar usando el link siguiente.
      </p>

      <div className={styles.container}>
        {hotels.map((props) => (
          <HotelCard key={props.phone} {...props} />
        ))}
      </div>
    </section>
  );
};

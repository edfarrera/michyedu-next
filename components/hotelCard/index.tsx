import Link from "next/link";
import Image from "next/image";

import styles from "./hotelCard.module.css";

interface HotelCardProps {
  name: string;
  journeyTime: number;
  address: string;
  phone: string;
  reservationLink: string;
  mapsLink: string;
  image: string;
  imageAlt: string;
}

export const HotelCard = ({
  name,
  journeyTime,
  address,
  phone,
  reservationLink,
  mapsLink,
  image,
  imageAlt,
}: HotelCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h5 className="text-2xl font-semibold text-[var(--cta)] mb-1">
          {name}
        </h5>
        <p>
          Tiempo estimado de recorrido a la boda: <b>{journeyTime} min.</b>
        </p>

        <span>
          <b>Dirección:</b>
          <br />
          <Image
            src="/icons/location.svg"
            alt=""
            width={15}
            height={15}
            className="inline align-middle mr-1 brightness-0"
          />
          {address}
        </span>

        <span>
          <b>Teléfono:</b>
          <br />
          <Image
            src="/icons/phone.svg"
            alt=""
            width={15}
            height={15}
            className="inline align-middle mr-1"
          />
          <Link href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</Link>
        </span>

        <span>
          <b>Reserva: </b>
          <Link href={reservationLink} target="_blank" className="underline">
            Aqui
          </Link>
        </span>

        <Link
          className="button !w-full md:!w-fit"
          href={mapsLink}
          target="_blank"
        >
          Ver mapa
        </Link>
      </div>
      <Image
        src={image}
        alt={imageAlt}
        className={styles.image}
        width={280}
        height={280}
      />
    </div>
  );
};

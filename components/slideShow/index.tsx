"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./slideShow.module.css";

import "swiper/css";
import "swiper/css/pagination";

export const SlideShow: React.FC = () => {
  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={styles.container}
    >
      <SwiperSlide className={styles.slide}>
        <Image src="/images/slide1.webp" alt="" fill priority />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src="/images/slide2.jpg" alt="" fill />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src="/images/slide3.jpg" alt="" fill />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Image src="/images/slide4.jpg" alt="" fill />
      </SwiperSlide>

      <div className={styles.subContainer}>
        <Image
          src="/icons/big_logo.svg"
          className={styles.logo}
          width={255}
          height={99}
          alt="Michelle & Eduardo"
        />
        <Image
          src="/icons/heart.svg"
          className="hidden lg:block"
          width={40}
          height={40}
          alt=""
        />
        <div>
          <p className="text-[24px]/[36px] text-center mx-24 sm:mx-0">
            Acompáñanos en Nuestra Boda el
          </p>
          <span className="text-[45px]/[75px] sm:text-[50px] font-semibold">
            14 . 09 . 2024
          </span>
        </div>
      </div>
    </Swiper>
  );
};

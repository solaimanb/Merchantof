'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VerticalBanner from './VerticalBanner';

interface SwiperBannerProps {
  banners: {
    imageUrl: string;
    linkUrl: string;
    altText: string;
    title: string;
  }[];
}

const SwiperBanner: React.FC<SwiperBannerProps> = ({ banners }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      loop={true}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <VerticalBanner
            imageUrl={banner.imageUrl}
            linkUrl={banner.linkUrl}
            altText={banner.altText}
            title={banner.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBanner;

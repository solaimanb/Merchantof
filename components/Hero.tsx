'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const slidesData = [
  {
    id: 1,
    imageUrl: 'https://nextui.org/images/card-example-1.jpeg',
  },
  {
    id: 2,
    imageUrl: 'https://nextui.org/images/card-example-1.jpeg',
  },
  {
    id: 3,
    imageUrl: 'https://nextui.org/images/card-example-1.jpeg',
  },
  {
    id: 4,
    imageUrl: 'https://nextui.org/images/card-example-1.jpeg',
  },
];

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
<<<<<<< HEAD
      className="mt-2 bg-gray-300"
=======
      className="bg-gray-300"
>>>>>>> f6563ac (re-initilize the repo)
    >
      {slidesData.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex items-center justify-center"
        >
          <div className="text-center h-[50vh] rounded-lg">
            <Image
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              width={800}
              height={400}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;

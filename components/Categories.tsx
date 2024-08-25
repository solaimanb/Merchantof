'use client';

import { Button } from '@nextui-org/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from './ui/CategoryCard';

const categories = [
  {
    name: 'Technology',
    imageUrl:
      'https://c1.neweggimages.com/productimage/nb300/A29PD2406240VPI14C0.jpg',
    linkUrl: '/categories/technology',
  },
  {
    name: 'Lifestyle',
    imageUrl:
      'https://promotions.newegg.com/nepro/24-0282/Category_Circle/Sports-and-Outdoors.png',
    linkUrl: '/categories/lifestyle',
  },
  {
    name: 'Business',
    imageUrl:
      'https://promotions.newegg.com/nepro/24-0282/Category_Circle/Drones.png',
    linkUrl: '/categories/business',
  },
  {
    name: 'Smart Home',
    imageUrl:
      'https://promotions.newegg.com/nepro/24-0282/Category_Circle/Smart-Home.png',
    linkUrl: '/categories/smart-home',
  },
  {
    name: 'TV',
    imageUrl:
      'https://promotions.newegg.com/nepro/24-0282/Category_Circle/TV.png',
    linkUrl: '/categories/tv',
  },
  {
    name: 'Software',
    imageUrl:
      'https://promotions.newegg.com/nepro/24-0282/Category_Circle/Software.png',
    linkUrl: '/categories/software',
  },
  {
    name: 'Gaming',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/BM14S2305170560V714.jpg',
    linkUrl: '/categories/gaming',
  },
  {
    name: 'Health',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/B35VS2308080FYROC6A.jpg',
    linkUrl: '/categories/health',
  },
  {
    name: 'Books',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/0TH-000U-00J17-01.jpg',
    linkUrl: '/categories/books',
  },
  {
    name: 'Home Appliances',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/A3BGD2402071A46PW58.jpg',
    linkUrl: '/categories/home-appliances',
  },
  {
    name: 'Outdoor',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/96-378-160-S01.jpg',
    linkUrl: '/categories/outdoor',
  },
  {
    name: 'Automotive',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/AFEHD24040615N7T36B.jpg',
    linkUrl: '/categories/automotive',
  },
  {
    name: 'Fashion',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/0TH-000U-00J17-01.jpg',
    linkUrl: '/categories/fashion',
  },
  {
    name: 'Kitchen',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/96-705-401-09.jpg',
    linkUrl: '/categories/kitchen',
  },
  {
    name: 'Travel',
    imageUrl:
      'https://c1.neweggimages.com/nobgproductcompressall300/AA0SD2405080VHXB3C6.jpg',
    linkUrl: '/categories/travel',
  },
];

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  const isPrev = direction === 'prev';
  return (
    <Button
      isIconOnly
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow bg-white ${
        isPrev ? 'right-12 ml-1' : 'right-0 mr-1'
      }`}
      aria-label={isPrev ? 'Previous' : 'Next'}
      onClick={onClick}
    >
      {isPrev ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </Button>
  );
};

const Categories: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="my-10 mx-auto">
      <div className="relative">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>

        <NavigationButton
          direction="prev"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
        <NavigationButton
          direction="next"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={2}
        modules={[Navigation]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="shadow-md border rounded-lg py-2">
            <CategoryCard
              name={category.name}
              imageUrl={category.imageUrl}
              linkUrl={category.linkUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;

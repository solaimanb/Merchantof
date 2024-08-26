'use client';

import { useTheme } from '@/providers/ThemeProvider';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../ui/ProductCard';

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

interface ProductPresetProps {
  title: string;
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$59.99',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/B7S8S2210040JPJXZD5.jpg',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Smartwatch',
    category: 'Wearables',
    price: '$129.99',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/11-854-133-01.jpg',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: '$39.99',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/68-105-274-V01.jpg',
    rating: 4.3,
    reviews: 150,
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: '$79.99',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/19-113-845-01.jpg',
    rating: 4.7,
    reviews: 75,
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: '$79.99',
    imageUrl:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/74-103-752-05.jpg',
    rating: 4.7,
    reviews: 75,
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: '$79.99',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/26-627-147-02.png',
    rating: 4.7,
    reviews: 75,
  },
];

const NavigationButton: React.FC<{
  direction: 'prev' | 'next';
  isDark: boolean;
}> = ({ direction, isDark }) => {
  const isPrev = direction === 'prev';
  const positionClass = isPrev ? 'left-0 ml-1' : 'right-0 mr-1';
  const bgColor = isDark ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <button
      className={`custom-${direction} absolute top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full shadow-lg ${positionClass} ${bgColor}`}
      aria-label={isPrev ? 'Previous' : 'Next'}
    >
      {isPrev ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};

const ProductPresetI: React.FC<ProductPresetProps> = ({ title }) => {
  const { isDark } = useTheme();

  return (
    <section className="my-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      {products.length > 5 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Link
                href={`/category/${encodeURIComponent(
                  product.category.toLowerCase()
                )}/${encodeURIComponent(product.name.toLowerCase())}`}
                passHref
              >
                <div className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <NavigationButton direction="prev" isDark={isDark} />
          <NavigationButton direction="next" isDark={isDark} />
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/category/${encodeURIComponent(
                product.category.toLowerCase()
              )}/${encodeURIComponent(product.name.toLowerCase())}`}
              passHref
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductPresetI;

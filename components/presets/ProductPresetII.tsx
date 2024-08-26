'use client';

import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import ProductCard from '../ui/ProductCard';

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  url: string;
}

const products: ProductData[] = [
  {
    id: 1,
    name: 'Eco-Friendly Water Bottle',
    category: 'Outdoor Gear',
    price: '$20.00',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/23-201-133-01.jpg',
    rating: 4.5,
    reviews: 10,
    url: 'https://example.com/product/eco-friendly-water-bottle',
  },
  {
    id: 2,
    name: 'Compact Digital Camera',
    category: 'Photography',
    price: '$35.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/A4RE_131715372370514432JcnRuJwIIS.jpg',
    rating: 4.0,
    reviews: 8,
    url: 'https://example.com/product/compact-digital-camera',
  },
  {
    id: 3,
    name: 'Wireless Charging Pad',
    category: 'Accessories',
    price: '$50.00',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/A1DSS211101fi4Yp.jpg',
    rating: 5.0,
    reviews: 12,
    url: 'https://example.com/product/wireless-charging-pad',
  },
  {
    id: 4,
    name: 'Bluetooth Headphones',
    category: 'Audio',
    price: '$25.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/BK19D23031518RL8O70.jpg',
    rating: 3.5,
    reviews: 6,
    url: 'https://example.com/product/bluetooth-headphones',
  },
  {
    id: 5,
    name: 'Smart Home Thermostat',
    category: 'Home Automation',
    price: '$15.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/BRYRS2405100H7XGH11.jpg',
    rating: 4.2,
    reviews: 9,
    url: 'https://example.com/product/smart-home-thermostat',
  },
  {
    id: 6,
    name: '4K Ultra HD Monitor',
    category: 'Computers',
    price: '$45.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/A0ZXD23111804V09M7A.jpg',
    rating: 4.8,
    reviews: 15,
    url: 'https://example.com/product/4k-ultra-hd-monitor',
  },
  {
    id: 7,
    name: 'Ergonomic Office Chair',
    category: 'Furniture',
    price: '$30.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/AZUES2406250GIO9Z1F.jpg',
    rating: 4.1,
    reviews: 7,
    url: 'https://example.com/product/ergonomic-office-chair',
  },
  {
    id: 8,
    name: 'Smartwatch Series 6',
    category: 'Wearables',
    price: '$22.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/14P-006A-00028-S04.jpg',
    rating: 4.7,
    reviews: 11,
    url: 'https://example.com/product/smartwatch-series-6',
  },
  {
    id: 9,
    name: 'High-Speed External SSD',
    category: 'Storage',
    price: '$40.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/BSK6S24060504PP9N1A.jpg',
    rating: 4.3,
    reviews: 14,
    url: 'https://example.com/product/high-speed-external-ssd',
  },
  {
    id: 10,
    name: 'Portable Air Purifier',
    category: 'Home Appliances',
    price: '$55.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/AGDFS2302150OCCYH91.jpg',
    rating: 4.9,
    reviews: 16,
    url: 'https://example.com/product/portable-air-purifier',
  },
  {
    id: 11,
    name: 'Digital Kitchen Scale',
    category: 'Kitchen Appliances',
    price: '$60.00',
    imageUrl: 'https://c1.neweggimages.com/ProductImage/1A7-0019-00031-01.jpg',
    rating: 5.0,
    reviews: 18,
    url: 'https://example.com/product/digital-kitchen-scale',
  },
  {
    id: 12,
    name: 'Fitness Tracker Band',
    category: 'Health & Fitness',
    price: '$18.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/0XM-00JK-00075-S01.jpg',
    rating: 3.8,
    reviews: 5,
    url: 'https://example.com/product/fitness-tracker-band',
  },
  {
    id: 13,
    name: 'Smart Doorbell Camera',
    category: 'Smart Home',
    price: '$48.00',
    imageUrl:
      'https://c1.neweggimages.com/ProductImage/A1DSS2304070HU20T64.jpg',
    rating: 4.6,
    reviews: 13,
    url: 'https://example.com/product/smart-doorbell-camera',
  },
];

interface ProductPresetProps {
  title: string;
}

const ProductPresetII: React.FC<ProductPresetProps> = ({ title }) => {
  const [visibleProducts, setVisibleProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const loadMoreProducts = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const newProducts = products.slice(startIndex, startIndex + itemsPerPage);
      setVisibleProducts((prevProducts) => [...prevProducts, ...newProducts]);
    };

    loadMoreProducts();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="my-10">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} isPrice />
        ))}
      </div>

      {currentPage * itemsPerPage < products.length && (
        <div className="mt-10 flex justify-center">
          <Button
            onClick={handleLoadMore}
            className="bg-gray-950 text-white py-2 px-8 font-semibold rounded hover:bg-gray-900"
          >
            See More Products
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductPresetII;

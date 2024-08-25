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
    name: 'Product 1',
    category: 'Category 1',
    price: '$20.00',
    imageUrl: '/path/to/image1.jpg',
    rating: 4.5,
    reviews: 10,
    url: 'https://somewhere.com',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: '$35.00',
    imageUrl: '/path/to/image2.jpg',
    rating: 4.0,
    reviews: 8,
    url: 'https://somewhere.com',
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 3',
    price: '$50.00',
    imageUrl: '/path/to/image3.jpg',
    rating: 5.0,
    reviews: 12,
    url: 'https://somewhere.com',
  },
  {
    id: 4,
    name: 'Product 4',
    category: 'Category 4',
    price: '$25.00',
    imageUrl: '/path/to/image4.jpg',
    rating: 3.5,
    reviews: 6,
    url: 'https://somewhere.com',
  },
  {
    id: 5,
    name: 'Product 5',
    category: 'Category 5',
    price: '$15.00',
    imageUrl: '/path/to/image5.jpg',
    rating: 4.2,
    reviews: 9,
    url: 'https://somewhere.com',
  },
  {
    id: 6,
    name: 'Product 6',
    category: 'Category 6',
    price: '$45.00',
    imageUrl: '/path/to/image6.jpg',
    rating: 4.8,
    reviews: 15,
    url: 'https://somewhere.com',
  },
  {
    id: 7,
    name: 'Product 7',
    category: 'Category 7',
    price: '$30.00',
    imageUrl: '/path/to/image7.jpg',
    rating: 4.1,
    reviews: 7,
    url: 'https://somewhere.com',
  },
  {
    id: 8,
    name: 'Product 8',
    category: 'Category 8',
    price: '$22.00',
    imageUrl: '/path/to/image8.jpg',
    rating: 4.7,
    reviews: 11,
    url: 'https://somewhere.com',
  },
  {
    id: 9,
    name: 'Product 9',
    category: 'Category 9',
    price: '$40.00',
    imageUrl: '/path/to/image9.jpg',
    rating: 4.3,
    reviews: 14,
    url: 'https://somewhere.com',
  },
  {
    id: 10,
    name: 'Product 10',
    category: 'Category 10',
    price: '$55.00',
    imageUrl: '/path/to/image10.jpg',
    rating: 4.9,
    reviews: 16,
    url: 'https://somewhere.com',
  },
  {
    id: 11,
    name: 'Product 11',
    category: 'Category 11',
    price: '$60.00',
    imageUrl: '/path/to/image11.jpg',
    rating: 5.0,
    reviews: 18,
    url: 'https://somewhere.com',
  },
  {
    id: 12,
    name: 'Product 12',
    category: 'Category 12',
    price: '$18.00',
    imageUrl: '/path/to/image12.jpg',
    rating: 3.8,
    reviews: 5,
    url: 'https://somewhere.com',
  },
  {
    id: 13,
    name: 'Product 13',
    category: 'Category 13',
    price: '$48.00',
    imageUrl: '/path/to/image13.jpg',
    rating: 4.6,
    reviews: 13,
    url: 'https://somewhere.com',
  },
];

interface ProductPresetProps {
  title: string;
}

const ProductPresetII: React.FC<ProductPresetProps> = ({ title }) => {
  const [visibleProducts, setVisibleProducts] = useState<ProductData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

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

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

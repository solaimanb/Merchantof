import React from 'react';

interface Product {
  name: string;
  category: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="w-full lg:w-2/3">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">Category: {product.category}</p>
      <p className="text-xl font-semibold mb-4">{product.price}</p>
      <p className="text-base mb-4">{product.description}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500">
          {'★'.repeat(Math.round(product.rating))}
          {'☆'.repeat(5 - Math.round(product.rating))}
        </span>
        <span className="ml-2">({product.reviews} reviews)</span>
      </div>
    </div>
  );
};

export default ProductInfo;

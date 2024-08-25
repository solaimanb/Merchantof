import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  images: string[];
  rating: number;
  reviews: number;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) {
    return <p>No product details available.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 my-10">
      <ProductImage images={product.images} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;

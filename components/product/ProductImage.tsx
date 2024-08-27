'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ProductImageProps {
  images: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full lg:w-1/3">
      <div className="relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt="Product Image"
          width={800}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 cursor-pointer border rounded-md overflow-hidden ${
              image === mainImage ? 'border' : 'border-transparent'
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Skeleton,
} from '@nextui-org/react';
import React from 'react';

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: ProductData;
  isPrice?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isPrice }) => {
  return (
    <Card key={product.id} className="p-2 rounded shadow border">
      <CardHeader className="flex-col items-center w-full">
        {!product.imageUrl && <Skeleton className="w-full h-full" />}
        <Image
          alt={product.name}
          className={`w-full object-cover rounded ${
            !product.imageUrl ? 'hidden' : ''
          }`}
          src={product.imageUrl}
          width={400}
          height={150}
        />
      </CardHeader>

      <CardBody className="overflow-visible p-1 mt-2 space-y-2">
        <p className="text-xs uppercase font-bold text-orange-300">
          {product.category}
        </p>
        <h4 className="font-semibold">{product.name}</h4>
      </CardBody>

      {isPrice && (
        <CardFooter className="flex flex-col items-start p-1 space-y-2">
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-semibold">{product.price}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;

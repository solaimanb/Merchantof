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

const ProductCard: React.FC<ProductCardProps> = ({ product, isPrice }) => (
  <Card key={product.id} className="p-2 border rounded-lg shadow">
    <CardHeader className="p-1 flex-col items-start">
      <Skeleton className="rounded-lg w-full">
        <Image
          alt={product.name}
          className="object-cover rounded-xl"
          src={product.imageUrl}
          width={400}
          height={250}
        />
      </Skeleton>
    </CardHeader>

    <CardBody className="overflow-visible p-1 mt-2 space-y-2">
      <p className="text-xs uppercase font-bold text-orange-300">
        {product.category}
      </p>
      <h4 className="font-bold text-large">{product.name}</h4>
    </CardBody>

    {isPrice && (
      <CardFooter className="flex flex-col items-start p-1 space-y-2">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl font-semibold text-orange-500">
            {product.price}
          </p>
        </div>
      </CardFooter>
    )}
  </Card>
);

export default ProductCard;

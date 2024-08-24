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

const products: ProductData[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$59.99',
    imageUrl: 'https://nextui.org/images/card-example-1.jpeg',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Smartwatch',
    category: 'Wearables',
    price: '$129.99',
    imageUrl: 'https://nextui.org/images/card-example-2.jpeg',
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    category: 'Accessories',
    price: '$39.99',
    imageUrl: 'https://nextui.org/images/card-example-3.jpeg',
    rating: 4.3,
    reviews: 150,
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    category: 'Audio',
    price: '$79.99',
    imageUrl: 'https://nextui.org/images/card-example-4.jpeg',
    rating: 4.7,
    reviews: 75,
  },
];

const ProductPresetI: React.FC = () => {
  return (
    <section className="">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Flash Sale</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
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

            <CardFooter className="flex flex-col items-start p-1 space-y-2">
              <div className="flex justify-between items-center w-full">
                <p className="text-xl font-semibold text-orange-500">
                  {product.price}
                </p>
                {/* <Button
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="text-sm"
                >
                  Add to Cart
                </Button> */}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductPresetI;

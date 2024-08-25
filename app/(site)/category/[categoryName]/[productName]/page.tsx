import { Container } from '@/components/Container';
import ProductDetails from '@/components/product/ProductDetails';

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

interface ProductPageProps {
  params: {
    categoryName: string;
    productName: string;
  };
}

const staticProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: '$59.99',
    description: 'High-quality wireless headphones with noise cancellation.',
    images: [
      'https://c1.neweggimages.com/nobgproductcompressall300/A389_1_201911091299757861.jpg',
      'https://c1.neweggimages.com/ProductImage/A29PD2311150VUDSS3A.jpg',
    ],
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Smartwatch',
    category: 'Wearables',
    price: '$129.99',
    description: 'Smartwatch with advanced health tracking features.',
    images: [
      'https://c1.neweggimages.com/ProductImage/ABMTD2207220C65E78A.jpg',
      'https://c1.neweggimages.com/ProductImage/A29PD2311150VUDSS3A.jpg',
    ],
    rating: 4.8,
    reviews: 89,
  },
];

const getProduct = (
  categoryName: string,
  productName: string
): Product | null => {
  return (
    staticProducts.find(
      (product) =>
        product.category.toLowerCase() === categoryName.toLowerCase() &&
        product.name.toLowerCase() === productName.toLowerCase()
    ) || null
  );
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { categoryName, productName } = params;
  const product = getProduct(categoryName, productName);

  if (!product) {
    return (
      <Container>
        <p>Product not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductPage;

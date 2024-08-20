import { Container } from '@/components/Container';
import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

const BottomHeader = () => {
  const categories = [
    { name: 'Mens', url: '/category/mens' },
    { name: 'Women', url: '/category/women' },
    { name: 'Child', url: '/category/child' },
    { name: 'Home & Furniture', url: '/category/home-furniture' },
    { name: 'Cosmetics', url: '/category/cosmetics' },
    { name: 'Shoe & Bag', url: '/category/shoe-bag' },
    { name: 'Electronics', url: '/category/electronics' },
    { name: 'Sport & Outdoor', url: '/category/sport-outdoor' },
  ];

  return (
    <Container>
      <div className="mt-6 hidden lg:block">
        <nav>
          <ul className="flex items-center justify-between gap-4 text-sm">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <li className="relative flex items-center">
                  <Link href={category.url}>{category.name}</Link>
                  {index < categories.length - 1 && (
                    <Divider
                      orientation="vertical"
                      className="h-full w-2 border-gray-400 ml-4"
                    />
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default BottomHeader;

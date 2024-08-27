import { Container } from '@/components/Container';
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
      <div className="hidden lg:block">
        <nav>
          <ul className="flex items-center justify-between text-sm">
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <li className="relative flex items-center justify-center w-full">
                  <Link
                    href={category.url}
                    className="py-4 text-center w-full hover:bg-slate-100 hover:text-black transition-transform duration-300 ease-in-out"
                  >
                    {category.name}
                  </Link>
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

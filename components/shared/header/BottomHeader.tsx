import { Container } from '@/components/Container';
import { Divider } from '@nextui-org/react';
import React from 'react';

const BottomHeader = () => {
  const categories = [
    "Mens",
    "Women",
    "Child",
    "Home & Furniture",
    "Cosmetics",
    "Shoe & Bag",
    "Electronics",
    "Sport & Outdoor",
  ];

  return (
    <Container>
      <div className='mt-6 hidden lg:block'>
        <nav>
          <ul className='flex items-center justify-between gap-4 text-sm'>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <li className="relative flex items-center">
                  {category}
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

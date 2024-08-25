import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryCardProps {
  name: string;
  imageUrl: string;
  linkUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imageUrl,
  linkUrl,
}) => {
  return (
    <Link href={linkUrl} className="group block group-hover:bg-gray-200">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        objectFit="cover"
        className="w-20 h-20 mx-auto object-cover"
      />
      <div className="text-center p-2">
        <h3 className="font-semibold group-hover:text-inherit">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;

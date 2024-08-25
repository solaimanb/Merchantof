import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface VerticalBannerProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
  title: string;
}

const VerticalBanner: React.FC<VerticalBannerProps> = ({
  imageUrl,
  linkUrl,
  altText,
  title,
}) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex flex-col items-center border shadow-md rounded-lg overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={altText}
        width={400}
        height={400}
        className="w-full h-56 object-cover"
      />
      {/* <div className="p-4 bg-white text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div> */}
    </Link>
  );
};

export default VerticalBanner;

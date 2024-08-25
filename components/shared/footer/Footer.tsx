import { Container } from '@/components/Container';
import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Card from '@/public/card.png';
import Paypal from '@/public/paypal.png';
import Visa from '@/public/visa.png';

const currentYear: number = new Date().getFullYear();

const FooterSection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div>
    <h2 className="font-semibold mb-4">{title}</h2>
    <ul className="space-y-2 text-xs">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
            <span className="hover:underline">{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const paymentMethods = [
  { src: Card, alt: 'Card Payment' },
  { src: Paypal, alt: 'Paypal Payment' },
  { src: Visa, alt: 'Visa Payment' },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 bg-gray-900 text-white pt-20 pb-6">
      <Container>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection
            title="Information"
            items={[
              'About Us',
              'Store Location',
              'Contact Us',
              'Shipping & Delivery',
              'Latest News',
              'Our Sitemap',
            ]}
          />
          <FooterSection
            title="Our Service"
            items={[
              'Privacy Policy',
              'Terms of Sale',
              'Customer Service',
              'Delivery Information',
              'Payments',
              'Saved Cards',
            ]}
          />
          <FooterSection
            title="My Account"
            items={[
              'My Account',
              'My Shop',
              'My Cart',
              'Checkout',
              'My Wishlist',
              'Tracking Order',
            ]}
          />
          <div>
            <h2 className="font-semibold mb-4">Newsletter</h2>
            <p className="mb-4 text-xs">
              Subscribe to our mailing list to get the new updates!
            </p>
            {/* TODO: Add social media links here */}
          </div>
        </div>
      </Container>

      <Divider orientation="horizontal" className="bg-white opacity-20" />

      <Container>
        <div className="flex items-center justify-between text-xs">
          <div>
            <p>&copy; {currentYear} MerchantOF. All rights reserved.</p>
          </div>

          <div className="flex space-x-2">
            {paymentMethods.map((method, index) => (
              <Image
                key={index}
                src={method.src.src}
                alt={method.alt}
                width={100}
                height={100}
                className="w-10 bg-white h-6 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

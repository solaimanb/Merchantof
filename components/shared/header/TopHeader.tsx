import { Container } from '@/components/Container';
import SearchBar from '@/components/SearchBar';
import { NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import {
  Facebook,
  Instagram,
  MessageCircleIcon,
  ShoppingCart,
  User,
} from 'lucide-react';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <Container className="flex lg:block">
      <NavbarContent className="lg:hidden border w-fit" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="flex justify-between items-center py-4">
        <div>
          <Link href="/" className="font-bold text-2xl">
            MerchantOF
          </Link>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>

        <div className="hidden lg:block">
          <nav className="text-sm">
            <ul className="flex items-center gap-6 lg:gap-8">
              <li className="text-nowrap">About us</li>
              <li className="text-nowrap">Blog</li>
              <li className="text-nowrap">Contact us</li>
              <li className="text-nowrap">Help & Support</li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/">
            <Instagram size={18} />
          </Link>
          <Link href="/">
            <Facebook size={18} />
          </Link>
          <Link href="/">
            <MessageCircleIcon size={18} />
          </Link>
        </div>
      </NavbarContent>

      <NavbarContent className="lg:hidden border" justify="end">
        <NavbarItem>
          <User size={20} />
        </NavbarItem>
        <NavbarItem>
          <ShoppingCart size={20} />
        </NavbarItem>
      </NavbarContent>
    </Container>
  );
};

export default TopHeader;

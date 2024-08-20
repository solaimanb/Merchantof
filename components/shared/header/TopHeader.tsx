import { Container } from '@/components/Container';
import { Button, NavbarContent, NavbarItem } from '@nextui-org/react';
import {
  Facebook,
  Instagram,
  Menu,
  MessageCircleIcon,
  ShoppingCart,
  User,
} from 'lucide-react';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <Container className="flex items-center justify-between py-4">
      <NavbarContent className="lg:hidden w-fit" justify="start">
        {/* <NavbarMenuToggle /> */}
        <Menu />
      </NavbarContent>

      <NavbarContent>
        <Link href="/" className="font-bold text-2xl">
          MerchantOF
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex items-center gap-4">
        <nav className="text-sm">
          <ul className="flex items-center gap-6 lg:gap-8">
            <li className="text-nowrap">Contact us</li>
            <li className="text-nowrap">Help & Support</li>
          </ul>
        </nav>

        <Link href="/">
          <Instagram size={18} />
        </Link>
        <Link href="/">
          <Facebook size={18} />
        </Link>
        <Link href="/">
          <MessageCircleIcon size={18} />
        </Link>
      </NavbarContent>

      <NavbarContent justify="end" className="flex lg:hidden items-center">
        <NavbarItem>
          <Button
            // as={Link}
            href="/"
            variant="ghost"
          >
            <User size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            // as={Link}
            href="/"
            variant="ghost"
          >
            <ShoppingCart size={20} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Container>
  );
};

export default TopHeader;

import { Container } from '@/components/Container';
import { Button, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
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
    <Container className="flex items-center justify-between gap-4">
      <Navbar maxWidth="full" className="bg-transparent">
        <NavbarContent className="lg:hidden w-fit" justify="start">
          {/* <NavbarMenuToggle /> */}
          <Menu />
        </NavbarContent>

        <NavbarContent>
          <Link href="/" className="font-bold text-2xl">
            MerchantOF
          </Link>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="hidden lg:flex items-center gap-4 lg:gap-20"
        >
          <nav className="text-sm">
            <ul className="flex items-center gap-6">
              <li className="text-nowrap">Contact us</li>
              <li className="text-nowrap">Help & Support</li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
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

        <NavbarContent justify="end" className="flex lg:hidden items-center">
          <NavbarItem>
            <Button
              href="/"
              isIconOnly
              variant="ghost"
              size="sm"
              className="border-0"
            >
              <User size={20} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              href="/"
              isIconOnly
              variant="ghost"
              size="sm"
              className="border-0"
            >
              <ShoppingCart size={20} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </Container>
  );
};

export default TopHeader;

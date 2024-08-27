import { Container } from '@/components/Container';
import SearchBar from '@/components/ui/SearchBar';
import { useTheme } from '@/providers/ThemeProvider';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from '@nextui-org/react';
import { Menu, MoonIcon, ShoppingCart, SunIcon, User } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuItems = [
  'Profile',
  'Dashboard',
  'Activity',
  'Analytics',
  'System',
  'Deployments',
  'My Settings',
  'Team Settings',
  'Help & Feedback',
  'Log Out',
];

const Nav = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const handleCurrencyChange = (selectedCurrency: 'USD' | 'INR' | 'EUR') => {
    setCurrency(selectedCurrency);
  };

  return (
    <section className="w-full bg-black text-white">
      <Container className="flex items-center justify-between py-3 gap-4 text-sm">
        <Navbar maxWidth="full" className="bg-transparent">
          <NavbarContent justify="start">
            <NavbarItem className="lg:hidden w-fit">
              <Menu />
            </NavbarItem>
            <NavbarBrand className="flex items-center gap-2">
              <Image
                src={'/merchantof.png'}
                alt=""
                width={40}
                height={40}
                className="hidden lg:block"
              />
              <Link href="/" className="font-bold text-2xl text-white">
                MerchantOF
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden lg:flex">
            <NavbarItem>
              <SearchBar />
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end" className="flex items-center">
            <NavbarItem className="hidden lg:block">
              <Switch
                size="sm"
                onChange={toggleTheme}
                aria-label="Toggle theme"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
              />
            </NavbarItem>

            <NavbarItem className="flex flex-row items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-1 text-nowrap font-semibold border-0"
              >
                <User size={20} />
                <span className="hidden lg:block">Sign In</span>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-1 text-nowrap font-semibold border-0"
              >
                <ShoppingCart size={20} />
                <span className="hidden lg:block">Cart</span>
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="bg-white w-[80%] border">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? 'warning'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </Container>
    </section>
  );
};

export default Nav;

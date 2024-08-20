import { Container } from '@/components/Container';
import SearchBar from '@/components/SearchBar';
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { ShoppingCart, SlidersHorizontal, User } from 'lucide-react';
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
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');

  const handleCurrencyChange = (selectedCurrency: 'USD' | 'INR' | 'EUR') => {
    setCurrency(selectedCurrency);
  };

  return (
    <section className="hidden lg:block bg-black">
      <Container className="flex items-center justify-between py-4 text-white gap-4 text-sm">
        <NavbarContent className="hidden lg:flex items-center font-semibold text-sm">
          <NavbarBrand className="gap-1">
            <SlidersHorizontal size={18} />
            <p className="text-inherit">Categories</p>
          </NavbarBrand>

          {/* <Dropdown>
            <DropdownTrigger className="flex items-center text-xs w-fit px-1 rounded-sm">
              <Button variant="bordered">
                {currency}
                <ChevronDown size={18} />
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="Currency Selector"
              className="flex flex-col border bg-white shadow-md px-2 cursor-pointer rounded-sm text-sm"
            >
              <DropdownItem
                key="usd"
                onClick={() => handleCurrencyChange('USD')}
                className="border-b"
              >
                USD
              </DropdownItem>
              <DropdownItem
                key="inr"
                onClick={() => handleCurrencyChange('INR')}
                className="border-b"
              >
                INR
              </DropdownItem>
              <DropdownItem
                key="eur"
                onClick={() => handleCurrencyChange('EUR')}
              >
                EUR
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </NavbarContent>

        {/* <NavbarContent className="w-1/2 hidden lg:flex gap-4 " justify="center">
          <NavbarItem className="w-full"></NavbarItem>
        </NavbarContent> */}

        <NavbarContent className="hidden lg:block">
          <SearchBar />
        </NavbarContent>

        <NavbarContent justify="end" className="flex items-center">
          <NavbarItem>
            <Button
              // as={Link}
              href="/"
              variant="ghost"
              className="flex items-center gap-1 text-nowrap font-semibold"
            >
              <User size={20} />
              Sign In
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              // as={Link}
              href="/"
              variant="ghost"
              className="flex items-center gap-1 text-nowrap font-semibold"
            >
              <ShoppingCart size={20} />
              Cart
            </Button>
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
      </Container>
    </section>
  );
};

export default Nav;

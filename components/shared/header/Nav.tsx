import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Container } from "@/components/Container";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currency, setCurrency] = useState<"USD" | "INR" | "EUR">("USD");

  const handleCurrencyChange = (selectedCurrency: "USD" | "INR" | "EUR") => {
    setCurrency(selectedCurrency);
  };

  return (
    <section className="bg-black">
      <Container>
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="flex items-center justify-between py-4 text-white"
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "X" : "Open menu"} />
          </NavbarContent>

          <NavbarContent className="flex items-center font-semibold text-sm">
            <NavbarBrand className="gap-1">
              <SlidersHorizontal size={18} />
              <p className="text-inherit">Categories</p>
            </NavbarBrand>

            <Dropdown>
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
                  onClick={() => handleCurrencyChange("USD")}
                  className="border-b"
                >
                  USD
                </DropdownItem>
                <DropdownItem
                  key="inr"
                  onClick={() => handleCurrencyChange("INR")}
                  className="border-b"
                >
                  INR
                </DropdownItem>
                <DropdownItem
                  key="eur"
                  onClick={() => handleCurrencyChange("EUR")}
                >
                  EUR
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <Divider className="my-4 bg-white" orientation="vertical" />

          <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
            <NavbarItem className="w-full">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="h-10 w-full"
                direction="vertical"
              > 
                <SwiperSlide className="h-4 bg-gray-400 flex items-center justify-center text-center">Slide 1</SwiperSlide>
                <SwiperSlide className="h-4 bg-gray-400 flex items-center justify-center text-center">Slide 2</SwiperSlide>
                <SwiperSlide className="h-4 bg-gray-400 flex items-center justify-center text-center">Slide 3</SwiperSlide>
                <SwiperSlide className="h-4 bg-gray-400 flex items-center justify-center text-center">Slide 4</SwiperSlide>
              </Swiper>
            </NavbarItem>
          </NavbarContent>

          <Divider className="my-4 bg-white" orientation="vertical" />

          <NavbarContent justify="end" className="flex items-center">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat" className="text-nowrap">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
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

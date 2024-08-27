import { Container } from '@/components/Container';
import { Navbar, NavbarContent } from '@nextui-org/react';
import { Facebook, Instagram, MessageCircleIcon } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { name: 'Contact us', href: '/contact' },
  { name: 'Help & Support', href: '/support' },
];

const TopHeader = () => {
  return (
<<<<<<< HEAD
    <Container className="hidden lg:flex items-center justify-between gap-4">
      <Navbar maxWidth="full" className="bg-transparent" height="2.5rem">
=======
    <Container className="flex items-center justify-between gap-4">
      <Navbar maxWidth="full" className="bg-transparent" height="2.5rem">
        <NavbarContent className="lg:hidden w-fit" justify="start">
          <Menu />
        </NavbarContent>

>>>>>>> f6563ac (re-initilize the repo)
        <NavbarContent
          justify="start"
          className="hidden lg:flex items-center gap-4 lg:gap-20"
        >
          <nav className="text-xs">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="text-nowrap opacity-80 hover:opacity-100"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
<<<<<<< HEAD
=======
        </NavbarContent>

        <NavbarContent justify="end">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Instagram size={16} />
            </Link>
            <Link href="/">
              <Facebook size={16} />
            </Link>
            <Link href="/">
              <MessageCircleIcon size={16} />
            </Link>
          </div>
>>>>>>> f6563ac (re-initilize the repo)
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:block">
          <div className="flex items-center h-full justify-end gap-2">
            <Link href="/">
              <Instagram size={16} />
            </Link>
            <Link href="/">
              <Facebook size={16} />
            </Link>
            <Link href="/">
              <MessageCircleIcon size={16} />
            </Link>
          </div>
        </NavbarContent>
      </Navbar>
    </Container>
  );
};

export default TopHeader;

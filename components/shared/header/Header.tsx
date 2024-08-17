'use client';

import { Navbar } from '@nextui-org/react';
import React from 'react';
import BottomHeader from './BottomHeader';
import Nav from './Nav';
import TopHeader from './TopHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <div className="flex lg:flex-col w-full">
        <TopHeader />
        <Nav />
        <BottomHeader />
      </div>
    </Navbar>
  );
};

export default Header;

'use client';

import React from 'react';
import BottomHeader from './BottomHeader';
import Nav from './Nav';
import TopHeader from './TopHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="flex flex-col w-full h-full">
      <TopHeader />
      <Nav />
      <BottomHeader />
    </div>
  );
};

export default Header;

'use client';

import Nav from './Nav';
import TopHeader from './TopHeader';

const Header = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <TopHeader />
      <Nav />
    </div>
  );
};

export default Header;

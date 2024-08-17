'use client';

import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
     <TopHeader/>
     <Nav/>
     <BottomHeader/>
    </>
  )
}

export default Header
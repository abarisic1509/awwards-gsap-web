import Image from "next/image";
import React from "react";

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 p-3 md:p-9">
      <Image
        src={"/images/nav-logo.svg"}
        alt="Logo"
        width={102}
        height={55}
        className="w-20 md:w-24"
      />
    </header>
  );
};

export default NavBar;

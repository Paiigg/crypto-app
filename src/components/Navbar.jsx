import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = ({ setSearch, Change, search, searchMovie }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="sticky top-0 bg-[#141518]">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center ">
        <div className="flex items-center gap-16">
          <h1 className="text-3xl font-bold">EqCoin</h1>
          <ul className="md:flex hidden gap-5 ">
            <li className="text-white/40 hover:text-white">Dashboard</li>
            <li className="text-white/40 hover:text-white">Exchange</li>
            <li className="text-white/40 hover:text-white">Wallet</li>
            <li className="text-white/40 hover:text-white">Market</li>
          </ul>
        </div>
        <form action="" onSubmit={searchMovie}>
          <input
            type="text"
            value={search}
            className="bg-primary px-3 py-2 rounded-full focus:outline-none"
            onChange={Change}
            placeholder="Search coin"
          />
        </form>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <BiX size={30} /> : <BiMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "absolute top-[80px] left-0  bg-[#141518] flex flex-col text-center items-center gap-5 w-full py-5 ease-in-out duration-500"
              : "top-[80px] left-[-100%] absolute"
          }
        >
          <ul>
            <li className="text-white/40 hover:text-white">Dashboard</li>
            <li className="text-white/40 hover:text-white">Exchange</li>
            <li className="text-white/40 hover:text-white">Wallet</li>
            <li className="text-white/40 hover:text-white">Market</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

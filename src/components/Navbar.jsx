import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useProductCOntext } from "../context/ProductContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { cart } = useProductCOntext();

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer flex md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 transition-all duration-300 ease-in-out">
          SHOP<span className="font-bold">.CO</span>
        </h1>
        <ul className="hidden lg:flex items-center gap-4  p-2 text-[15px]">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </div>

      {/* Cart button */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <AiOutlineShoppingCart size={25} />
          <span className="absolute -top-3 left-6 bg-red-300 rounded-full text-sm px-1">
            {cart.length}
          </span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          SHOP<span className="font-bold">.CO</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Shop
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> On Sale
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> New Arrivals
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Brands
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="pt-8  bg-[#FBFBFB]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-1/6 order-1">
            <a href="">
              <img src="./images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="flex order-3 lg:order-2  items-center w-1/2">
            <input
              className="focus:outline-none border-none py-3 px-5 bg-gray-200 rounded w-full"
              type="search"
              id="fname"
              name="fname"
              placeholder="I'm looking for..."
            />
            <span className="bg-blue-500 py-4 px-5 rounded text-white cursor-pointer">
              <FaSearch />
            </span>
          </div>
          <ul className="flex justify-end gap-10 w-1/3 order-2 lg:order-3 font-popins text-base font-normal text-primary ">
            <li className="flex gap-1 items-center">
              <FaRegUser />
              Login
            </li>
            <li className="flex gap-1 items-center">
              <CiHeart />
              Wishlist
            </li>
            <li className="flex gap-2 items-center">
              <IoBagHandleOutline />
              My cart
              <p className="w-5 h-5 text-center font-popins text-xs leading-5	  bg-[#FF5D5D] text-white rounded-full">
                1
              </p>
            </li>
          </ul>
        </div>
        {/*========= Menu List=========== */}
        <div className="pt-8 font-popins font-medium text-base text-primary uppercase">
          <ul className="flex sm:flex-col lg:flex-row justify-between">
            <li className="relative group">
              <Link
                href="#"
                className=" hover:text-brand border-b-2 border-b-transparent hover:border-brand pb-2 transition-all"
              >
                Women's Fashion
              </Link>
              <div className="flex justify-between  w-[1200px] absolute left-0 top-full py-8 px-16 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all capitalize">
                <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                  <li className=" font-semibold text-base text-primary">
                    <Link href="#">Saree</Link>
                  </li>
                  <li>
                    <Link href="#">Cotton</Link>
                  </li>
                  <li>
                    <Link href="#">Silk</Link>
                  </li>
                  <li>
                    <Link href="#">Katan</Link>
                  </li>
                  <li>
                    <Link href="#">Muslin</Link>
                  </li>
                  <li>
                    <Link href="#">Jamdani</Link>
                  </li>
                  <li>
                    <Link href="#">Georgette</Link>
                  </li>
                  <li>
                    <Link href="#">Nakshi Kantha</Link>
                  </li>
                  <li>
                    <Link href="#">Linen</Link>
                  </li>
                  <li>
                    <Link href="#">Khadi</Link>
                  </li>
                  <li>
                    <Link href="#">Tangail Taant</Link>
                  </li>
                  <li>
                    <Link href="#">Monipuri</Link>
                  </li>
                  <li>
                    <Link href="#">Dhakai Benaroshi</Link>
                  </li>
                </ul>
                <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                  <li className=" font-semibold text-base">
                    <Link href="#">Clothes</Link>
                  </li>
                  <li>
                    <Link href="#">T-shirt</Link>
                  </li>
                  <li>
                    <Link href="#">Shorts</Link>
                  </li>
                  <li>
                    <Link href="#">Shirt</Link>
                  </li>
                  <li>
                    <Link href="#">Tracksuit</Link>
                  </li>
                  <li>
                    <Link href="#">Jeans</Link>
                  </li>
                  <li>
                    <Link href="#">Georgette</Link>
                  </li>
                  <li>
                    <Link href="#">Waistcoat</Link>
                  </li>
                  <li>
                    <Link href="#">Sweater</Link>
                  </li>
                  <li>
                    <Link href="#">Coats</Link>
                  </li>
                  <li>
                    <Link href="#">Suit</Link>
                  </li>
                  <li>
                    <Link href="#">Sweatshirt</Link>
                  </li>
                  <li>
                    <Link href="#">Uniform</Link>
                  </li>
                </ul>
                <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                  <li className=" font-semibold text-base">
                    <Link href="#">Cosmetic </Link>
                  </li>
                  <li>
                    <Link href="#">Perfume</Link>
                  </li>
                  <li>
                    <Link href="#">Eye make-up</Link>
                  </li>
                  <li>
                    <Link href="#">Skin care</Link>
                  </li>
                  <li>
                    <Link href="#">Hair care</Link>
                  </li>
                  <li>
                    <Link href="#">Make-up</Link>
                  </li>
                  <li>
                    <Link href="#">Oral Care</Link>
                  </li>
                  <li>
                    <Link href="#">Body Care</Link>
                  </li>
                  <li>
                    <Link href="#">Sanitary pad</Link>
                  </li>
                  <li>
                    <Link href="#">Shower Gels & Creams</Link>
                  </li>
                  <li>
                    <Link href="#">Hair Removal Products</Link>
                  </li>
                  <li>
                    <Link href="#">Lipstick</Link>
                  </li>
                  <li>
                    <Link href="#">Suntan cream</Link>
                  </li>
                </ul>
                <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                  <li className=" font-semibold text-base">
                    <Link href="#">Sports & Outdoor</Link>
                  </li>
                  <li>
                    <Link href="#">Sweatshirt</Link>
                  </li>
                  <li>
                    <Link href="#">T-shirt</Link>
                  </li>
                  <li>
                    <Link href="#">Sports Bra</Link>
                  </li>
                  <li>
                    <Link href="#">Leggings</Link>
                  </li>
                  <li>
                    <Link href="#">Tracksuit</Link>
                  </li>
                  <li>
                    <Link href="#">Running Shoes</Link>
                  </li>
                  <li>
                    <Link href="#">Sports Bag</Link>
                  </li>
                  <li>
                    <Link href="#">Sports Equipment</Link>
                  </li>
                  <li>
                    <Link href="#">Outdoor Shoes</Link>
                  </li>
                  <li>
                    <Link href="#">Snow Boot</Link>
                  </li>
                  <li>
                    <Link href="#">Outdoor Equipment</Link>
                  </li>
                  <li>
                    <Link href="#">Sports Accessories</Link>
                  </li>
                </ul>
                <div className="flex flex-col gap-8">
                  <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                    <li className=" font-semibold text-primary text-base">
                      <Link href="#">Personal Care</Link>
                    </li>
                    <li>
                      <Link href="#">Perfume</Link>
                    </li>
                    <li>
                      <Link href="#">Sexual Health</Link>
                    </li>
                    <li>
                      <Link href="#">After Shave Products</Link>
                    </li>
                    <li>
                      <Link href="#">Razor blade</Link>
                    </li>
                  </ul>
                  <ul className="text-secondary font-popins font-normal text-sm flex flex-col gap-1.5">
                    <li className=" font-semibold text-primary text-base">
                      <Link href="#">Shoes</Link>
                    </li>
                    <li>
                      <Link href="#">Heeled shoes</Link>
                    </li>
                    <li>
                      <Link href="#">Sneakers</Link>
                    </li>
                    <li>
                      <Link href="#">Casual Shoes</Link>
                    </li>
                    <li>
                      <Link href="#">Babet</Link>
                    </li>
                    <li>
                      <Link href="#">Sandals</Link>
                    </li>
                    <li>
                      <Link href="#">Slipper</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Men's Fashion
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Kid's Fashion
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Home & Lifestyle
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Arts & Crafts
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Computer & Electronics
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" hover:text-sky-400 border-b-2 border-b-transparent hover:border-blue-400 pb-2 transition-all"
              >
                Food & Grocery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { FaCartArrowDown, FaLeaf } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const NavMenu = [
    { id: "1", label: "Home", path: "/" },
    { id: "2", label: "About", path: "/about" },
    { id: "3", label: "Products", path: "/products" },
    { id: "4", label: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex items-center justify-between py-4 md:pt-4"
        >
          {/* logo section */}
          <div className="flex items-center text-2xl gap-1 font-bold font-averia uppercase">
            <p className="text-primary">Fruit </p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavMenu.map((item) => (
                <li
                  key={item.id}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <FaCartArrowDown />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdClose className="text-3xl cursor-pointer" />
            ) : (
              <MdMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </motion.div>
      </nav>

      {/* mobile menu */}

      <MobileMenu open={open} NavMenu={NavMenu} />
    </>
  );
};

export default Navbar;

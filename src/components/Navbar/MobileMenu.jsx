import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const MobileMenu = ({ open, NavMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 left-0 w-full z-20"
        >
          <div className=" text-lg font-semibold uppercase bg-primary text-white rounded-3xl py-10 m-6">
            <ul className="mobile-menu flex flex-col items-center gap-6 hover:cursor-pointer">
              {NavMenu.map((item) => (
                <li
                  key={item.id}
                  className="hover:cursor-pointer hover:shadow-[0_3px_0_-1px_white] font-semibold"
                >
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}

              {/* <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li> */}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

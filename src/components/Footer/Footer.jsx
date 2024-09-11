import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary mt-20 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div className="flex items-center text-2xl gap-1 font-bold font-averia uppercase">
          <p className="text-black">Fruit </p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-600" />
        </div>

        {/* social icons */}
        <div className="text-2xl flex items-center gap-4">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

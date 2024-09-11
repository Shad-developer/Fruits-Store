import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../assets/fruit-plate.png";
import LeafImg from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utils/Animation";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 items-center md:grid-cols-2 min-h-[650px]">
        {/* Brand information */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl leading-relaxed font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-sm text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind. Order now and get 20% off on your food.
            </motion.p>
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start items-center"
            >
              <button className="primary-btn flex gap-3">
                {" "}
                <span>
                  <IoBagHandleOutline size={20} />
                </span>{" "}
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Brand image */}
        <div className="flex justify-center md:justify-normal">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>
        <div className="absolute top-14 md:top-8 opacity-80 right-1/2 blur-sm rotate-[40deg]">
          <img src={LeafImg} alt="" className="w-full md:max-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

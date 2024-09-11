import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/fruit-plate2.png";
import { FadeUp } from "./../../utils/Animation";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid  grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* banner info  */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Online Fruit Store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              beatae reiciendis necessitatibus laboriosam, officia molestiae,
              vel reprehenderit asperiores praesentium ab, tenetur iusto cum
              fugiat facilis aspernatur laborum velit blanditiis? Cumque!
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem sapiente inventore beatae esse provident consequatur?
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate={"visible"}
              className="flex justify-center md:justify-start items-center"
            >
              <button className="primary-btn flex gap-3">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center md:justify-normal">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;

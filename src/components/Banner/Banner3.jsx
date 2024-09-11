import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/banner-bg.jpg";
import { FadeLeft } from "./../../utils/Animation";

const Banner3 = () => {
  const bgStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Blank div */}
        <div></div>
        {/* banner info */}
        <div className="flex flex-col justify-center p-4 bg-gray-300 md:bg-transparent md:bg-opacity-0 md:backdrop-blur-none bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-lg">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Get Fresh Fruits
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              beatae reiciendis necessitatibus laboriosam, officia molestiae,
              vel reprehenderit asperiores praesentium ab, tenetur iusto cum
              fugiat facilis aspernatur laborum velit blanditiis? Cumque!
            </motion.p>
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate={"visible"}
              className="flex justify-center md:justify-start items-center"
            >
              <button className="primary-btn flex gap-3"> Order Now</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;

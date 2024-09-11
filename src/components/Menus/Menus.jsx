import React from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utils/Animation";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";

const Menus = () => {
  const MenusData = [
    {
      id: 1,
      name: "Fresh Red Apple",
      price: "1.25$",
      img: Fruit1,
      delay: 0.3,
    },
    {
      id: 2,
      name: "Fresh Oranges",
      price: "2.75$",
      img: Fruit2,
      delay: 0.6,
    },
    {
      id: 3,
      name: "Fresh Avacados",
      price: "5.25$",
      img: Fruit3,
      delay: 0.9,
    },
    {
      id: 4,
      name: "Fresh Cherries",
      price: "4.05$",
      img: Fruit4,
      delay: 1.2,
    },
  ];

  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-3 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-4 "
            >
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-125 transform-translate-y-6"
              />
              <div>
                <h1 className="text-lg font-semibold">{menu.name}</h1>
                <p className="text-lg font-semibold text-secondary">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;

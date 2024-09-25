import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="services"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experience
        </h2>
        <div className="">
  <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-start md:gap-8">
    {serviceData.map((el, index) => (
      <motion.div
        key={index}
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={
          theme.state.darkMode
            ? "w-[500px]   p-4 bg-white rounded-lg flex flex-col mt-8"
            : "w-[500px]   p-4 bg-gray-100 rounded-lg flex flex-col mt-8"
        }
        style={{ overflow: "hidden" }} // Optional: This hides any overflowing content
      >
        <div className="flex justify-center">
          <img src={el.img} alt="" style={{ width: '30px', height: '30px' }} />
        </div>
        <div className="flex mt-4 justify-between w-full">
          <p className="text-sm font-bold">{el.name}</p>
          <p className="text-sm font-semibold opacity-80">{el.time}</p>
        </div>
        <ul className="text-lg mt-2 list-disc list-inside">
       {el.desc.map((item, index) => (
        <li key={index} className="flex items-start my-2"> {/* Flex for alignment */}
        <span className="flex-1 text-justify"> {/* Justified text */}
         {item}
        </span>
       </li>
      ))}
     </ul>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Services;

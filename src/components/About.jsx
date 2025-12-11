import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Text } from "@react-three/drei";

const ServiceCard = ({ index, title,subtitle,subtitle1,subtitle2,icon  }) => (
  <Tilt
  className='xs:w-[356px] w-full'
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[10px] rounded-[20px] shadow-card'
  >
    <div
      className='bg-tertiary rounded-[50px] py-30 px-20 min-h-[520px] flex justify-evenly items-center flex-col'
    >
      <h2 className='text-white text-[28px] font-bold text-center'>
        {title}
      </h2>

      <h4 className='text-white text-[24px] text-center'>
        {subtitle}
      </h4>

      <h5 className='text-white text-[24px] text-center'>
        {subtitle1}
      </h5>

      <h5 className='text-white text-[20px] text-center'>
        {subtitle2}
      </h5>
    </div>
  </motion.div>
</Tilt>

);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <i>
        •
 Dedicated Computer Science undergraduate eager to translate academic knowledge into practical settings. Known for loyalty to work
 and a commitment to delivering the best results.
        </i>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

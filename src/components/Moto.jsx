import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Text } from "@react-three/drei";

const ServiceCards = ({ index, title1,icon  }) => (
  <Tilt
  className='xs:w-[356px] w-full'
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
>
  {/* Your content goes here */}
</Tilt>

);

const Moto = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        <p className={styles.sectionSubText}>MOTO</p>
        <h2 className={styles.sectionHeadText}>INSPIRATION</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
    <h2 style={{
  font: "italic small-caps bold 12px/30px Georgia, serif",
  fontSize: "40px",
  textAlign: "LEFT",
  color: "Aquamarine"
}}>
  If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.
</h2>
<h2 style={{
  font: "italic small-caps bold 12px/30px Georgia, serif",
  fontSize: "20px",
  textAlign: "RIGHT",
  color: "Aquamarine"
}}>
    - Mahatma Gandhi
</h2>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCards key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Moto, "Moto");

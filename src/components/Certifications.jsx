import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certi } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Text } from "@react-three/drei";

const ServiceCard = ({ index, title1, link }) => (
  <Tilt
    className='xs:w-[356px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[10px] py-10 px-10 min-h-[100px] flex flex-col justify-center items-center gap-4'>
        
        {/* Title */}
        <h2 className='text-white text-[28px] font-bold text-center'>
          {title1}
        </h2>

        {/* Link Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='text-white bg-[#915EFF] px-4 py-2 rounded-lg text-[16px] font-semibold hover:bg-[#7b4bdb] transition'
          >
            View Certificate
          </a>
        )}

      </div>
    </motion.div>
  </Tilt>
);


const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Certificates</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <i>
        •
Certification I have done till date to improve my skill set .
        </i>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {certi.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "Certifications");

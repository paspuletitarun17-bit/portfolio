import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { intern } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Text } from "@react-three/drei";

const ServiceCard = ({ index, title2, link }) => (
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
      <div
        className='bg-tertiary rounded-[10px] py-10 px-10 min-h-[100px] flex flex-col justify-center items-center gap-4'
      >
        {/* Internship Title */}
        <h2 className='text-white text-[28px] font-bold text-center'>
          {title2}
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

const Internship = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Virtual Internship</p>
        <h2 className={styles.sectionHeadText}>Intern</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <i>
        •
 Engineered and deployed 3+ Salesforce applications using Apex, Visualforce, and LWC, accelerating internal CRM
workflows and improving user operations by 30%.
</i><br />
<br />
<i>•Built and optimized 10+ custom objects and 30+ fields, improving data modeling accuracy and reducing query
execution time by 25%.
</i><br />
<br />
<i>•Automated key business processes with Apex triggers and classes, decreasing manual intervention by 40% and
enhancing process reliability.
</i>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {intern.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Internship, "Internships");

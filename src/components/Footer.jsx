/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc/index";
import { fadeIn } from "../utils/motion";
import SocialIcon from "./SocialIcon";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex sm:justify-start md:justify-center mt-5"
      >
        <div className="flex gap-10 text-2xl">
          {socialLinks.map((link) => (
            <SocialIcon key={link.id} {...link} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex sm:justify-start md:justify-center mt-5"
      >
        <div className="flex gap-3 mt-2">+923041479340 | zeeshan7826@gmail.com</div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex sm:justify-start md:justify-center text-sm mt-5"
      >
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Zeeshan Safdar. All Rights Reserved.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Footer, "footer");

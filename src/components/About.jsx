import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc/index";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./cards/ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software developer with experience in JavaScript and TypeScript, and
        expertise in different libraries and frameworks like React.js, Next.js and Node.js. I&apos;m
        a quick learner and collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let&apos;s work together to bring
        your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

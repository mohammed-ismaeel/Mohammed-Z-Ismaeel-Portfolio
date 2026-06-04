import { useEffect, useState } from "react";
import AchievementCard from "../AchievementCard/AchievementCard";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import heroImg from "./../../assets/images/my.jpg";
const Hero = () => {
  const fullText = "HEY! I'm Mohammed, Fullstack Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayedText(fullText);
      setIsTypingDone(true);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [isMobile, fullText]);

  const description =
    "I'm a junior Full Stack Developer with expertise in building dynamic and efficient web applications. I create seamless user experiences by blending clean front-end designs with powerful back-end functionality using the latest technologies.";

  const words = description.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? 0 : i * 0.08,
        duration: 0.4,
      },
    }),
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isMobile ? 0 : delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="hero w-4/5 lg:min-h-screen flex justify-between items-center my-0 mx-auto pt-28 gap-14 max-xl:w-10/12 max-lg:flex-wrap max-lg:justify-center max-lg:text-center max-lg:py-32 max-sm:py-24 max-sm:gap-8"
      id="Home"
    >
      <div className="hero-text relative max-w-xl max-lg:max-w-full max-lg:px-4">
        <p className="section-kicker mx-0 max-lg:mx-auto text-sm max-sm:text-xs">Fullstack Developer</p>
        <h1
          className="text-white text-6xl font-black leading-tight tracking-[-0.05em] max-xl:text-5xl max-lg:text-4xl max-sm:text-3xl max-[400px]:text-2xl"
        >
          {displayedText}
          <span
            className={`border-r-4 border-blue ${
              isTypingDone ? "animate-blink" : ""
            }`}
          >
            &nbsp;
          </span>
        </h1>

        <p className="my-info text-slate-300 text-lg py-5 px-0 max-xl:text-base max-lg:text-sm max-sm:text-xs flex flex-wrap gap-1 justify-start max-lg:justify-center leading-8 max-lg:leading-7">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate={isTypingDone ? "visible" : "hidden"}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          animate={isTypingDone ? "visible" : "hidden"}
          custom={1.8}
        >
          <Button contentButton={"Say Hello"} href={"#Contact"} />
        </motion.div>
        <motion.div
          className="achievements-cards flex w-full gap-3 mt-16 max-lg:mt-8 max-sm:mt-6 max-sm:gap-2 max-sm:justify-center"
          variants={slideUpVariant}
          initial="hidden"
          animate={isTypingDone ? "visible" : "hidden"}
          custom={2.4}
        >
          <AchievementCard value={"1 Y."} detail={"Experince"} />
          <AchievementCard value={"12 +"} detail={"Project"} />
          <AchievementCard value={"5"} detail={"Happy Client"} />
        </motion.div>
      </div>
      <div className="hero-img w-1/3 rounded-full glass-panel p-3 outline-blue outline-1 outline shadow-[0_0_120px_rgba(56,189,248,0.22)] max-lg:w-3/5 max-lg:mt-8 max-sm:w-4/5 max-sm:mt-6 max-[400px]:w-full max-[400px]:rounded-2xl">
        <img
          src={heroImg}
          alt=""
          className="w-full rounded-full max-[400px]:rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;

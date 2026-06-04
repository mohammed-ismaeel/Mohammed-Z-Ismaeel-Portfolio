import "./SkillsStyle.css";
import htmlIcon from "./../../assets/images/html.webp";
import cssIcon from "./../../assets/images/css.webp";
import bootstrapIcon from "./../../assets/images/bootstrap.webp";
import tailwindIcon from "./../../assets/images/tailwind.webp";
import gitIcon from "./../../assets/images/git.webp";
import mysqlIcon from "./../../assets/images/mysql.webp";
import reactIcon from "./../../assets/images/react.webp";
import sassIcon from "./../../assets/images/sass.webp";
import phpIcon from "./../../assets/images/php.png";
import laravelIcon from "./../../assets/images/laravel.png";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: isMobile ? 0.01 : 0.2 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setDirection(current > prevScroll ? "down" : "up");
      setPrevScroll(current);

      const sectionTop = ref.current?.getBoundingClientRect().top;

      if (direction === "up" && sectionTop > window.innerHeight) {
        setAnimateNow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, direction]);

  useEffect(() => {
    if (isMobile) {
      setAnimateNow(true);
    } else if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction, isMobile]);

  return (
    <div className="parent">
      <section
        ref={ref}
        className="skills w-4/5 mx-auto my-0 py-20 px-0 max-xl:py-16 max-lg:py-14 max-sm:py-12 max-sm:w-11/12"
        id="Skills"
      >
        <div
          className="skills w-4/5 mx-auto my-0 px-0 max-sm:w-11/12"
          id="Skills"
        >
          <motion.h1
            className="text-white top-title text-center text-4xl font-black pb-6 tracking-[-0.04em] max-lg:text-3xl max-sm:text-2xl"
            initial={{ opacity: 0, y: -100 }}
            animate={
              animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
            }
            transition={{ duration: 0.7 }}
          >
            My <span className="text-blue">Skills</span>
          </motion.h1>

          <motion.p
            className="text-slate-400 text-center w-4/5 my-0 mx-auto max-[400px]:w-full leading-7 max-lg:text-base max-sm:text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I offer end-to-end web development expertise — from designing sleek,
            responsive front-end interfaces to developing efficient and scalable
            back-end architectures, delivering complete and high-performing
            digital solutions.
          </motion.p>
        </div>
        <div className="flex flex-wrap pt-10 gap-y-12 gap-x-32 max-lg:gap-x-16 max-lg:gap-y-10 max-sm:gap-x-8 max-sm:gap-y-8 justify-center">
          {[
            {
              icon: htmlIcon,
              title: "HTML",
            },
            {
              icon: cssIcon,
              title: "CSS",
            },
            {
              icon: sassIcon,
              title: "Sass",
            },
            {
              icon: bootstrapIcon,
              title: "Bootstrap",
            },
            {
              icon: tailwindIcon,
              title: "TailwindCss",
            },
            {
              icon: gitIcon,
              title: "Git",
            },
            {
              icon: reactIcon,
              title: "React",
            },
            {
              icon: phpIcon,
              title: "Php",
            },
            {
              icon: mysqlIcon,
              title: "MySql",
            },
            {
              icon: laravelIcon,
              title: "Laravel",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              animate={
                animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
              }
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <div className="card flex flex-col justify-center items-center gap-3 glow-card">
                <div className="skills-icon w-32 max-lg:w-28 max-sm:w-24 rounded-2xl p-4 max-sm:p-3 flex justify-center items-center glass-panel border border-blue/10">
                  <img src={skill.icon} alt="" className="w-full" />
                </div>
                <h3 className="text-white text-lg font-semibold max-sm:text-base">
                  {skill.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;

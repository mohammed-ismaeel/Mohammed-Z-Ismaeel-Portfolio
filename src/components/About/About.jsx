import Button from "../Button/Button";
import "./AboutStyle.css";
import aboutImg from "./../../assets/images/my.jpg";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isInView = useInView(ref, { amount: isMobile ? 0.01 : 0.4 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);

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
    <section
      className="about w-4/5 relative mx-auto flex justify-between items-center py-12 px-16 rounded-3xl max-xl:w-11/12 max-xl:px-8 max-lg:flex-wrap max-lg:justify-center max-lg:text-left max-lg:px-4 gap-10 glass-panel glow-card mt-32 max-2xl:mt-24 max-xl:mt-20 max-lg:mt-16 max-sm:mt-12"
      id="About"
    >
      <motion.div
        ref={ref}
        className="about-img relative w-full max-lg:flex max-lg:justify-center"
        initial={{ opacity: 0, x: -100 }}
        animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-img relative w-80 max-[768px]:w-2/3 max-md:mx-auto max-[450px]:w-full max-sm:w-full">
          <img src={aboutImg} alt="" className="w-full rounded-2xl border border-blue/20 shadow-[0_0_70px_rgba(56,189,248,0.16)]" />
          <div className="social-icons w-4/5 glass-panel absolute bottom-0 left-1/2 -translate-x-1/2 p-3 rounded-2xl border border-blue/20 shadow-[0_0_40px_rgba(56,189,248,0.15)] max-sm:w-11/12 max-[350px]:w-full">
            <ul className="flex list-none justify-between gap-2">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <i className="fa-brands fa-square-facebook text-xl max-sm:text-lg"></i>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/MohammedIs87422"
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <i className="fa-brands fa-square-x-twitter text-xl max-sm:text-lg"></i>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com"
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <i className="fa-brands fa-linkedin text-xl max-sm:text-lg"></i>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mohammed-ismaeel/"
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <i className="fa-brands fa-square-github text-xl max-sm:text-lg"></i>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  <i className="fa-brands fa-square-instagram text-xl max-sm:text-lg"></i>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        className="about-desc w-full max-md:w-full max-lg:mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-desc w-full max-md:w-11/12 max-md:mx-auto max-sm:px-2">
          <h1 className="text-white font-black text-3xl tracking-[-0.04em] max-lg:text-2xl max-sm:text-xl">
            I am Junior Fullstack Web Developer
          </h1>
          <p className="pt-6 text-slate-300 leading-7 max-lg:text-base max-sm:text-sm">
            I'm a Fullstack Developer with a passion for building efficient and
            scalable web applications. I specialize in creating responsive and
            interactive user interfaces using modern tools like React.js,
            JavaScript, and TailwindCSS, while ensuring seamless integration
            with robust back-end systems. With experience in translating Figma
            designs into clean, accessible UIs and integrating RESTful APIs, I
            deliver dynamic digital experiences that perform reliably across
            devices. On the server side, I work with PHP, Laravel, and MySQL to
            build secure APIs, manage data effectively, and develop scalable
            architectures. I'm dedicated to clean code practices, performance
            optimization, and maintaining maintainable codebases. I enjoy
            collaborating with teams and clients to transform ideas into
            impactful, high-quality web solutions.
          </p>

          <div className="buttons pt-5 flex gap-3 max-sm:pb-10 max-sm:flex-col max-sm:gap-2">
            <Button
              contentButton={"My Projects"}
              href={"#Projects"}
            />
            <a
              id="download-button"
              href="https://drive.google.com/file/d/1AaxiOIMSqv2_0aop1VzKC9tpEiX6Y2QM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 bg-transparent w-48 max-sm:w-full text-blue border border-solid border-blue/50 rounded-xl hover:bg-blue hover:text-white hover:cursor-pointer hover:border hover:border-solid hover:border-white transition-all duration-300"
            >
              <span className="font-semibold"> Download CV </span>
              <i className="fa-solid fa-circle-down"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

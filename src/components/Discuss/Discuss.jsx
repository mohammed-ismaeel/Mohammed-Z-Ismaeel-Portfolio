import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Discuss = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

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

      // إذا طلع القسم من الشاشة للأعلى فقط
      if (direction === "up" && sectionTop > window.innerHeight) {
        setAnimateNow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, direction]);

  // التحكم بالأنيميشن بناءً على اتجاه التمرير والرؤية
  useEffect(() => {
    if (isMobile) {
      setAnimateNow(true);
    } else if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction, isMobile]);

  return (
    <div
      className="Discuss bg-[#092b33]/70 w-full h-80 max-lg:h-72 max-sm:h-auto text-center flex justify-center items-center py-10 max-sm:py-8 border-y border-blue/10 shadow-[0_0_100px_rgba(56,189,248,0.08)]"
    >
      <div className="content max-w-xl max-sm:px-6 max-sm:w-11/12">
        <motion.h1
          ref={ref}
          className="text-white text-center text-4xl font-black max-lg:text-3xl max-sm:text-2xl tracking-[-0.04em]"
          initial={{ opacity: 0, y: -100 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
          transition={{ duration: 0.7 }}
        >
          Got a project in mind? <br /> Let’s talk about it!
        </motion.h1>

        <motion.p
          ref={ref}
          className="text-slate-300 py-5 leading-7 max-lg:text-base max-sm:text-sm max-sm:py-4"
          initial={{ opacity: 0, y: 40 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey there! I’d love to help you bring your ideas to life through
          smart, modern web interfaces. Whether you’re starting from scratch or
          looking to improve an existing project, I’m here to listen,
          collaborate, and build something that truly works for you.
        </motion.p>
        <motion.a
          ref={ref}
          href="#Contact"
          className="text-white no-underline text-sm font-semibold bg-blue border border-blue/40 rounded-xl py-3 px-6 max-sm:py-2 max-sm:px-4 max-sm:text-xs cursor-pointer hover:bg-white hover:text-blue shadow-[0_0_32px_rgba(56,189,248,0.28)] transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's work Together
        </motion.a>
      </div>
    </div>
  );
};

export default Discuss;

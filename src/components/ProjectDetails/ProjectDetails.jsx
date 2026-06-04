// import NavBar from "./../NavBar/NavBar";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import MyProjects from "../MyProjects";
// import "./ProjectStyle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Icon from "./../../assets/images/Icon.svg";
// import BestProjects from "../BestProjects/BestProjects";
// import Footer from "../Footer/Footer";
// import { useContext, useEffect, useState } from "react";
// import maximizeIcon from "./../../assets/images/maximize.svg";
// import { LuCircleArrowOutUpRight } from "react-icons/lu";
// import { TbArrowsMaximize } from "react-icons/tb";
// import { ThemeContext } from "../context/ThemeContext";

// // import { LuArrowUpRightFromCircle } from 'react-icons/lu'
// const ProjectDetails = ({ onClick }) => {
//   const theme = useContext(ThemeContext);
//   let key = useParams();
//   let x = MyProjects.find((e) => e.id == key.id);

//   // داخل مكون ProjectDetails
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const navigate = useNavigate();

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" });
//   }, [pathname]);

//   // ✅ منع التمرير عند فتح الصورة
//   useEffect(() => {
//     if (isFullscreen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // في حال تم الخروج فجأة، نظف الوضع
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isFullscreen]);

//   return (
//     <div className="all">
//       {isFullscreen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 pt-20"
//           onClick={() => setIsFullscreen(false)} // إغلاق عند النقر بالخارج
//         >
//           <img
//             src={x.urlimage}
//             alt="Fullscreen Project"
//             className="max-w-full max-h-full object-contain"
//           />
//           <button
//             className="absolute top-5 right-5 text-white text-4xl"
//             onClick={() => setIsFullscreen(false)}
//           >
//             &times;
//           </button>
//         </div>
//       )}
//       <NavBar onClick={onClick} />
//       <Link
//         to={"/#Projects"}
//         // onClick={() => navigate(-1)}
//         className="text-3xl absolute top-28 left-16 text-blue flex items-center gap-2 cursor-pointer"
//       >
//         <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="text-xl" />{" "}
//         <p>Back</p>{" "}
//       </Link>
//       <div
//         className={`project-details ${theme} w-11/12 h-screen pt-20 bg-white mx-auto my-0 flex justify-between items-center dark:bg-darkybg`}
//       >
//         <div className="flex justify-between h-96">
//           <div className="project-image touch-auto border border-solid border-blacky rounded overflow-hidden relative">
//             <img src={x.urlimage} alt="" className=" w-full" />
//             <div className="overlay absolute -top-28 left-0 right-0 bottom-0 invisible flex justify-center items-center gap-5">
//               <button
//                 className="w-16 h-16 hover:scale-125"
//                 onClick={() => setIsFullscreen(true)}
//               >
//                 <TbArrowsMaximize className="text-white w-full h-full" />
//               </button>
//               <a href={x.demo} className="w-14 h-14 hover:scale-125">
//                 <LuCircleArrowOutUpRight className="text-white w-full h-full" />
//               </a>
//             </div>
//           </div>
//           <div className="info max-w-lg">
//             <div className="about-project">
//               <div className="top flex justify-between">
//                 <div>
//                   <h1 className="title-project text-3xl text-blacky font-semibold dark:text-blue">
//                     {x.title}
//                   </h1>
//                   <p className="date text-mygray dark:text-gray-300">
//                     {x.date}
//                   </p>
//                 </div>
//                 <a href={x.demo}>
//                   <img src={Icon} alt="" />
//                 </a>
//               </div>
//               <p className="info-project pt-2 text-gray-700 text-xl dark:dark:text-gray-200">
//                 {x.desc}
//               </p>
//               <div className="tools pt-3 pb-5">
//                 <div>
//                   <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                     Basic Languages:
//                   </h3>
//                   <span className=" text-xl text-blue font-semibold ">
//                     {x.basicLanguages}
//                   </span>
//                 </div>
//                 {x.frameworks == "" ? (
//                   ""
//                 ) : (
//                   <div>
//                     <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                       Frameworks:
//                     </h3>
//                     <span className=" text-xl text-blue font-semibold">
//                       {x.frameworks}
//                     </span>
//                   </div>
//                 )}

//                 {x.libraries == "" ? (
//                   ""
//                 ) : (
//                   <div>
//                     <h3 className=" text-xl text-blacky inline-block mr-5 dark:text-white font-bold">
//                       Libraries:
//                     </h3>
//                     <span className=" text-xl text-blue font-semibold">
//                       {x.libraries}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               <div className="link-project">
//                 <a
//                   href={x.github}
//                   target="_blank"
//                   className="bg-blue flex items-center gap-2 w-40 py-3 px-5 font-semibold text-white rounded-md no-underline hover:text-blue hover:bg-white hover:border-solid hover:border hover:border-blue"
//                 >
//                   <span>Github Repo</span>
//                   <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-px border border-dashed border-blue relative">
//         <div className="absolute border-4 border-blue border-solid rounded-full w-6 h-6 -translate-y-1/2 bg-white left-1/2"></div>
//       </div>
//       <BestProjects />
//       <Footer />
//     </div>
//   );
// };

// export default ProjectDetails;

// ==================================================================================

import NavBar from "./../NavBar/NavBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import MyProjects from "../MyProjects";
import "./ProjectStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "./../../assets/images/Icon.svg";
import BestProjects from "../BestProjects/BestProjects";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import maximizeIcon from "./../../assets/images/maximize.svg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectDetails = ({ onClick }) => {
  let key = useParams();
  const [currentProjectId, setCurrentProjectId] = useState(key.id);
  const x = MyProjects.find((e) => e.id == currentProjectId);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // لمتابعة الصورة الحالية في السلايد
  const [justLoaded, setJustLoaded] = useState(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);

  useEffect(() => {
    if (key.id !== currentProjectId) {
      setAnimateNow(false); // خروج

      const timeout = setTimeout(() => {
        setCurrentProjectId(key.id); // تحديث المشروع بعد الخروج
        setAnimateNow(true); // دخول
      }, 700); // مدة أنيميشن الخروج

      return () => clearTimeout(timeout);
    }
  }, [key.id, currentProjectId]);

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
    if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (justLoaded && ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight;
      if (isVisible) {
        setAnimateNow(true);
        setJustLoaded(false);
      }
    }
  }, [pathname]);

  // منع التمرير عند فتح الصورة
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreen) return;

      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50; // الحد الأدنى للسحب

    if (distance > minSwipeDistance) {
      handleNextImage(); // سحب لليسار
    } else if (distance < -minSwipeDistance) {
      handlePrevImage(); // سحب لليمين
    }

    // إعادة التهيئة
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // دالة للتنقل بين الصور في السلايد
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % x.gallery.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + x.gallery.length) % x.gallery.length
    );
  };

  return (
    <div className="all">
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-[1000000] pt-20"
          onClick={() => setIsFullscreen(false)} // إغلاق عند النقر بالخارج
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={x.gallery[currentImageIndex]} // الصورة الحالية
              alt="Fullscreen Project"
              className="max-w-full max-h-full object-contain"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setIsFullscreen(false)}
            >
              &times;
            </button>

            {/* أزرار التنقل بين الصور */}
            <button
              className="group absolute left-5 w-14 h-14 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation(); // منع غلق النافذة
                handlePrevImage();
              }}
            >
              <span className="text-3xl font-light group-hover:font-normal transition-all duration-300">&#8249;</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              className="group absolute right-5 w-14 h-14 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation(); // منع غلق النافذة
                handleNextImage();
              }}
            >
              <span className="text-3xl font-light group-hover:font-normal transition-all duration-300">&#8250;</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 w-full z-[999999] pointer-events-none">
        <div className="w-[92%] max-w-7xl h-14 flex justify-between items-center mx-auto mt-4 px-8 py-0 glass-panel rounded-2xl max-lg:px-6 max-sm:px-4 pointer-events-auto">

          <button
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = "/#Projects";
              }
            }}
            className="group text-blue flex items-center gap-2 cursor-pointer glass-panel rounded-xl px-4 py-2 border border-blue/20 shadow-[0_0_30px_rgba(56,189,248,0.12)] hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] hover:border-blue/40 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 bg-transparent"
          >
            <div className="w-7 h-7 max-sm:w-6 max-sm:h-6 rounded-lg bg-blue/10 border border-blue/30 flex items-center justify-center group-hover:bg-blue/20 group-hover:border-blue/50 transition-all duration-300">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="text-base max-sm:text-sm" />
            </div>
            <span className="font-medium text-base max-sm:text-sm">Back to Projects</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <div className="logo text-2xl font-bold text-white tracking-tight">
            Dev.<span className="text-blue">Mohammed</span>
          </div>
        </div>
      </div>

      <div
        className="project-details w-11/12 min-h-screen pt-24 mx-auto my-0 flex justify-center items-center max-lg:h-auto max-lg:mb-24 max-sm:pt-20"
      >
        <div className="flex justify-between h-96 gap-8 max-lg:flex-col max-lg:my-auto max-lg:items-center max-lg:h-auto max-lg:mt-24 max-sm:gap-6 max-sm:h-auto">
          <motion.div
            ref={ref}
            className="project-image touch-auto border border-solid border-blue/20 rounded-3xl overflow-hidden relative max-lg:max-h-96 max-lg:w-full max-sm:max-h-72 max-[400px]:max-h-60 glass-panel shadow-[0_0_90px_rgba(56,189,248,0.14)] group"
            initial={{ opacity: 0, x: -100 }}
            animate={
              animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.7 }}
          >
            <img src={x.urlimage} alt="" className="w-full min-h-96 object-cover max-sm:min-h-72 max-[400px]:min-h-60 group-hover:scale-105 transition-transform duration-500" />
            <div className="overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <button
                onClick={() => setIsFullscreen(true)}
                className="group/btn relative px-6 py-3 bg-blue/10 backdrop-blur-md border border-blue/30 rounded-full text-white font-semibold text-base hover:bg-blue/20 hover:border-blue/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-eye" className="text-sm" />
                  View Project
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue/20 to-cyan/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </motion.div>

          <div className="info max-w-lg max-lg:max-w-full max-lg:px-4">
            <motion.div
              ref={ref}
              className="about-project glass-panel glow-card rounded-3xl p-8 max-sm:p-5"
              initial={{ opacity: 0, x: 100 }}
              animate={
                animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.7 }}
            >
              <div className="top flex justify-between items-start max-sm:flex-col max-sm:gap-3">
                <div>
                  <h1 className="title-project text-4xl text-white font-black tracking-[-0.04em] max-lg:text-3xl max-sm:text-2xl">
                    {x.title}
                  </h1>
                  <p className="date text-slate-400 pt-1 max-sm:text-sm">
                    {x.date}
                  </p>
                </div>
                <a
                  href={x.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2.5 bg-blue/10 backdrop-blur-md border border-blue/30 rounded-xl text-white font-semibold text-sm hover:bg-blue/20 hover:border-blue/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    Live Demo
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              <p className="info-project pt-5 text-slate-300 text-lg leading-8 max-lg:text-base max-sm:text-sm max-sm:leading-7">
                {x.desc}
              </p>
              <div className="tools pt-5 pb-6 space-y-2">
                <div className="max-sm:flex max-sm:flex-col max-sm:gap-1">
                  <h3 className=" text-lg text-white inline-block mr-5 font-bold max-sm:text-base max-sm:mr-0">
                    Basic Languages:
                  </h3>
                  <span className=" text-lg text-blue font-semibold max-sm:text-base">
                    {x.basicLanguages}
                  </span>
                </div>
                {x.frameworks && (
                  <div className="max-sm:flex max-sm:flex-col max-sm:gap-1">
                    <h3 className=" text-lg text-white inline-block mr-5 font-bold max-sm:text-base max-sm:mr-0">
                      Frameworks:
                    </h3>
                    <span className=" text-lg text-blue font-semibold max-sm:text-base">
                      {x.frameworks}
                    </span>
                  </div>
                )}
                {x.libraries && (
                  <div className="max-sm:flex max-sm:flex-col max-sm:gap-1">
                    <h3 className=" text-lg text-white inline-block mr-5 font-bold max-sm:text-base max-sm:mr-0">
                      Libraries:
                    </h3>
                    <span className=" text-lg text-blue font-semibold max-sm:text-base">
                      {x.libraries}
                    </span>
                  </div>
                )}
              </div>

              <div className="link-project">
                <a
                  href={x.github}
                  target="_blank"
                  className="group relative px-5 py-3 bg-blue/10 backdrop-blur-md border border-blue/30 rounded-xl text-white font-semibold text-sm hover:bg-blue/20 hover:border-blue/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center gap-2 w-44 max-sm:w-full"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon="fa-brands fa-github" className="text-base" />
                    GitHub Repository
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full h-px border border-dashed border-blue relative">
        <div className="absolute border-4 border-blue border-solid rounded-full w-6 h-6 -translate-y-1/2 bg-darkybg left-1/2 shadow-[0_0_30px_rgba(56,189,248,0.5)]"></div>
      </div>
      <BestProjects />
      <Footer />
    </div>
  );
};

export default ProjectDetails;

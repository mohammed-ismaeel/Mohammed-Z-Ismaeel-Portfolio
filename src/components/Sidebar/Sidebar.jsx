import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const Sidebar = ({ navLinks, onClose, activeSection }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999]"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 h-full w-80 max-sm:w-72 max-[400px]:w-64 glass-panel z-[1000000] border-l border-blue/20 shadow-[0_0_100px_rgba(56,189,248,0.15)]"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue/10 border border-blue/30 flex items-center justify-center">
                <span className="text-blue font-bold text-lg">M</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Menu
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaXmark className="text-xl" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="flex flex-col gap-2">
              {navLinks?.map((ele, index) => {
                const isActive = activeSection === ele;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${ele}`}
                      onClick={onClose}
                      className={`
                        relative w-full px-5 py-4 rounded-xl font-medium text-base transition-all duration-300
                        flex items-center gap-4 group
                        ${isActive
                          ? 'bg-blue/10 text-blue border border-blue/30 shadow-[0_0_30px_rgba(56,189,248,0.15)]'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/30 border border-transparent'
                        }
                      `}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue rounded-r-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Icon placeholder */}
                      <span className={`
                        w-8 h-8 rounded-lg flex items-center justify-center text-sm
                        ${isActive
                          ? 'bg-blue/20 text-blue'
                          : 'bg-slate-700/30 text-slate-400 group-hover:bg-slate-600/30 group-hover:text-slate-300'
                        }
                        transition-all duration-300
                      `}>
                        {ele.charAt(0)}
                      </span>

                      <span className="flex-1">{ele}</span>

                      {/* Arrow indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-2 h-2 rounded-full bg-blue shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="p-6 border-t border-blue/10">
            <p className="text-slate-400 text-sm mb-4 text-center">Connect with me</p>
            <ul className="flex justify-center gap-3 max-sm:gap-2">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL",
                  icon: "fa-brands fa-square-facebook",
                },
                {
                  href: "https://t.me/Moh_Ismaeel",
                  icon: "fa-brands fa-telegram",
                },
                {
                  href: "www.linkedin.com",
                  icon: "fa-brands fa-linkedin",
                },
                {
                  href: "https://github.com/mohammed-ismaeel/",
                  icon: "fa-brands fa-square-github",
                },
                {
                  href: "https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw==",
                  icon: "fa-brands fa-square-instagram",
                },
              ].map((social, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-xl bg-slate-800/50 border border-slate-600/30 text-slate-300 hover:text-white hover:border-blue/50 hover:bg-blue/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] flex items-center justify-center"
                  >
                    <i className={social.icon + " text-xl"}></i>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

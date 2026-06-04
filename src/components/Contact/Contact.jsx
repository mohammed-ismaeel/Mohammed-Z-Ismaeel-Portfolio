import React, { useEffect } from "react";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import phoneImg from "./../../assets/images/phone.svg";
import gmailImg from "./../../assets/images/gmail.svg";
import locationImg from "./../../assets/images/location.svg";
import { MuiTelInput } from "mui-tel-input";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 });

  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [direction, setDirection] = useState("down");
  const [animateNow, setAnimateNow] = useState(false);

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
    if (isInView && direction === "down") {
      setAnimateNow(true);
    }
  }, [isInView, direction]);

  return (
    <section
      className="contact w-4/5 mx-auto my-0 py-10 px-0 max-xl:py-8 max-lg:py-6 max-sm:py-4 max-xl:w-10/12 max-lg:w-11/12 max-sm:w-11/12"
      id="Contact"
    >
      <motion.p
        ref={ref}
        className="section-kicker"
        initial={{ opacity: 0, y: 40 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span>Contact</span>
      </motion.p>
      <motion.h1
        ref={ref}
        className="text-white max-sm:text-2xl max-sm:text-wrap text-4xl w-max my-0 mx-auto font-black pt-3 tracking-[-0.04em] max-lg:text-3xl"
        initial={{ opacity: 0, y: -100 }}
        animate={animateNow ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        Let's Discuss Your <span className="text-blue">Project</span>
      </motion.h1>

      <div className="contact-info flex justify-between pt-12 gap-20 max-lg:flex-col max-lg:gap-12 max-sm:gap-8 max-sm:pt-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          className="info w-1/3 flex flex-col gap-5 max-lg:w-full max-lg:mx-auto max-sm:gap-4"
          animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactInfoCard
            image={phoneImg}
            label={"Call me"}
            value={"+963 998-740-059"}
          />
          <ContactInfoCard
            image={gmailImg}
            label={"Email me"}
            value={"mohammed.z.ismaeel@gmail.com"}
          />
          <ContactInfoCard
            image={locationImg}
            label={"Address"}
            value={"Rukn-Aldin, Damascus, Syria."}
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          className="form w-2/3 flex justify-end max-lg:w-full max-lg:justify-start"
          animate={animateNow ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-sm:gap-4 max-w-2xl max-lg:w-full max-lg:justify-start max-lg:max-w-full glass-panel rounded-3xl p-8 max-sm:p-6"
            method="POST"
          >
            <input
              type="hidden"
              name="apikey"
              value="60cdcb2b-40b6-4a3c-9df2-4917c0f5b49c"
            />

            <input
              type="text"
              placeholder="Full name"
              required
              className="w-full h-14 max-sm:h-12 border border-solid border-slate-700 bg-[#0b1120]/80 text-white rounded-xl pl-4 outline-none focus:border-blue focus:border-2 placeholder:text-slate-500 max-sm:text-sm"
              id="fullname"
              name="fullname"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full h-14 max-sm:h-12 border border-solid border-slate-700 bg-[#0b1120]/80 text-white rounded-xl pl-4 outline-none focus:border-blue focus:border-2 placeholder:text-slate-500 max-sm:text-sm"
              id="youremail"
              name="youremail"
            />

            <MuiTelInput
              value={value}
              onChange={handleChange}
              className="w-full"
              defaultCountry="SY"
              required
              placeholder="Your Phone"
              id="phone"
              name="phone"
              sx={{
                '& .MuiInputBase-root': {
                  height: '56px',
                  backgroundColor: 'rgba(11, 17, 32, 0.8)',
                  borderRadius: '12px',
                  border: '1px solid rgb(51, 65, 85)',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'rgb(56, 189, 248)',
                  },
                  '&.Mui-focused': {
                    borderColor: 'rgb(56, 189, 248)',
                    borderWidth: '2px',
                  },
                  '@media (max-width: 640px)': {
                    height: '48px',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                  paddingLeft: '16px',
                  '@media (max-width: 640px)': {
                    fontSize: '14px',
                  },
                },
                '& .MuiTelInput-Menu': {
                  backgroundColor: 'rgba(11, 17, 32, 0.95)',
                  color: 'white',
                },
                '& .MuiTelInput-MenuItem': {
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  },
                },
              }}
            />

            <div className="flex items-center gap-2 w-full rounded-xl border border-solid border-slate-700 bg-[#0b1120]/80">
              <select
                name="currency"
                id="currency"
                className="h-14 max-sm:h-12 pl-4 pr-2 bg-transparent text-slate-300 rounded-l-xl outline-none focus:border-blue focus:border-2 max-sm:text-sm"
                required
              >
                <option value="USD">$ (USD)</option>
                <option value="EUR">€ (EUR)</option>
              </select>

              <input
                type="number"
                placeholder="Budget"
                required
                className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none flex-1 h-14 max-sm:h-12 pl-3 outline-none rounded-r-xl text-white bg-transparent placeholder:text-slate-500 max-sm:text-sm"
                id="budget"
                name="budget"
              />
            </div>
            <textarea
              id="textarea"
              placeholder="Message"
              required
              className="w-full h-32 max-sm:h-24 border border-solid border-slate-700 bg-[#0b1120]/80 text-white rounded-xl py-3 px-4 outline-none resize-none focus:border-blue focus:border-2 placeholder:text-slate-500 max-sm:text-sm"
              name="message"
            ></textarea>

            {/* <!-- Honeypot Spam Protection --> */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue text-white font-semibold text-base h-14 max-sm:h-12 cursor-pointer rounded-xl border border-blue/40 hover:bg-white hover:border-solid hover:border-blue hover:text-blue focus:border-blue focus:border-2 shadow-[0_0_32px_rgba(56,189,248,0.28)] transition-all duration-300 max-sm:text-sm"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

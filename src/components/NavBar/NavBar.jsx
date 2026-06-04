import Button from "../Button/Button";
import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa6";

const NavBar = ({ onClick, navLinks,onSidebar }) => {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuLinks = menu.querySelectorAll("a");
    const activeClass = "nav-active";

    // إضافة الحسابات للرابط النشط الحالي
    const menuLinkActive = menu.querySelector("li.nav-active");
    if (menuLinkActive) {
      doCalculations(menuLinkActive);
    }

    // مستمع لأحداث التمرير
    window.addEventListener("scroll", handleScroll);

    // إضافة مستمعي الأحداث لكل رابط
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener("click", function (e) {
        e.preventDefault(); // لمنع السلوك الافتراضي للرابط

        const sectionId = menuLink.getAttribute("href");

        if (sectionId === "#") {
          // التمرير إلى أعلى الصفحة عند النقر على "Home"
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // تمرير الصفحة إلى القسم المطلوب بسلاسة
          const section = document.querySelector(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }

        // تحديث الرابط النشط
        updateActiveLink(menuLink);
      });
    });

    // عند انتهاء التحريك، يتم تغيير لون النص إلى الأبيض
    menu.addEventListener("transitionend", function () {
      const currentActive = menu.querySelector("li.nav-active");
      if (currentActive) {
        currentActive.querySelector("a").style.color = "white";
      }
    });

    // إعادة حساب الموقع والحجم عند تغيير حجم النافذة
    window.addEventListener("resize", function () {
      const menuLinkActive = menu.querySelector("li.nav-active");
      if (menuLinkActive) {
        doCalculations(menuLinkActive);
      }
    });

    return () => {
      menuLinks.forEach((menuLink) => {
        menuLink.removeEventListener("click", () => {});
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  function handleScroll() {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.getBoundingClientRect().height;

      // إذا كان القسم في منتصف الشاشة تقريبًا
      if (
        sectionTop <= window.innerHeight / 2 &&
        sectionTop + sectionHeight >= window.innerHeight / 2
      ) {
        currentSectionId = `#${section.id}`;
      }
    });

    if (currentSectionId) {
      const menuLink = document.querySelector(`a[href="${currentSectionId}"]`);
      if (menuLink) {
        updateActiveLink(menuLink);
      }
    }
  }

  function updateActiveLink(menuLink) {
    const menu = document.querySelector(".menu");
    const activeClass = "nav-active";

    // تحديث الرابط النشط
    const currentActive = menu.querySelector("li.nav-active");
    if (currentActive) {
      currentActive.querySelector("a").style.color = "";
      currentActive.classList.remove(activeClass);
    }

    menuLink.parentElement.classList.add(activeClass);
    doCalculations(menuLink.parentElement);
  }

  function doCalculations(link) {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.style.setProperty("--transformJS", `${link.offsetLeft}px`);
      menu.style.setProperty("--widthJS", `${link.offsetWidth}px`);
    }
  }
  return (
    <div className="app-navbar fixed top-0 left-0 w-full z-[999999] pointer-events-none">
    <nav className="w-[92%] max-w-7xl h-16 flex justify-between items-center mx-auto mt-4 px-8 py-0 glass-panel rounded-2xl max-lg:px-6 max-sm:px-4 pointer-events-auto">
      <div className="logo text-xl font-bold text-white tracking-tight">
        Dev.<span className="text-blue">Mohammed</span>
      </div>
      <ul className="flex gap-4 menu max-lg:hidden">
        {navLinks?.map((ele, index) => {
          return (
            <li key={index} className={`nav-link ${index === 0 ? "nav-active" : ""}`}>
              <a
                href={`#${ele}`}
                className={`text-slate-200 inline-block relative px-3.5 py-1.5 z-10 font-medium hover:cursor-pointer no-underline hover:text-blue transition-colors`}
              >
                {ele}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-5 lg:hidden">
        <button className="text-white" onClick={onSidebar}>
          <FaBars style={{ fontSize: "25px" }} />
        </button>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;

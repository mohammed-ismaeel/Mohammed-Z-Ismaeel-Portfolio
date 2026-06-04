const Footer = () => {
  return (
    <footer className="w-4/5 h-16 flex max-md:flex-col max-md:h-auto max-md:gap-2 max-md:py-5 mx-auto my-0 justify-between items-center border-t border-solid border-blue/20">
      <p className="text-white text-sm font-medium">
        @ 2026. All Rights Reserved
      </p>
      <p className="text-white text-sm font-medium text-center">
        Designed & Developed by
        <span className="text-blue font-bold"> MOHMAMMED ISMAEEL</span>
      </p>
      <ul className="social flex gap-3 list-none">
        <li>
          <a
            className="group w-10 h-10 glass-panel rounded-xl border border-blue/20 flex items-center justify-center hover:border-blue/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            href="https://www.facebook.com/profile.php?id=100021454752122&mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook text-blue text-lg group-hover:text-white transition-colors duration-300"></i>
          </a>
        </li>
        <li>
          <a
            className="group w-10 h-10 glass-panel rounded-xl border border-blue/20 flex items-center justify-center hover:border-blue/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            href="https://t.me/Moh_Ismaeel"
            target="_blank"
          >
            <i className="fa-brands fa-telegram text-blue text-lg group-hover:text-white transition-colors duration-300"></i>
          </a>
        </li>
        <li>
          <a
            className="group w-10 h-10 glass-panel rounded-xl border border-blue/20 flex items-center justify-center hover:border-blue/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin text-blue text-lg group-hover:text-white transition-colors duration-300"></i>
          </a>
        </li>
        <li>
          <a
            className="group w-10 h-10 glass-panel rounded-xl border border-blue/20 flex items-center justify-center hover:border-blue/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            href="https://github.com/mohammed-ismaeel/"
            target="_blank"
          >
            <i className="fa-brands fa-square-github text-blue text-lg group-hover:text-white transition-colors duration-300"></i>
          </a>
        </li>
        <li>
          <a
            className="group w-10 h-10 glass-panel rounded-xl border border-blue/20 flex items-center justify-center hover:border-blue/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            href="https://www.instagram.com/mohammad___ismaeel?igsh=MTE5ZGoycWZiejIwbw=="
            target="_blank"
          >
            <i className="fa-brands fa-square-instagram text-blue text-lg group-hover:text-white transition-colors duration-300"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

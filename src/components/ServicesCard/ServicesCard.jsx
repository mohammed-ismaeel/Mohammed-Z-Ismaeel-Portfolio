import "./ServicesCardStyle.css";

const ServicesCard = ({ icon, title, desc }) => {
  return (
    <div className="card w-full h-full flex flex-col glass-panel glow-card rounded-2xl text-center py-8 px-4 max-sm:py-6 max-sm:px-3 border border-slate-700/60">
      <div className="flex justify-center items-center flex-shrink-0">
        <div className="w-16 h-16 flex justify-center items-center max-lg:w-14 max-lg:h-14 max-sm:w-12 max-sm:h-12 text-blue bg-blue/10 border border-blue/20 rounded-2xl shadow-[0_0_36px_rgba(56,189,248,0.14)]">{icon}</div>
      </div>
      <h2 className="text-white text-lg font-bold pt-6 flex-shrink-0 max-sm:text-base max-sm:pt-4">{title}</h2>
      <p className="text-slate-400 pt-3 text-[15px] max-lg:text-sm max-sm:text-xs leading-6 flex-grow">{desc} </p>
    </div>
  );
};

export default ServicesCard;
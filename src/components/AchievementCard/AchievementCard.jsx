const AchievementCard = ({ value, detail }) => {
  return (
    <div className="achievement-card w-1/3 text-center glass-panel glow-card rounded-2xl py-4 px-5">
      <h2 className=" text-3xl font-bold text-blue max-sm:text-2xl">
        {value}
      </h2>
      <p className="text-slate-300 max-sm:text-sm text-nowrap">{detail}</p>
    </div>
  )
}

export default AchievementCard

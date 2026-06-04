const AchievementCard = ({ value, detail }) => {
  return (
    <div className="achievement-card w-1/3 min-w-0 text-center glass-panel glow-card rounded-2xl py-4 px-5 max-sm:px-3 max-sm:py-3">
      <h2 className="text-3xl font-bold text-blue max-sm:text-2xl max-[380px]:text-xl leading-none">
        {value}
      </h2>
      <p className="text-slate-300 max-sm:text-xs max-[380px]:text-[11px] leading-snug break-words whitespace-normal">
        {detail}
      </p>
    </div>
  )
}

export default AchievementCard

import './ButtonStyle.css'
const Button = ({ contentButton, href, target }) => {
  return (
    <button
      className="button min-w-28 h-11 text-nowrap px-5 border border-blue/40 bg-blue font-semibold rounded-xl hover:cursor-pointer hover:bg-white hover:border-blue hover:border hover:border-solid shadow-[0_0_32px_rgba(56,189,248,0.28)] hover:shadow-[0_0_48px_rgba(56,189,248,0.45)] transition-all duration-300"
    >
      <a href={href} target={target} className="text-white hover:text-blue">
        {contentButton}
      </a>
    </button>
  )
}

export default Button

import './ContactInfoCardStyle.css'
const ContactInfoCard = ({ image, label, value }) => {
  return (
    <div className="contact-card glass-panel glow-card rounded-2xl p-4">
      <img src={image} alt="" />
      <div className="information">
        <p className="label pb-1 text-slate-400">{label}</p>
        <p className="vs text-white font-semibold">
          {value}
        </p>
      </div>
    </div>
  )
}

export default ContactInfoCard

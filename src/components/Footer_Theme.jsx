import '../css/Footer_Theme.css'

const Footer_Theme = ({logo, about, socialLinks}) => {
  const keys = Object.keys(socialLinks)
  const values = Object.values(socialLinks)
  return (
    <div className="ftr">
      <img src={logo} alt="Logo" className="lgo" />
      {keys.map((key) => (
        <a className="links" href={socialLinks[key].theLink}>{socialLinks[key].theLogo}</a>
      ))}
      <hr className='line'/>
      <p className='about'>{about}</p>
    </div>
  )
}

export default Footer_Theme
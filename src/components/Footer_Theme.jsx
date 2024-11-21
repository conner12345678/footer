const Footer_Theme = ({logo, about, socialLinks}) => {
  const keys = Object.keys(socialLinks)
  const values = Object.values(socialLinks)
  return (
    <div className="ftr">
      <img src={logo} alt="Logo" className="lgo" />
      <p className='about'>{about}</p>
      {keys.map((key) => (
        <a href={socialLinks[key].theLink}>{socialLinks[key].theLogo}</a>
      ))}
    </div>
  )
}

export default Footer_Theme
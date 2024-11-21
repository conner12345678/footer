import Footer_Theme from '../components/Footer_Theme';
import { FaGithub } from "react-icons/fa";

const Footer_Page = () => {
  return (
    <Footer_Theme logo='https://www.inquirer.com/resizer/yMCs3mgc-4b3hxAMeaho6H8BVbw=/760x507/smart/filters:format(webp)/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/J4QDHA4WPZHJJJKAUWMI6HGL6A.jpg' about='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum, distinctio fuga modi eius tempora dignissimos corporis soluta! Expedita, adipisci?' socialLinks={{github:{theLink:'https://github.com/conner12345678', theLogo:<FaGithub />}}}/>
  )
}

export default Footer_Page
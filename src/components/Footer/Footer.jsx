import { Link } from 'react-router-dom';
import { FacebookIcon, FooterStyled, InstagramIcon, LinkedinIcon, Social } from './Footer.style';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
    const handleInstagramClick = () => {
      window.location.href = 'https://www.instagram.com/';
    };
  
    const handleFacebookClick = () => {
      window.location.href = 'https://www.facebook.com/';
    };
  
    const handleTwitterClick = () => {
      window.location.href = 'https://twitter.com/';
    };
  return (<>
    <FooterStyled>
    <Social>
          <InstagramIcon onClick={handleInstagramClick}>
            <FaInstagram />
          </InstagramIcon>
          <FacebookIcon onClick={handleFacebookClick}>
            <FaFacebook />
          </FacebookIcon>
          <LinkedinIcon onClick={handleTwitterClick}>
          <FaLinkedin />
          </LinkedinIcon>
        </Social>
      <Social>
    <span className='FooterDate'>{"© "}</span>
      <Link
        className='FooterDescription'
        href="https://github.com/VitaPerevoznikova"
        target="_blank"
        rel="noopener noreferrer"
      >
       <p>Created by Vita Perevoznikova</p>
      </Link>
      <span className='FooterDate'>
      {new Date().getFullYear()}
      {"."}
      </span>
      </Social>
    </FooterStyled>
    </>
  );
}
export default Footer;
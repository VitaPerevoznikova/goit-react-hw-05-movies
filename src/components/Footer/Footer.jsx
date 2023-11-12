import { Link } from 'react-router-dom';
import { FooterStyled } from './Footer.style';


const Footer = () => {
  return (<>
    <FooterStyled>
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
    </FooterStyled>
    </>
  );
}
export default Footer;
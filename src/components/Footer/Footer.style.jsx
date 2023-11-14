import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const FooterStyled = styled.footer`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 264px;
  margin: auto;
  padding: 20px;
  gap: 24px;
  cursor: pointer;
  width: 100%;
 
  .FooterDescription {
    color: var(--wite);
    font-size: 16px; 
    :hover,
    :focus{
        color:var(--orange);
    }
  }

  .FooterDate {
    display: block;
    color: var(--wite);
    font-size: 14px;
  }
  
   svg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    background-color: var(--dark);
    border-radius:50%;
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
  }

  svg:hover,
  svg:focus {
    fill: var(--wite);
    background-color: var(--orange);
    transform: scale(1.2);
  }
`
export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:15px;
`;
export const InstagramIcon = styled(FaInstagram)`
  width: 24px;
  height: 24px;
  color:var(--wite);
`;

export const FacebookIcon = styled(FaFacebook)`
  width: 24px;
  height: 24px;
  color:var(--wite);
`;

export const LinkedinIcon = styled(FaLinkedin )`
  width: 24px;
  height: 24px;
  color:var(--wite);
`;
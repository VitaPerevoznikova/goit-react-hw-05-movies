import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: inline-block;

  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 15px;

  color: var(--wite);
  background-color: var(--grey);

  :hover {
    background: var(--orange);
    box-shadow: 0px 0px 25px 0px rgba(255, 14, 30, 0.5);
  }
`;

export const FilmWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const FilmImg = styled.img`
  max-width: 182px;
  background: #424242;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`
  display: inline-block;
  border-bottom: 2px solid var(--orange);
  font-size: 26px;
  margin-bottom: 12px;
  color: var(--wite);
`;

export const FilmSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
  color: var(--wite);
`;

export const FilmDescription = styled.p`
  font-size: 16px;
  color: #888888;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;

  border-radius: 20px;
  color: var(--wite);
`;

export const TitleDetails = styled.h2`
  margin-top: 20px;
  color: var(--wite);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 24px 0 24px 0;
`;

export const NavLinks = styled(NavLink)`
border-radius: 25px;
padding:10px 30px;
border-radius: 15px;
background: var(--grey);
color: var(--wite);

  &.active {
    background: var(--orange);
    box-shadow: 0px 0px 25px 0px rgba(255, 14, 30, 0.50);
  }
   
}
`;

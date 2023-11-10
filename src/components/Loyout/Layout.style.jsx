import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
padding: 25px;
background-color: var(--dark);
`;
export const StyledHeader = styled.header`
width:100%;
`
export const StyledList = styled.header`
  display: flex;
  gap: 50px;
  align-items: baseline;
  font-size: 18px;
  padding: 20px;
  border-bottom: 0.5px solid rgba(216, 216, 216, 0.45);
  background-color: rgba(13, 12, 17, 0.02);
`;

export const StyledItem = styled.nav`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
border-radius: 15px;
padding:10px 30px;
background: #17161B;
color: var(--wite);
  &.active {
    color: var(--orange);

  }
`;

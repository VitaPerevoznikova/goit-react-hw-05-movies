import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const StyledHeader = styled.header`
width:100%;
`
export const StyledList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: baseline;
  font-size: 18px;
  padding: 20px 20px 20px 0;
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
background: var(--grey);
color: var(--wite);
  &.active {
    background: var(--orange);
    box-shadow: 0px 0px 25px 0px rgba(255, 14, 30, 0.50);
  }
`;

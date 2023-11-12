import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: var(--grey);
  text-align: center; 
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 44px;
  
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
 
 

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

`
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: var(--grey);
  padding: 50px 0;
  text-align: center; 

  .FooterDescription {
    color: var(--wite);
    margin-right: 10px;
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
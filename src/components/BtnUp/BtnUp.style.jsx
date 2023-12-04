import styled from 'styled-components';

export const ScrollButton = styled.button`
background-color: #333;
color: white;
border: none;
padding: 10px 20px;
cursor: pointer;
outline: none;
position: fixed;
bottom: ${props => props.isVisible ? "3.5rem" : "-60px"};
right: 2rem;
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;
opacity: 0.8;
transition: bottom 0.3s ease-in-out;

:hover {
  background-color: var(--orange);
  }
`;
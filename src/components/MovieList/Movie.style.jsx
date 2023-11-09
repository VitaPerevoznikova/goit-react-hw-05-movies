import styled from 'styled-components';

export const GalleryCard = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;
export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const GalleryItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const GalleryDescription = styled.p`
    text-align: center;
    color: black;
    font-size: 20px;
`

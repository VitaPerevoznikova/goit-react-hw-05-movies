import styled from 'styled-components';

// export const GalleryCard = styled.ul`
//   padding-bottom:50px;
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
  
// `;

// export const GalleryItem = styled.li`
//   border-radius: 6px;
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//   0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   :hover {
//     transform: scale(1.03);
//     cursor: zoom-in;
//   }
// `;

// export const GalleryItemImg = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center; 
//   width: 100%;
//   object-fit: cover;
//   height: 100%;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;

// export const DescriptionContainer = styled.div`
// padding: 15px 5px;
// background-color: var(--grey);
// display: grid;
// place-items: center;
// height: 100%;
// min-height: 70px;
// `;

// export const GalleryTitle = styled.h3`
//   text-align: center;
//   color: var(--wite);
//   font-size: 24px;
// `;
//  export const GalleryDescription = styled.p`
//  color: var(--wite);
//  `
export const GalleryCard = styled.ul`
  padding-bottom: 50px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const GalleryItemImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: cover;
  height: 100%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DescriptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--grey);
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

export const GalleryTitle = styled.h3`
  text-align: center;
  color: var(--wite);
  font-size: 24px;
`;

export const GalleryDescription = styled.p`
  color: var(--wite);
  width:90%;
`;
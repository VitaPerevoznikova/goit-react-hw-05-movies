import styled from 'styled-components';

// export const FormContainer = styled.div`
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   margin-bottom: 15px;
//   color: #fff;

//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// `;
// export const FormStyle = styled.form`
//   display: flex;
//   gap:20px;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: var(--grey);
//   border-radius: 3px;
//   overflow: hidden;
// `;
// export const InputStyle = styled.input`
//   border: none;
//   overflow: hidden;
//   background-color: var(--grey);
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 27px;
//   color: var(--wite);
//   padding: 15px 16px;
//   border-radius: 10px;

//   :active,
//   :focus,
//   :hover {
//     color: white;
//   }
// `;


// export const SearchFormButton = styled.button`
//   // display: inline-block;
//   // width: 48px;
//   // height: 48px;
//   border: 0;
//   // opacity: 0.6;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;

//   border-radius: 25px;
//   padding: 10px 10px;
//   border-radius: 15px;

//   background: var(--grey);
//   color: var(--wite);

//   :hover {
//     background: var(--orange);
//     box-shadow: 0px 0px 25px 0px rgba(255, 14, 30, 0.50);
//   }
   
// }
// `;
export const FormContainer = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;

  padding: 12px 24px 12px 24px;
  margin-top: 20px;
  margin-bottom: 20px;

  color: var(--wite);
  background-color: var(--grey); 
  border-radius: 25px;
`;

export const FormStyle = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: var(--dark); 
  border-radius: 8px;
  overflow: hidden;
  padding: 16px;
`;

export const InputStyle = styled.input`
width: 100%;
  border: none;
  overflow: hidden;
  background-color: var(--grey); 
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
  padding: 15px 16px;
  border-radius: 10px;

  :active,
  :focus,
  :hover {
    color: var(--wite);
    outline: none;
    box-shadow: 0 0 5px var(--orange); 
  }
`;

export const SearchFormButton = styled.button`
  border: 0;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  padding: 15px 16px;
  background: var(--grey); 
  color: var(--wite);

  :hover {
    background: var(--orange);
    box-shadow: 0px 0px 25px 0px rgba(255, 14, 30, 0.5);
  }
`;
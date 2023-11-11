import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin-top: 12px;
`;
export const ReviewsItem = styled.li`
  font-size: 14px;
  padding: 6px;
//   background-color: #2a2a2a;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: var(--orange);
  }
`;
export const ReviewsDescr = styled.p`
  color: var(--wite);
  margin-top: 6px;
`;
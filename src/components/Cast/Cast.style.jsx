import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 15px;
  // justify-content: start;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const ListItem = styled.li`
  width: 240px;
  display: flex;
  font-size: 16px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: var(--grey);
  border-radius: 6px;
  border: 1px dotted #ff6550;
  text-align: center;
  line-height: 1.4;
`;

export const CastImg = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  width: 95px;
  height: 95px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CastTitleContainer = styled.div`
  margin-left: 15px;
`;

export const CastDescription = styled.p`
color:var(--wite);
`;

export const CastTitle = styled.span`
  margin-right: 5px;
  color: var(--orange);
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

import styled from 'styled-components';

export const ContainerUl = styled.ul`
  width: 300px;
  padding: 16px;
  background-color: #00331f;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  width: 180px;
  background-color: #99ffd6;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 4px 5px 4px rgb(0, 255, 153);
`;
export const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ prop }) => (prop ? '#00ff00' : '#ff0000')};
`;

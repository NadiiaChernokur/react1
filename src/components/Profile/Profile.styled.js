import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 16px;
  background-color: #ff80ff;
  margin: auto;
`;
export const Img = styled.img`
  width: 90px;
  height: 100px;
  background-color: beige;
  border-radius: 50%;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
export const Text = styled.p`
  color: #0000ff;
  margin: 0;
`;
export const ListUl = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  background-color: #99ffd6;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 4px 5px 4px rgb(0, 255, 153);
`;

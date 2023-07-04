import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 500px;
  padding: 50px;
  display: flex;
  align-items: start;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p {
    font-size: 24px;
  }
`;

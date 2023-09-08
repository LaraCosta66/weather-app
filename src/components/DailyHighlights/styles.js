import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--gray-500);
  }
  .content-div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: overlay;
    opacity: 0.9;
    border-radius: 10px;
    padding: 10px 20px;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    .icon {
      width: 28px;
      height: 28px;
    }
  }
`;

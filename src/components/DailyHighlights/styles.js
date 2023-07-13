import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 15px;
h3{
    font-size:14px;
    color:var(--gray-500)
}
  .content-div{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 120px;
    background: var(--white);
    border-radius: 10px;
    padding:  10px;
  }
`;

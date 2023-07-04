import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
  padding: 30px;
  background: #475569;
  h2 {
    color: #fff;
    font-weight: bold;
  }
  .content input[type="text"] {
    width: 500px;
    height: 45px;
    padding: 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
    transition: filter 0.2s;
    &:hover {
      border: 2px solid lightgrey;
      box-shadow: 0px 0px 20px -17px;
      filter: brightness(0.9);
    }
    &:focus {
      border: 1px solid grey;
    }
  }
  .content button[type="button"] {
    width: 80px;
    height: 45px;
    margin-left: 5px;
    border: none;
    text-align: center;
    color: #fff;
    font-weight: bold;
    border-radius: 12px;
    background: #1163ff;
    /* background-color: rgb(255, 56, 86); */
  }
`;

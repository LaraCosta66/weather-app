import { styled } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 600px;
  border-radius: 30px 0 0 30px;
  padding: 15px;
  background: var(--white);

  h2 {
    color: #fff;
    font-weight: bold;
  }
  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .search-container input[type="text"] {
    border: none;
    border-bottom: 1px solid var(--gray-400);
    background: var(--white);
    font-size: 14px;
    padding: 2px;
  }
  #btnSearch {
    position: relative;
    display: flex;
    align-items: center;
    width: auto;
    height: 30px;
    border: none;
    padding: 5px;
    background-color: var(--gray-700);
    color: white;
    cursor: pointer;
    border-radius: 20%;
  }
  .icon {
    width: 40px;
    height: 20px;
  }
`;

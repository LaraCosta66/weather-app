import { styled } from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 100vh;
  padding: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  opacity: 0.9;

  .search-section {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    border: 1px solid grey;
    border-radius: 10px;
    #location {
      display: flex;

      gap: 10px;
    }
    .icon {
      width: 24px;
      height: 24px;
      color: #fff;
    }
    input {
      background: none;
      border: 0;
      outline: none;
      font-size: 1rem;
      color: #fff;
    }

    .btn {
      width: 100px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border: none;
      border-radius: 4px;
      overflow: hidden;
      font-weight: bold;
    }

    .text {
      width: 65%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: rgb(2, 153, 153);
    }

    .searchIcon {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: teal;
    }

    .btn:hover .text {
      background-color: rgb(0, 133, 133);
    }

    .btn:hover .svgIcon {
      background-color: rgb(0, 105, 105);
    }
  }

  .weatherSection {
    width: auto;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 10px;
    margin-top: 10px;
    border-bottom: 1px solid gray;

    .title {
      font-size: 3rem;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 30px;
    color: #fff;
    h2 {
      color: white;
    }
    .forecast-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      width: 300px;
      height: auto;
      padding: 10px;
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0.8;
      img {
        max-width: 48px;
        max-height: 48px;
      }
    }
    .condition {
      width: auto;
      font-size: 1.1rem;
      font-weight: bold;
      margin-right: 5px;
      color: white;
      .text-condition {
        color: #6b7280;
        font-size: 0.9rem;
      }
    }
    .tempture {
      border-left: 1px solid lightgrey;
      padding-left: 10px;
      height: 50px;
      P {
        font-size: 1.2rem;
        color: #6b7280;
        font-weight: bold;
      }
      .bold-text {
        color: white;
      }
    }
  }
`;

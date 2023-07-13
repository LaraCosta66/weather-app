import { styled } from "styled-components";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  background: var(--gray-200);
  padding: 20px;
  border-radius: 0 30px 30px 0;

  .header{
    width: 700px;
    height:100px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding:20px;
  }
  .header button{
    font-size:16px;
    font-weight: bolder;
    border-radius: 50%;
    border:none;
    background: var(--gray-700);
    color:#fff;
    width: 40px;
    height: 40px;
  }
`;
export const Content = styled.div`
display:flex;
flex-direction: row;
align-items: center;
gap:10px;


.content{
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 120px;
  height: 150px;
  padding:10px;
  border-radius: 10px;
  background: var(--white);
  font-weight: bold;
}
.min-p{
  color: var(--gray-400)
}
`;

import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1ps solid black;
  box-shadow: 0 0 10px 4px #888888;
  width: 70%;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  h1 {
    align-self: center;
    border-bottom: 3px solid blue;
  }
  input{
    margin: 20px;
  }
`;

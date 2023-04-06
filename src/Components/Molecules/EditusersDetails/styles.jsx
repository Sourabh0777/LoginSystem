import styled from 'styled-components';

export const Edit_Box = styled.div`
 
 background-color: white;
  border: 1px solid black;
  padding: 10px;
  position: absolute;
  margin: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button {
    padding: 10px;
    align-self: flex-start;
  }
  .Form {
    padding: 50px;
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid black;
      padding: 20px;
      margin: 20px;
    }
  }
`;
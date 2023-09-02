import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #78909C;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 20px auto;
    padding: 20px;
    border: none;
    border: 3px solid #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    color: #263238;

    &:hover {
    //box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.7); /* Nova sombra quando o mouse passar por cima */
    border: 3px solid #fff;
    color: #fff;
    background: #263238;
  }
  }
`;

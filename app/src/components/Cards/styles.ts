import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`;

export const Search = styled.div`
  display: flex;
  margin-top: 16px;
  height: 56px;

  input {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    padding-left: 16px;
    border: 1px solid #78909C;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border: 2px solid #CFD8DC;
  border-radius: 8px;
  margin-top: 16px;
  padding: 8px;
  background: #F5F5F5;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s;

  &:hover {
    //box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.7); /* Nova sombra quando o mouse passar por cima */
    border: 2px solid #607D8B;
  }
`;

import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    rgb(27, 73, 136),
    rgb(20, 94, 121),
    rgb(16, 119, 112)
  );
  border: none;
  width: 300px;
  color: white;
  padding: 15px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 25px;
  margin: 20px auto;
  display: block;
  outline: none;
  &:hover {
    background-color: rgb(16, 119, 112);
    font-style: italic;
  }
`;

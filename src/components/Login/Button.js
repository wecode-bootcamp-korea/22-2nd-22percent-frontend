import styled from 'styled-components';

const Button = styled.button`
  width: 270px;
  height: 50px;
  margin: 5px;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ kakao, theme }) =>
    kakao ? ' #ffcd00' : theme.colorMain};

  color: ${({ kakao }) => (kakao ? 'black' : 'white')};
`;

export default Button;

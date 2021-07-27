import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

function SignOut() {
  return (
    <>
      <Link to="/signin">
        <Button signin>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button signup>회원가입</Button>
      </Link>
    </>
  );
}

export default SignOut;

const Button = styled.div`
  padding: 15px 20px;
  border-radius: 4px;
  cursor: pointer;
  ${({ signin, signup, theme }) =>
    (signup &&
      css`
        margin-left: 10px;
        background: white;
        border: 1px solid ${theme.colorMain};
        color: ${theme.colorMain};
      `) ||
    (signin &&
      css`
        background: ${theme.colorMain};
        color: white;
      `)}
`;

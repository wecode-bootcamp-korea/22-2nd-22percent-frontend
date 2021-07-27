import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SignIn() {
  return (
    <Link to="/mypage/overview">
      <Profile>
        <i className="fas fa-user-circle" />
      </Profile>
    </Link>
  );
}

export default SignIn;

const Profile = styled.div`
  padding: 10px 0;
  font-size: 32px;
  color: ${({ theme }) => theme.colorMain};
  cursor: pointer;
`;

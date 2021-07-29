import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { removeToken } from '../../../utilities/token';

function SignIn() {
  const history = useHistory();

  const handleLogout = () => {
    removeToken();
    history.push('/');
  };

  return (
    <Box>
      <List>
        <Logout onClick={handleLogout}>로그아웃</Logout>
      </List>
      <List>
        <Link to="/mypage/overview">
          <i className="fas fa-user-circle" />
        </Link>
      </List>
    </Box>
  );
}

export default SignIn;

const Box = styled.ul`
  ${({ theme }) => theme.flexMixin}
`;

const List = styled.li`
  margin: 10px 0;
  color: ${({ theme }) => theme.colorMain};

  & + li {
    margin-left: 20px;
  }

  i {
    font-size: 32px;
    cursor: pointer;
  }
`;

const Logout = styled.span`
  color: ${({ theme }) => theme.colorTitle};
  font-weight: 400;
  cursor: pointer;
`;

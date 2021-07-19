import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SubNav from './SubNav/SubNav';

function Nav() {
  const location = useLocation();

  return (
    <>
      <NavBar>
        <InnerBox>
          <Divider>
            <Logo>8PERCENT</Logo>
            <List>
              <li>투자하기</li>
              <li>전문투자</li>
              <li>대출하기</li>
            </List>
          </Divider>
          <Divider>
            <Button name="signIn">로그인</Button>
            <Button name="signUp">회원가입</Button>
          </Divider>
        </InnerBox>
      </NavBar>
      {(location.pathname === '/deals/real-estate' ||
        location.pathname === '/mypage') && <SubNav />}
    </>
  );
}

export default Nav;

const NavBar = styled.nav`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  padding: 18px 0 20px;
  font-weight: 700;
  font-size: 20px;
`;

const InnerBox = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'normal')};
  width: 60%;
`;

const Divider = styled.div`
  display: flex;
`;

const Logo = styled.h1`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  margin-right: 30px;
  color: ${({ theme }) => theme.colorMain};
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;

  li {
    ${({ theme }) => theme.flexMixin('normal', 'center')};
    cursor: pointer;
    transition: color 0.3s ease-out;

    & + li {
      margin-left: 30px;
    }

    &:hover {
      color: ${({ theme }) => theme.colorMain};
    }
  }
`;

const Button = styled.div`
  padding: 15px 20px;
  margin-left: ${({ name }) => (name === 'signUp' ? '10px' : 0)};
  background-color: ${({ theme, name }) =>
    name === 'signIn' ? theme.colorMain : 'white'};
  border: ${({ theme, name }) =>
    name === 'signUp' ? `1px solid ${theme.colorMain}` : 'none'};
  color: ${({ theme, name }) =>
    name === 'signIn' ? 'white' : theme.colorMain};
  border-radius: 4px;
  cursor: pointer;
`;

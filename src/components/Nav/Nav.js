import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';

import SubNav from './SubNav/SubNav';
import { DEALS } from './SubNav/navTabList';

const NEED_SUBNAV_PATH = ['deals', 'my'];

function Nav() {
  const location = useLocation();
  const history = useHistory();

  const isSubNavOn = NEED_SUBNAV_PATH.some(pathname =>
    location.pathname.includes(pathname)
  );

  const goToPage = pathname => history.push(pathname);
  const realEstataePath = DEALS[0].path;

  return (
    <>
      <NavBar>
        <InnerBox>
          <Divider>
            <Logo onClick={() => goToPage('/')}>8PERCENT</Logo>
            <List>
              <li onClick={() => goToPage(realEstataePath)}>투자하기</li>
              <li>전문투자</li>
              <li>대출하기</li>
            </List>
          </Divider>
          <Divider>
            <Button signin onClick={() => goToPage('/signin')}>
              로그인
            </Button>
            <Button signup onClick={() => goToPage('/signup')}>
              회원가입
            </Button>
          </Divider>
        </InnerBox>
      </NavBar>
      {isSubNavOn && <SubNav />}
    </>
  );
}

export default Nav;

const NavBar = styled.nav`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 0 20px;
  background: white;
  font-weight: 700;
  font-size: 20px;
  z-index: 9;
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

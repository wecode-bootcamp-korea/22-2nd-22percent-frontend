import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SubNav from './SubNav/SubNav';
import SignOut from './SignOut/SignOut';
import SignIn from './SignIn/SignIn';

import { DEALS } from './SubNav/navTabList';
import { getToken } from '../../utilities/token';

const NEED_SUBNAV_PATH = [
  '/deals/real-estate',
  '/deals/individual',
  '/mypage/overview',
  '/mypage/history',
];

function Nav() {
  const [isValidUser, setIsValidUser] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setIsValidUser(getToken());
  });

  const isSubNavOn = NEED_SUBNAV_PATH.some(
    pathname => location.pathname === pathname
  );
  console.log(location.pathname);

  const goToPage = pathname => history.push(pathname);
  const [realEstate] = DEALS;

  return (
    <>
      <NavBar>
        <InnerBox>
          <Divider>
            <Logo onClick={() => goToPage('/')}>22PERCENT</Logo>
            <List>
              <li
                onClick={() =>
                  goToPage(
                    `${realEstate.path}?category=mortgage&closed=true&offset=0&limit=8`
                  )
                }
              >
                투자하기
              </li>
              <li>전문투자</li>
              <li>대출하기</li>
            </List>
          </Divider>
          <Divider>{isValidUser ? <SignIn /> : <SignOut />}</Divider>
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

import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SubNavItem from './SubNavItem';
import { DEALS, MYPAGE } from './navTabList';

function SubNav() {
  const location = useLocation();

  return (
    <Bar>
      <Inner>
        <List>
          <SubNavItem>
            {location.pathname.includes('mypage') ? MYPAGE : DEALS}
          </SubNavItem>
        </List>
      </Inner>
    </Bar>
  );
}

export default SubNav;

const Bar = styled.nav`
  ${({ theme }) => theme.flexMixin};
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  background: white;
  font-weight: 700;
  font-size: 20px;
  z-index: 9;
  box-shadow: 0px 25px 29px -18px rgba(142, 142, 142, 0.41);
`;

const Inner = styled.div`
  margin: 0 auto;
`;

const List = styled.ul`
  ${({ theme }) => theme.flexMixin};
`;

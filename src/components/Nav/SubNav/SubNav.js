import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SubNavItem from './SubNavItem';

const DEALS = ['부동산', '개인신용'];
const MYPAGE = ['투자요약', '투자내역'];

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
  font-weight: 700;
  font-size: 20px;
  box-shadow: 0px 25px 29px -18px rgba(142, 142, 142, 0.41);
`;

const Inner = styled.div`
  margin: 0 auto;
`;

const List = styled.ul`
  ${({ theme }) => theme.flexMixin};
`;

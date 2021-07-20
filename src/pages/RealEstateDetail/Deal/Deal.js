import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoMapScript from '../KakaoMapScript';

import DealPoint from './DealWrap/DealPoint';
import DealOutLine from './DealWrap/DealOutLine';
import DealSecurity from './DealWrap/DealSecurity';
import DealDetail from './DealWrap/DealDetail';
import DealInfo from './DealWrap/DealInfo';

function Deal() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <DealWrap>
      {/*투자포인트*/}
      <DealPoint />
      {/*상품개요*/}
      <DealOutLine />
      {/*담보안정성*/}
      <DealSecurity />
      {/*담보상세*/}
      <DealDetail />
      {/*대출자 정보*/}
      <DealInfo />
    </DealWrap>
  );
}

export default Deal;

const DealWrap = styled.div`
  flex: 8 8 66.6667%;
  margin-right: calc(8.3333% - 15px);
`;

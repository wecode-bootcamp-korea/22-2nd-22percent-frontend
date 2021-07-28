import React, { useEffect } from 'react';
import styled from 'styled-components';

import DealPoint from './DealWrap/DealPoint';
import DealOutLine from './DealWrap/DealOutLine';
import DealSecurity from './DealWrap/DealSecurity';
import DealDetail from './DealWrap/DealDetail';
import DealInfo from './DealWrap/DealInfo';

function Deal(props) {
  return (
    <DealWrap>
      {/*투자포인트*/}
      <DealPoint />
      {/*상품개요*/}
      <DealOutLine />
      {/*담보안정성*/}
      <DealSecurity
        mortSeniorLoanAmount={props.mortSeniorLoanAmount}
        mortEstimatedRecovery={props.mortEstimatedRecovery}
        dealInfoNetAmount={props.dealInfoNetAmount}
      />
      {/*담보상세*/}
      <DealDetail
        mortgageInfoLatitude={props.mortgageInfoLatitude}
        mortgageInfoLongitude={props.mortgageInfoLongitude}
        mortgageInfoAddress={props.mortgageInfoAddress}
        mortgageCompletedDate={props.mortgageCompletedDate}
        mortgageScale={props.mortgageScale}
        mortSupplyArea={props.mortSupplyArea}
        mortFloor={props.mortFloor}
      />
      {/*대출자 정보*/}
      <DealInfo dealInfocreditScore={props.dealInfocreditScore} />
    </DealWrap>
  );
}

export default Deal;

const DealWrap = styled.div`
  flex: 8 8 66.6667%;
  margin-right: calc(8.3333% - 15px);
`;

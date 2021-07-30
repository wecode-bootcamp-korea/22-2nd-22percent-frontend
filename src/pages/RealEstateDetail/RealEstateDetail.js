import React, { useState, useEffect, useLocation, useHistory } from 'react';
import styled from 'styled-components';

import Slide from './Slide/Slide';
import DealHeader from './DealHeader/DealHeader';
import Deal from './Deal/Deal';
import ControllerWrap from './ControllerWrap/ControllerWrap';
import { REALESTATEDETAIL } from '../../config';

const RealEstateDetail = ({ match }) => {
  const [dealInfo, setDealInfo] = useState(null);
  const [mortgageInfo, setMortgageInfo] = useState(null);

  useEffect(() => {
    fetch(`${REALESTATEDETAIL}${match.params.id}`)
      .then(res => res.json())
      .then(res => {
        // 데이터 분기 처리
        console.log(res);
        setDealInfo(res.dealInfo);
        setMortgageInfo(res.mortgageInfo);
      });
  }, []);
  return (
    <Main>
      {dealInfo && mortgageInfo && (
        <>
          <Slide mortgageImage={mortgageInfo.mortgageImage} />
          <DealHeader
            dealInfoName={dealInfo.name}
            delInfoGrade={dealInfo.grade}
            dealInfoEarningRate={dealInfo.earningRate}
            dealInfoRepaymentPeriod={dealInfo.repaymentPeriod}
            dealInfoNetAmount={dealInfo.netAmount}
          />
          <ContentWrap>
            <section>
              <Deal
                mortgageInfoLatitude={mortgageInfo.latitude}
                mortgageInfoLongitude={mortgageInfo.longitude}
                mortgageInfoAddress={mortgageInfo.address}
                mortgageCompletedDate={mortgageInfo.completedDate}
                mortgageScale={mortgageInfo.scale}
                mortSupplyArea={mortgageInfo.supplyArea}
                mortFloor={mortgageInfo.floor}
                mortEstimatedRecovery={mortgageInfo.estimatedRecovery}
                mortSeniorLoanAmount={mortgageInfo.seniorLoanAmount}
                dealInfocreditScore={dealInfo.creditScore}
                dealInfoNetAmount={dealInfo.netAmount}
              />
              <ControllerWrap
                dealAmount={dealInfo.amount}
                dealInvestmentOption={dealInfo.investmentOption}
                dealDepositAmount={dealInfo.depositAmount}
                dealRepaymentDay={dealInfo.repaymentDay}
                productId={match.params.id}
              />
            </section>
          </ContentWrap>
        </>
      )}
    </Main>
  );
};

export default RealEstateDetail;

//ContentWrap.css
const ContentWrap = styled.div`
  margin: 0 auto;
  padding: 0 18px;
  max-width: 1110px;
  section {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
`;

const Main = styled.main`
  padding-top: 150px;
`;

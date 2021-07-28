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

  console.log(match.params.id);

  useEffect(() => {
    fetch(`${REALESTATEDETAIL}${match.params.id}`)
      .then(res => res.json())
      .then(res => {
        // 데이터 분기 처리
        setDealInfo(res.dealInfo);
        setMortgageInfo(res.mortgageInfo);
      });
  }, []);
  return (
    <main>
      {dealInfo && mortgageInfo && (
        <>
          <Slide />
          <DealHeader
            dealInfoName={dealInfo[0].name}
            delInfoGrade={dealInfo[0].grade}
            dealInfoEarningRate={dealInfo[0].earningRate}
            dealInfoRepaymentPeriod={dealInfo[0].repaymentPeriod}
            dealInfoNetAmount={dealInfo[0].netAmount}
          />
          <ContentWrap>
            <section>
              <Deal
                mortgageInfoLatitude={mortgageInfo[0].latitude}
                mortgageInfoLongitude={mortgageInfo[0].longitude}
                mortgageInfoAddress={mortgageInfo[0].address}
                mortgageCompletedDate={mortgageInfo[0].completedDate}
                mortgageScale={mortgageInfo[0].scale}
                mortSupplyArea={mortgageInfo[0].supplyArea}
                mortFloor={mortgageInfo[0].floor}
                mortEstimatedRecovery={mortgageInfo[0].estimatedRecovery}
                mortSeniorLoanAmount={mortgageInfo[0].seniorLoanAmount}
                dealInfocreditScore={dealInfo[0].creditScore}
                dealInfoNetAmount={dealInfo[0].netAmount}
              />
              <ControllerWrap
                dealAmount={dealInfo[0].amount}
                dealInvestmentOption={dealInfo[0].investmentOption}
                dealDepositAmount={dealInfo[0].depositAmount}
                dealRepaymentDay={dealInfo[0].repaymentDay}
              />
            </section>
          </ContentWrap>
        </>
      )}
    </main>
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

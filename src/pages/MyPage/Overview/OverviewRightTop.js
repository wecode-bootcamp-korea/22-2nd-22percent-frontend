import React, { useState } from 'react';
import styled from 'styled-components';
import InvestContent from './InvestContent';

function OverviewRightTop({ summary, openModal }) {
  const [currentStatus, setCurrentStatus] = useState('total');

  //탭 누르면 "전체" 또는 "투자중"으로 콘텐츠를 바꾸기 위한 state
  const switchToTotal = () => {
    setCurrentStatus(true);
  };

  const switchToInvesting = () => {
    setCurrentStatus(false);
  };

  return (
    <>
      <ProfitBox>
        <Earning>
          <div>
            <div>
              수익률
              <i className="far fa-question-circle"></i>
            </div>
          </div>
          <EarningRate>{summary.overview.earningRate}%</EarningRate>
        </Earning>
        <ProfitInfo>
          <ProfitDetail>
            <ProfitDetailTitle>
              <div>자산</div>
              <ProfitSubtitle>예치금+투자 중 원금</ProfitSubtitle>
            </ProfitDetailTitle>
            <ProfitAmount>
              {summary.overview.asset.toLocaleString()}원
            </ProfitAmount>
          </ProfitDetail>
          <ProfitDetail>
            <ProfitDetailTitle>
              <div>누적수익</div>
              <ProfitSubtitle>세전</ProfitSubtitle>
            </ProfitDetailTitle>
            <ProfitAmount>
              {summary.overview.paidRevenue.toLocaleString()}원
            </ProfitAmount>
          </ProfitDetail>
        </ProfitInfo>
      </ProfitBox>
      <InvestStatus>
        <InvestBox>
          <InvestTitle>
            투자현황
            <i className="far fa-question-circle" onClick={openModal}></i>{' '}
          </InvestTitle>
          <BtnNav>
            <TotalBtn onClick={switchToTotal} currentStatus={currentStatus}>
              전체
            </TotalBtn>
            <InvestingBtn
              onClick={switchToInvesting}
              currentStatus={currentStatus}
            >
              투자중
            </InvestingBtn>
          </BtnNav>
          <InvestContent
            investStatus={summary.investStatus}
            currentData={currentStatus}
          />
        </InvestBox>
      </InvestStatus>
    </>
  );
}

const Box = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px #ccc;
`;

const ProfitBox = styled(Box)`
  ${({ theme }) => theme.flexMixin};
  flex-direction: row;
  height: 100px;
  padding: 25px;
`;

const Earning = styled.div`
  padding-right: 60px;

  i {
    padding-left: 5px;
    color: #ccc;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const EarningRate = styled.div`
  padding-top: 15px;
  font-size: 2rem;
`;

const ProfitInfo = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'space-btween')};
`;

const ProfitDetail = styled.div`
  width: 180px;
`;

const ProfitAmount = styled.div`
  font-size: 1.2rem;
`;

const ProfitDetailTitle = styled.div`
  ${({ theme }) => theme.flexMixin};
  padding-bottom: 20px;
`;

const ProfitSubtitle = styled.div`
  padding-left: 10px;
  color: #ccc;
  font-size: 0.8rem;
`;

const InvestStatus = styled(Box)`
  ${({ theme }) => theme.flexMixin};
  position: relative;
  height: 250px;
  padding: 25px;
`;

const InvestBox = styled.div`
  width: 100%;
`;

const InvestTitle = styled.div`
  padding-bottom: 10px;

  i {
    padding-left: 5px;
    color: #ccc;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

const BtnNav = styled.nav`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const InvestBtn = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
  color: grey;
`;

const TotalBtn = styled(InvestBtn)`
  border-radius: 3px 0 0 3px;
  border-right: 0px;
  background: ${({ currentStatus }) => (currentStatus ? '#fafafa' : 'white')};
  font-weight: ${({ currentStatus }) => (currentStatus ? 600 : 400)};
  color: ${({ currentStatus }) => (currentStatus ? 'black' : 'grey')};
`;

const InvestingBtn = styled(InvestBtn)`
  border-radius: 0 3px 3px 0;
  background: ${({ currentStatus }) => (currentStatus ? 'white' : '#fafafa')};
  font-weight: ${({ currentStatus }) => (currentStatus ? 400 : 600)};
  color: ${({ currentStatus }) => (currentStatus ? 'grey' : 'black')};
`;

export default OverviewRightTop;

import React from 'react';
import styled from 'styled-components';
import InvestContent from './InvestContent';

function OverviewRightTop({ overview, investStatus }) {
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
          <EarningRate>{overview.earningRate}%</EarningRate>
        </Earning>
        <ProfitInfo>
          <ProfitDetail>
            <ProfitDetailTitle>
              <div>자산</div>
              <ProfitSubtitle>예치금+투자 중 원금</ProfitSubtitle>
            </ProfitDetailTitle>
            <ProfitAmount>
              {overview.asset
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원{/* 천단위로 콤마 찍는거 매번 이렇게 해야하나? */}
            </ProfitAmount>
          </ProfitDetail>
          <ProfitDetail>
            <ProfitDetailTitle>
              <div>누적수익</div>
              <ProfitSubtitle>세전</ProfitSubtitle>
            </ProfitDetailTitle>
            <ProfitAmount>
              {overview.revenue
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </ProfitAmount>
          </ProfitDetail>
        </ProfitInfo>
      </ProfitBox>
      <InvestStatus>
        <InvestBox>
          <InvestTitle>
            투자현황<i className="far fa-question-circle"></i>{' '}
          </InvestTitle>
          <BtnNav>
            <InvestBtn>전체</InvestBtn>
            <InvestBtn>투자중</InvestBtn>
          </BtnNav>
          <InvestContent investStatus={investStatus} />
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

  i {
    padding-left: 5px;
    color: #ccc;
    font-size: 1.1rem;
  }
`;

const InvestBox = styled.div`
  width: 100%;
`;

const InvestTitle = styled.div`
  padding-bottom: 10px;
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
  background: white;
  cursor: pointer;
  color: grey;

  &:first-child {
    border-radius: 3px 0 0 3px;
    border-right: 0px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }
`;

export default OverviewRightTop;

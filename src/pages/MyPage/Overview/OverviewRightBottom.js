import React from 'react';
import styled from 'styled-components';
import PortfolioTable from './PortfolioTable';

function OverviewRightBottom({ portfolio }) {
  return (
    <>
      <Portfolio>
        <PortfolioWrapper>
          <div className="title">
            <h3>포트폴리오 현황</h3>
            <p>
              {portfolio.grade.amount
                .reduce((pre, cur) => pre + cur, 0)
                .toLocaleString()}
              원
            </p>
          </div>
          <div className="chart"></div>
        </PortfolioWrapper>
        <BtnNav2>
          <InvestBtn2>등급</InvestBtn2>
          <InvestBtn2>수익률</InvestBtn2>
          <InvestBtn2>상품</InvestBtn2>
        </BtnNav2>
        <PortfolioTable portfolio={portfolio} />
      </Portfolio>
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

const Portfolio = styled(Box)`
  position: relative;
  padding: 20px;
`;

const PortfolioWrapper = styled.div`
  width: 100%;

  h3 {
    padding-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
  }
`;
const BtnNav2 = styled.nav`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const InvestBtn2 = styled.button`
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

  &:nth-child(2) {
    border-right: 0;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }
`;

export default OverviewRightBottom;

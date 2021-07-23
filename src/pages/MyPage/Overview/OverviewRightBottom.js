import React, { useState } from 'react';
import styled from 'styled-components';
import PortfolioTable from './PortfolioTable';

function OverviewRightBottom({ portfolio }) {
  const [currInfo, setCurrInfo] = useState('grade');

  const switchInfo = e => {
    setCurrInfo(e.target.name);
  };

  return (
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
        {STATUS_BTN.map(item => (
          <InvestBtn2
            onClick={switchInfo}
            name={item[0]}
            key={item[0]}
            currInfo={currInfo}
          >
            {item[1]}
          </InvestBtn2>
        ))}
      </BtnNav2>
      <PortfolioTable currInfo={currInfo} portfolio={portfolio[currInfo]} />
    </Portfolio>
  );
}

const STATUS_BTN = [
  ['grade', '등급'],
  ['earningRate', '수익률'],
  ['type', '상품'],
];

const Box = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  min-height: 370px;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px #ccc;
`;

const Portfolio = styled(Box)`
  position: relative;
  padding: 18px;
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
  cursor: pointer;

  background-color: ${({ currInfo, name }) =>
    currInfo === name ? '#fafafa' : 'white'};
  color: ${({ currInfo, name }) => (currInfo === name ? 'black' : 'grey')};
  font-weight: ${({ currInfo, name }) => (currInfo === name ? 600 : 400)};

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

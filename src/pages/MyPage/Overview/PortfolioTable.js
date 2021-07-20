import React from 'react';
import styled from 'styled-components';

function PortfolioTable({ portfolio }) {
  return (
    <Table>
      <div>
        <ColItem>
          <img src="/image/a.png" alt="a" />
        </ColItem>
        <ColItem>
          <img src="/image/b.png" alt="b" />
        </ColItem>
        <ColItem>
          <img src="/image/c.png" alt="c" />
        </ColItem>
        <ColItem>
          <img src="/image/d.png" alt="d" />
        </ColItem>
        <ColItem>
          <span>기타</span>
        </ColItem>
      </div>
      <div>
        {portfolio.grade.amount.map((amount, idx) => {
          return (
            <ProgressBar
              key={idx}
              max={portfolio.grade.amount.reduce((pre, cur) => pre + cur, 0)}
              value={amount}
            />
          );
        })}
      </div>
      <div>
        {portfolio.grade.amount.map((amount, idx) => {
          return <Amount key={idx}>{amount.toLocaleString()}원</Amount>;
        })}
      </div>
      <div>
        {portfolio.grade.count.map((count, idx) => {
          return <Amount key={idx}>{count}건</Amount>;
        })}
      </div>
    </Table>
  );
}

const Table = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 550px;
  padding-top: 20px;
`;

const ColItem = styled.div`
  padding: 10px 0;

  img {
    width: 25px;
  }
`;

const ProgressBar = styled.progress`
  display: block;
  width: 290px;
  height: 5px;
  margin: 40px 0;
  appearance: none;

  &::-webkit-progress-bar {
    color: coral;
    background-color: #f4f4f4;
    border-radius: 8px;
  }

  &::-webkit-progress-value {
    background-color: #2980e4;
    border-radius: 8px;
  }
`;

const Amount = styled.span`
  padding: 15px 0;
  display: block;
  text-align: right;
`;

export default PortfolioTable;

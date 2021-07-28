import React from 'react';
import styled from 'styled-components';

function PortfolioTable({ portfolio, currInfo }) {
  return (
    <Table>
      {currInfo === 'grade' ? (
        <div>
          {portfolio.grades
            .map((grade, idx) => {
              return (
                <ColItem key={idx}>
                  <img src={`/image/${grade}.png`} alt={grade} />
                </ColItem>
              );
            })
            .splice(0, 4)}
          <ColItem>
            <span>기타</span>
          </ColItem>
        </div>
      ) : (
        <div>
          {portfolio[Object.keys(portfolio)[0]].map(item => {
            return (
              <PortfolioCol key={item}>
                <span>{NAME_LIST[item]}</span>
              </PortfolioCol>
            );
          })}
        </div>
      )}
      <div>
        {portfolio.amounts.map((item, idx) => {
          return (
            <ProgressBar
              key={idx}
              max={portfolio.amounts.reduce((pre, cur) => pre + cur, 0)}
              value={item}
            />
          );
        })}
      </div>
      <div>
        {portfolio.amounts.map((amount, idx) => {
          return <Amount key={idx}>{amount.toLocaleString()}원</Amount>;
        })}
      </div>
      <div>
        {portfolio.counts.map((count, idx) => {
          return <Amount key={idx}>{count}건</Amount>;
        })}
      </div>
    </Table>
  );
}

const NAME_LIST = {
  underEight: '8% 이하',
  overEight: '8% 이상',
  overTen: '10% 이상',
  overTwelve: '12%이상',
  company: '사업자',
  personal: '개인',
  special: '스페셜딜',
  estate: '부동산',
  etc: '기타',
};

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

const PortfolioCol = styled.div`
  padding: 15px 0;
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

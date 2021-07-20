import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

function InvestContent({ investStatus }) {
  const expData = {
    datasets: [
      {
        labels: ['투자중', '투자완료', '손실'],
        data: [
          investStatus.invest,
          investStatus.complete,
          investStatus.insolvency,
        ],
        borderWidth: 0,
        backgroundColor: ['#6C3AD3', '#DEDEF4', '#D2D2D2'],
      },
    ],
  };
  const expOption = {
    options: {
      cutoutPercentage: 30,
    },
  };
  return (
    <InvestContentBox>
      <Chart>
        <Doughnut data={expData} height={180} options={expOption} />
      </Chart>
      <ChartDesc>
        <DescContent>
          <div>투자중</div>{' '}
          <span>{investStatus.invest.toLocaleString()}원</span>
        </DescContent>
        <DescContent>
          <div>투자완료</div>{' '}
          <span>{investStatus.complete.toLocaleString()}원</span>
        </DescContent>
        <DescContent>
          <div>손실</div>
          <span>{investStatus.insolvency.toLocaleString()}원</span>
        </DescContent>
      </ChartDesc>
    </InvestContentBox>
  );
}

const InvestContentBox = styled.div`
  ${({ theme }) => theme.flexMixin};
`;
const Chart = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: row;
  width: 180px;
  margin: 0 30px;
  font-size: 0.95rem;
`;
const DescContent = styled.p`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 250px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChartDesc = styled.div`
  padding: 20px;
`;
export default InvestContent;

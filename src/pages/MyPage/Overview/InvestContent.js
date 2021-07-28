import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { makeChartData, CHART_OPTION } from './ChartOption';

function InvestContent({ investStatus, currentData }) {
  //받아온 데이터의 타이틀과 화면에 보여줄 타이틀 매칭시키기 위한 객체

  // 구조분해할당
  const {
    totalInvest,
    complete,
    delay,
    invest,
    loss,
    normal,
    overdue,
    nonperform,
  } = investStatus;

  //전체투자액와 투자중금액 데이터 나눠주기(탭으로 분리됨)
  const selectedData = {
    total: { invest, complete, loss },
    investing: { normal, delay, overdue, nonperform },
  };

  // 선택된 탭에 따른 데이터 변경(디벨롭 할 수 있을지 궁금...)
  const selectedDataList = currentData
    ? Object.entries(selectedData.total)
    : Object.entries(selectedData.investing);

  // map으로 돌려줄 리스트 생성
  const ConvertToChartData = selectedDataList.map(([name, value]) => [
    NAME_MATCH[name],
    value,
  ]);

  // 차트 데이터 생성
  const chartData = makeChartData(selectedDataList);

  return (
    <InvestContentBox>
      <Chart>
        <Doughnut data={chartData} height={180} options={CHART_OPTION} />
        <ChartTitile>
          {currentData ? '누적 투자 원금' : '투자 중 원금'}
        </ChartTitile>
        <ChartSubtitle>
          {currentData ? totalInvest.toLocaleString() : invest.toLocaleString()}
          원
        </ChartSubtitle>
      </Chart>
      <ChartDesc>
        {ConvertToChartData.map(([title, totalValue], idx) => (
          <DescContent key={title}>
            <Circle className="fas fa-circle" color={idx}></Circle>
            <ChartTitle>{title}</ChartTitle>
            <ChartValue>{totalValue.toLocaleString()}원</ChartValue>
          </DescContent>
        ))}
      </ChartDesc>
    </InvestContentBox>
  );
}

const COLOR_LIST = {
  0: '#6C3AD3',
  1: '#B0B0F5',
  2: '#DEDEF4',
  3: '#D2D2D2',
};

const NAME_MATCH = {
  totalInvest: '누적 투자 원금',
  complete: '투자완료',
  delay: '상환지연',
  invest: '투자중',
  loss: '손실',
  normal: '정상',
  overdue: '연체',
  nonperform: '부실',
};

const InvestContentBox = styled.div`
  ${({ theme }) => theme.flexMixin};
`;

const Chart = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: row;
  position: relative;
  width: 180px;
  margin: 0 30px;
  font-size: 0.95rem;
`;

const ChartTitile = styled.div`
  position: absolute;
  top: 42%;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: grey;
`;

const ChartSubtitle = styled.div`
  position: absolute;
  top: 52%;
  width: 100%;
  text-align: center;
`;

const DescContent = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 250px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Circle = styled.i`
  font-size: 0.5rem;
  color: ${({ color }) => COLOR_LIST[color]};
`;

const ChartTitle = styled.div`
  text-align: left;
  width: 100%;
  padding-left: 10px;
`;

const ChartValue = styled.div`
  text-align: right;
  width: 100%;
`;

const ChartDesc = styled.div`
  padding: 20px;
`;
export default InvestContent;

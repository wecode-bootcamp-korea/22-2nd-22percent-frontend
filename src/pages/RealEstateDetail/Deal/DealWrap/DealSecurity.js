import React from 'react';
import * as S from '../DealStyle';

import { Doughnut } from 'react-chartjs-2';
import { makePieChartData } from '../../Chart/pieChart';

function DealSecurity() {
  const pieChart = makePieChartData();
  return (
    <S.ContentBlock>
      <S.ContentHeading>담보 안정성</S.ContentHeading>
      <S.ChartArea>
        <S.DealMortgageTempate>
          <S.ChartItem>
            <Doughnut
              data={pieChart}
              width={250}
              height={250}
              className="pie-chart"
            />
            <S.ChartCenter>
              <p>감정가</p>
              <p>9억원</p>
            </S.ChartCenter>
          </S.ChartItem>
        </S.DealMortgageTempate>
        <S.LegendItem>
          <S.Legend>
            <S.LegendColor></S.LegendColor>
            <S.LegendLabel>선순위 대출잔액</S.LegendLabel>
            <S.LegendValue>
              3억 100만원<S.Percent> 33.44%</S.Percent>
            </S.LegendValue>
          </S.Legend>
          <S.Legend>
            <S.LegendColor></S.LegendColor>
            <S.LegendLabel>8퍼센트 대출금</S.LegendLabel>
            <S.LegendValue>
              3억 100만원<S.Percent> 33.44%</S.Percent>
            </S.LegendValue>
          </S.Legend>
          <S.Legend>
            <S.LegendColor className="blue"></S.LegendColor>
            <S.LegendLabel>세 여유금</S.LegendLabel>
            <S.LegendValue>
              3억 100만원<S.Percent> 33.44%</S.Percent>
            </S.LegendValue>
          </S.Legend>
          <S.ExpectedRecoverAmount>
            회수예상가액 5억 9,900만원
          </S.ExpectedRecoverAmount>
        </S.LegendItem>
      </S.ChartArea>
    </S.ContentBlock>
  );
}

export default DealSecurity;

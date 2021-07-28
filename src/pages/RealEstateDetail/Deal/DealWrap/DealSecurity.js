import React from 'react';
import * as S from '../DealStyle';
import styled from 'styled-components';

import { Doughnut } from 'react-chartjs-2';
import { makePieChartData } from '../../Chart/pieChart';

function DealSecurity(props) {
  const pieChart = makePieChartData();

  const numberToKorean = number => {
    let inputNumber = number < 0 ? false : number;
    let unitWords = ['', '만', '억', '조', '경'];
    let splitUnit = 10000;
    let splitCount = unitWords.length;
    let resultArray = [];
    let resultString = '';

    for (let i = 0; i < splitCount; i++) {
      let unitResult =
        (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
      unitResult = Math.floor(unitResult);
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }
    for (let i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
  };
  const estimatedRecovery = numberToKorean(props.mortEstimatedRecovery);
  const seniorLoanAmount = numberToKorean(props.mortSeniorLoanAmount);
  const NetAmount = numberToKorean(props.dealInfoNetAmount);

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
              <ChartCenterAmount>9억원</ChartCenterAmount>
            </S.ChartCenter>
          </S.ChartItem>
        </S.DealMortgageTempate>
        <S.LegendItem>
          <S.Legend>
            <S.LegendColor></S.LegendColor>
            <S.LegendLabel>선순위 대출잔액</S.LegendLabel>
            <S.LegendValue>
              {seniorLoanAmount}
              <S.Percent> 33.44%</S.Percent>
            </S.LegendValue>
          </S.Legend>
          <S.Legend>
            <S.LegendColor></S.LegendColor>
            <S.LegendLabel>8퍼센트 대출금</S.LegendLabel>
            <S.LegendValue>
              {NetAmount}
              <S.Percent> 33.44%</S.Percent>
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
            회수예상가액 {estimatedRecovery}원
          </S.ExpectedRecoverAmount>
        </S.LegendItem>
      </S.ChartArea>
    </S.ContentBlock>
  );
}

export default DealSecurity;

const ChartCenterAmount = styled.p`
  font-weight: bold;
  padding-top: 10px;
  font-size: 30px;
`;

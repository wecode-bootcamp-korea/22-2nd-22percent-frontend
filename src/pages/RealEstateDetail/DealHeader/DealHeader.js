import React from 'react';
import styled, { keyframes } from 'styled-components';

function DealHeader(props) {
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
  const dealInfoNetAmount = numberToKorean(props.dealInfoNetAmount);

  return (
    <DealWrap>
      <DealHeaderGrid>
        <DealIndex>41207호</DealIndex>
        <DealHeading>{props.dealInfoName}</DealHeading>
        <DealInfoContainer>
          <ul>
            <li className="deal-info">
              <p className="deal-info-label">등급</p>
              <GradeBg grade={props.delInfoGrade}>{props.delInfoGrade}</GradeBg>
            </li>
            <li className="deal-info-bar"></li>
            <li className="deal-info">
              <p className="deal-info-label">수익률</p>
              <p className="deal-info-value">{props.dealInfoEarningRate}%</p>
            </li>
            <li className="deal-info-bar"></li>
            <li className="deal-info">
              <p className="deal-info-label">상환기간</p>
              <p className="deal-info-value">
                {props.dealInfoRepaymentPeriod}개월
              </p>
            </li>
            <li className="deal-info-bar"></li>
            <li className="deal-info">
              <p className="deal-info-label">상환방식</p>
              <p className="deal-info-value">만기일시</p>
            </li>
            <li className="deal-info-bar"></li>
            <li className="deal-info">
              <p className="deal-info-label">모집현황</p>
              <p className="deal-info-value">{dealInfoNetAmount}원</p>
            </li>
          </ul>
        </DealInfoContainer>
      </DealHeaderGrid>
      <DealProgress>
        <DealProgressTick
          active={props.dealInfoRepaymentPeriod}
          //style={{ left: `${props.dealInfoRepaymentPeriod}%` }}
        ></DealProgressTick>
        <DealProgressRail>
          <DealProgressHandle
            active={props.dealInfoRepaymentPeriod}
            //style={{ left: `${props.dealInfoRepaymentPeriod}%` }}
          >
            {props.dealInfoRepaymentPeriod}%
          </DealProgressHandle>
        </DealProgressRail>
      </DealProgress>
    </DealWrap>
  );
}

export default DealHeader;

const DealWrap = styled.div`
  margin: 0 auto;
  padding: 60px 0;
  display: block;
`;
//DealHeaderGrid.css
const DealHeaderGrid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 730px;
  margin: 0 auto;
  padding: 0 7.5px;
`;

const DealIndex = styled.article`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  letter-spacing: -0.3px;
  color: #fff;
`;

const DealHeading = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1px;
  margin-bottom: 30px;
  color: #1d2024;
  word-break: keep-all;
`;

const DealInfoContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 40px;
    li.deal-info {
      p {
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        color: #858d94;
      }
      .deal-info-value {
        font-size: 20px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #1d2024;
      }
    }
    li.deal-info-bar {
      flex: 0 0 1px;
      margin: 0 25px;
      background: #f1f3f5;
    }
  }
`;

const DealProgress = styled.div`
  position: relative;
  padding: 0 25px;
  height: 3px;
  background-image: linear-gradient(to right, #a56ceb, #6c3ad3);
`;

const lineMoction = keyLeft => keyframes`
0%{
  left:0%;
}
100%{
  left:${keyLeft}%
}
`;

const moveMoction = keyLeft => keyframes`
  0%{
  left:0%;
}
100%{
  left:${keyLeft}%
}
`;

const DealProgressTick = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${props => lineMoction(props.active)};
  background-color: #e6e6e6;
  animation: ${props => lineMoction(props.active)} 2s ease-in-out forwards;
`;

const DealProgressRail = styled.div`
  position: relative;
`;

const DealProgressHandle = styled.span`
  position: absolute;
  top: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 26px;
  border-radius: 15px;
  color: #fff;
  background-color: ${props => props.theme.colorMain};
  z-index: 1;
  transform: translateX(-50%);
  animation: ${props => moveMoction(props.active)} 2s ease-in-out forwards;
`;

const GradeBg = styled.p`
  color: #fff !important;
  ${({ theme }) => theme.flexMixin('center', 'center')};
  width: 28px;
  height: 28px;
  border-radius: 5px;
  background-color: ${({ grade }) =>
    (grade.includes('A') && '#2980E4') ||
    (grade.includes('B') && '#61C03E') ||
    (grade.includes('C') && '#EEC307') ||
    (grade.includes('D') && '#DD864D')};
  color: #ffffff;
`;

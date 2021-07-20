import React, { useState } from 'react';
import styled from 'styled-components';

import DealInfo from './DealInfo';

function DealHeader() {
  const itmes = ['등급', '수익률', '상환기관', '상환방식', '모집현황'];
  return (
    <DealWrap>
      <DealHeaderGrid>
        <DealIndex>41207호</DealIndex>
        <DealHeading>
          소거안정 357호 세종 새뜸1단지 메이저시티푸르지오
        </DealHeading>
        <DealInfoContainer>
          <ul>
            {itmes.map(itmes => (
              <DealInfo setItmes={itmes} />
            ))}
          </ul>
        </DealInfoContainer>
      </DealHeaderGrid>
      <DealProgress>
        <DealProgressTick></DealProgressTick>
        <DealProgressRail>
          <DealProgressHandle>64%</DealProgressHandle>
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
  color: #858d94;
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

const DealProgressTick = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #e6e6e6;
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
`;

import React from 'react';
import * as S from '../DealStyle';

import { ReactComponent as Home } from '../../SVGImg/Home.svg';
import { ReactComponent as Macker } from '../../SVGImg/Macker.svg';

function DealPoint() {
  return (
    <S.ContentBlock>
      <S.ContentHeading>투자 포인트</S.ContentHeading>
      <ul>
        <li>
          <S.SvgImageWrapper>
            <Home />
          </S.SvgImageWrapper>
          <S.SellingPointContent>
            <S.SellingPointContentTitle>
              양호한 LTV 비율과 채권보전
            </S.SellingPointContentTitle>
            <p>잔액 기준 LTV 55.67%로 낙찰가율 대비 낮은 편입니다.</p>
          </S.SellingPointContent>
        </li>
        <li>
          <S.SvgImageWrapper>
            <Macker />
          </S.SvgImageWrapper>
          <S.SellingPointContent>
            <S.SellingPointContentTitle>
              우수한 교육 환경
            </S.SellingPointContentTitle>
            <p>
              단지 1km 내 어린이집, 초, 중, 고등학교가 위치해 있어 학군이
              우량하고 아이들 등, 하교가 안전합니다.
            </p>
          </S.SellingPointContent>
        </li>
      </ul>
    </S.ContentBlock>
  );
}

export default DealPoint;

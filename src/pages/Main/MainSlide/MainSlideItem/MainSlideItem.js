import React from 'react';

import styled from 'styled-components';

const SLIDE_BG_COLOR = [
  '#BFDEE8',
  '#DBE8EC',
  '#A4B24B',
  '#5B9AC6',
  '#C1866E',
  '#CC8C2D',
  '#79789C',
];

function MainSlideItem(props) {
  return (
    <SlideItem idx={props.idx}>
      <Inner>
        <Info>
          <SlideTitle>일산 풍동 숲속마을아파트</SlideTitle>
          <Desc>
            <InterestPercent>
              <b>9.50</b>%
            </InterestPercent>
            <span>12개월 / 13,000만원</span>
          </Desc>
          <Button>상품 보러가기</Button>
        </Info>
        <div>
          <img alt="real estate" src="http://placehold.it/400" />
        </div>
      </Inner>
    </SlideItem>
  );
}

export default MainSlideItem;

const SlideItem = styled.li`
  ${({ theme }) => theme.flexMixin('center', 'normal')};
  width: 100vw;
  background-color: ${({ idx }) => SLIDE_BG_COLOR[idx]};
`;

const Inner = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 55%;
  height: 460px;

  img {
    border-radius: 50%;
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'normal')};
  flex-direction: column;
  height: 50%;
`;

const SlideTitle = styled.span`
  font-size: 26px;
`;

const Desc = styled.div`
  ${({ theme }) => theme.flexMixin('normal', 'normal')};
  flex-direction: column;
`;

const InterestPercent = styled.span`
  b {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 50px;
    font-weight: 700;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 50%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

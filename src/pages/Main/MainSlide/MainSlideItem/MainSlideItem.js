import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SLIDE_BG_COLOR } from '../slideBgColor';

function MainSlideItem({ bgIdx, slide }) {
  return (
    <SlideItem bgIdx={bgIdx}>
      <Inner>
        <Info>
          <SlideTitle>{slide.title}</SlideTitle>
          <Desc>
            <InterestPercent>
              <b>{Number(slide.earningRate).toFixed(1)}</b>%
            </InterestPercent>
            <span>
              {slide.period}개월 /{' '}
              {Number(slide.amount.toString().slice(0, -4)).toLocaleString()}
              만원
            </span>
          </Desc>
          <Link to={`/deals/${slide.index}`}>
            <Button bgIdx={bgIdx}>상품 보러가기</Button>
          </Link>
        </Info>
        <div>
          <img alt="real estate" src={slide.titleImage} />
        </div>
      </Inner>
    </SlideItem>
  );
}

export default MainSlideItem;

const SlideItem = styled.li`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  padding: 30px 0;
  width: 100%;
  background-color: ${({ bgIdx }) => SLIDE_BG_COLOR[bgIdx]};
`;

const Inner = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 55%;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'normal')};
  flex-direction: column;
  color: white;
`;

const SlideTitle = styled.span`
  font-size: 26px;
`;

const Desc = styled.div`
  ${({ theme }) => theme.flexMixin('normal', 'normal')};
  flex-direction: column;
  margin: 30px 0 25px;
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
  background: white;
  color: ${({ bgIdx }) => SLIDE_BG_COLOR[bgIdx]};
  font-weight: 700;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';

import MainSlideItem from './MainSlideItem/MainSlideItem';

function MainSlide() {
  return (
    <SlideBox>
      <ArrowBtn className="left">
        <i className="fas fa-chevron-left"></i>
      </ArrowBtn>
      <SlideInner>
        {[...Array(7)].map((item, i) => (
          <MainSlideItem key={i} idx={i} item={item} />
        ))}
      </SlideInner>
      <ArrowBtn className="right">
        <i className="fas fa-chevron-right"></i>
      </ArrowBtn>
    </SlideBox>
  );
}

export default MainSlide;

const SlideBox = styled.ul`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const ArrowBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 56px;
  color: ${({ theme }) => theme.colorDesc};
  cursor: pointer;

  &.left {
    left: 15%;
  }

  &.right {
    right: 15%;
  }

  &:hover {
    color: ${({ theme }) => theme.colorTitle};
  }
`;

const SlideInner = styled.div`
  ${({ theme }) => theme.flexMixin('normal', 'normal')};
  width: calc(100vw * 7);
`;

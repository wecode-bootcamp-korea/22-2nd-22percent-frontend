import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import MainSlideItem from './MainSlideItem/MainSlideItem';
import MainSlideDot from './MainSlideDot/MainSlideDot';

import { SLIDE_BG_COLOR } from './slideBgColor';

function MainSlide({ slide }) {
  const [slideSpot, setSlideSpot] = useState(-100);
  const [isTransitionOn, setIsTransitionOn] = useState(true);

  const initialMount = useRef(true);
  const timeoutRef = useRef(null);
  const isMoving = useRef(true);

  const handleSlideAutoMove = () => {
    setIsTransitionOn(true);
    setSlideSpot(prev => prev - 100);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => handleSlideAutoMove(), 3000);

    return () => {
      resetTimeout();
    };
  }, [slideSpot]);

  const handleSlideBtn = direction => {
    if (!isMoving.current) return;
    isMoving.current = true;

    setIsTransitionOn(true);

    if (direction === 'left') {
      setSlideSpot(prev => prev - 100);
    }

    if (direction === 'right') {
      setSlideSpot(prev => prev + 100);
    }

    isMoving.current = false;
    setTimeout(() => {
      isMoving.current = true;
    }, 1000);
  };

  const handleSlideEnd = () => {
    if (slideSpot === 0) {
      setIsTransitionOn(false);
      setSlideSpot((slide.length - 2) * -100);
    } else if (slideSpot === (slide.length - 1) * -100) {
      setIsTransitionOn(false);
      setSlideSpot(-100);
    }
  };

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    } else {
      setTimeout(handleSlideEnd, 1001);
    }
  }, [slideSpot]);

  return (
    <SlideBox>
      <ArrowBtn left onClick={() => handleSlideBtn('left')}></ArrowBtn>
      <SlideInner
        isTransitionOn={isTransitionOn}
        quantity={slide.length}
        slideSpot={slideSpot}
      >
        {slide.map((item, i) => (
          <MainSlideItem
            slide={item}
            key={i}
            bgIdx={
              (i === 0 && SLIDE_BG_COLOR.length - 1) ||
              (i === slide.length - 1 && '0') ||
              i - 1
            }
          />
        ))}
      </SlideInner>
      <ArrowBtn right onClick={() => handleSlideBtn('right')}></ArrowBtn>
      <DotBox>
        {[...Array(slide.length - 2)].map((_, i) => (
          <MainSlideDot
            slide={slide}
            slideSpot={slideSpot}
            dotIdx={i + 1}
            key={i}
          />
        ))}
      </DotBox>
    </SlideBox>
  );
}

export default MainSlide;

const SlideBox = styled.ul`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: hidden;
`;

const SlideInner = styled.div`
  ${({ theme }) => theme.flexMixin('normal', 'normal')};
  position: relative;
  width: ${({ quantity }) => `calc(100vw * ${quantity})`};
  transform: ${({ slideSpot }) => `translateX(${slideSpot}vw)`};
  transition: ${({ isTransitionOn }) =>
    isTransitionOn ? `transform 1s ease-out` : 'none'};
`;

const ArrowBtn = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left && '15%'};
  right: ${({ right }) => right && '15%'};
  transform: translateY(-50%);
  z-index: 5;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ left }) => left && 0};
    right: ${({ right }) => right && 0};
    width: 30px;
    height: 30px;
    border-left: 2px solid #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    transform: translateY(-50%)
      ${({ left, right }) =>
        (left && `rotate(45deg)`) || (right && `rotate(225deg)`)};
    transition: border-color 0.3s ease-out;
  }

  &:hover::before {
    border-color: white;
  }
`;

const DotBox = styled.ul`
  position: absolute;
  bottom: 20px;
  left: 50%;
  ${({ theme }) => theme.flexMixin};
  transform: translateX(-60%);
`;

import React from 'react';
import styled from 'styled-components';

function MainSlideDot({ slideSpot, dotIdx, slide }) {
  return (
    <Dot
      slideSpot={slideSpot}
      dotIdx={dotIdx}
      slideIdx={
        (Math.abs(slideSpot / 100) === 0 && 1) ||
        (Math.abs(slideSpot / 100) > slide.length - 1 && 0) ||
        Math.abs(slideSpot / 100)
      }
    />
  );
}

export default MainSlideDot;

const Dot = styled.li`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ slideIdx, dotIdx }) =>
    slideIdx === dotIdx ? 'white' : '#e0e0e0'};
  z-index: 5;

  & + li {
    margin-left: 7px;
  }
`;

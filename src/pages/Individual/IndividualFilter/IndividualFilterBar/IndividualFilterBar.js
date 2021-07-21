import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { GRADE_BAR_RANGE, EARNING_BAR_RANGE } from '../filterRange';

function IndividualFilterItem({
  maxValue,
  grade,
  earningPercent,
  handleFilter,
}) {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(maxValue);
  const [rangeText, setRangeText] = useState({
    start: (grade && 'A+') || (earningPercent && 4),
    end: (grade && 'D-') || (earningPercent && 24),
  });

  const handleRangeValue = (e, direction) => {
    const { value } = e.target;

    if (direction === 'start') {
      if (Number(value) >= Number(endValue)) return;

      setStartValue(value);
      setRangeText(prev => ({
        start:
          (grade && GRADE_BAR_RANGE[value]) ||
          (earningPercent && EARNING_BAR_RANGE[value]),
        end: prev.end,
      }));
    }

    if (direction === 'end') {
      if (Number(value) <= Number(startValue)) return;

      setEndValue(value);
      setRangeText(prev => ({
        start: prev.start,
        end:
          (grade && GRADE_BAR_RANGE[value]) ||
          (earningPercent && EARNING_BAR_RANGE[value]),
      }));
    }

    handleFilter(grade, earningPercent, value, direction);
  };

  return (
    <Container>
      <RangeInput
        onChange={e => handleRangeValue(e, 'start')}
        type="range"
        min="0"
        max={maxValue}
        value={startValue}
      ></RangeInput>
      <RangeInput
        onChange={e => handleRangeValue(e, 'end')}
        type="range"
        min="0"
        max={maxValue}
        value={endValue}
      ></RangeInput>
      <RangeBar>
        <Progress
          maxValue={maxValue}
          startValue={startValue}
          endValue={endValue}
        ></Progress>
        <RangeCircle
          maxValue={maxValue}
          startValue={startValue}
          startText={rangeText.start}
        >
          {(grade && <RangeText>{rangeText.start}</RangeText>) ||
            (earningPercent && <RangeText>{rangeText.start}%</RangeText>)}
        </RangeCircle>
        <RangeCircle
          maxValue={maxValue}
          endValue={endValue}
          endText={rangeText.end}
        >
          {(grade && <RangeText>{rangeText.end}</RangeText>) ||
            (earningPercent && <RangeText>{rangeText.end}%</RangeText>)}
        </RangeCircle>
      </RangeBar>
    </Container>
  );
}

export default IndividualFilterItem;

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.flexMixin('flex-start', 'center')};
  flex-direction: column;
`;

const RangeInput = styled.input`
  position: absolute;
  margin: 0;
  top: -5px;
  left: 0;
  width: 100%;
  pointer-events: none;
  appearance: none;
  opacity: 0;
  z-index: 10;

  &::-webkit-slider-thumb {
    pointer-events: all;
    cursor: pointer;
  }
`;

const RangeBar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background: #dbdbdb;
  border-radius: 3px;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: ${({ startValue, maxValue }) => `${(startValue * 100) / maxValue}%`};
  right: ${({ endValue, maxValue }) =>
    `${((maxValue - endValue) * 100) / maxValue}%`};
  bottom: 0;
  background: ${({ theme }) => theme.colorMain};
  border-radius: 3px;
`;

const RangeCircle = styled.div`
  position: absolute;
  top: -4.4px;
  left: ${({ startValue, maxValue }) =>
    `calc(${(startValue * 100) / maxValue}% - 5px)`};
  right: ${({ endValue, maxValue }) =>
    `calc(${((maxValue - endValue) * 100) / maxValue}% + -5px)`};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  box-shadow: 1px 1px 3px 1.5px rgba(0, 0, 0, 0.2);
`;

const RangeText = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 14px;
`;

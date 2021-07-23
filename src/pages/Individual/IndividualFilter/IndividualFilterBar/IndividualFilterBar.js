import React, { useState } from 'react';
import styled from 'styled-components';

function IndividualFilterItem({ range, grade, earningPercent }) {
  return (
    <ListBar>
      <BarCircle
        draggable
        // onDragStart={e => handleDragStart(e)}
        // onDragEnd={e => handleDragEnd(e)}
        rangeStart
      >
        {(grade && <BarText rangeStart>{range[0]}</BarText>) ||
          (earningPercent && <BarText rangeStart>{range[0]}%</BarText>)}
      </BarCircle>
      <BarCircle
        draggable
        // onDragStart={handleDragStart}
        // onDragEnd={handleDragEnd}
        rangeEnd
      >
        {(grade && <BarText rangeStart>{range[range.length - 1]}</BarText>) ||
          (earningPercent && (
            <BarText rangeStart>{range[range.length - 1]}%</BarText>
          ))}
      </BarCircle>
    </ListBar>
  );
}

export default IndividualFilterItem;

const ListBar = styled.div`
  position: relative;
  top: 10px;
  background: #dbdbdb;
  height: 5px;
  border-radius: 3px;
`;

const BarCircle = styled.div`
  position: absolute;
  top: -6px;
  left: ${({ rangeStart }) => rangeStart && '0'};
  right: ${({ rangeEnd }) => rangeEnd && '0'};
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: white;
  box-shadow: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  cursor: pointer;
`;

const BarText = styled.span`
  position: absolute;
  top: 22px;
  left: ${({ rangeStart }) => rangeStart && `0`};
  right: ${({ rangeEnd }) => rangeEnd && `0`};
  font-size: 15px;
  transform: ${({ rangeStart, rangeEnd }) =>
    (rangeStart && 'translateX(-10%)') || (rangeEnd && 'translateX(30%)')};
  cursor: default;
`;

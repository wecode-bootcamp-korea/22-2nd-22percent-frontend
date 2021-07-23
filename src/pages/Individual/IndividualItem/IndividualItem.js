import React, { useState } from 'react';

import styled from 'styled-components';

function IndividualItem() {
  const [check, setCheck] = useState(false);

  const handleCheckBox = e => {
    setCheck(!check);
  };

  return (
    <Row>
      <Cell>
        <CheckBox check={check} onChange={handleCheckBox}></CheckBox>
      </Cell>
      <Cell productId>41292호</Cell>
      <Cell loanType bigFont>
        냠냠대출
      </Cell>
      <CellGrade>
        <GradeBg grade={'B'}>B+</GradeBg>
      </CellGrade>
      <Cell bigFont>13.99%</Cell>
      <Cell bigFont>12개월</Cell>
      <Cell bigFont>608만원 / 811만원</Cell>
      <Cell percent={74}>
        <Progress value={74}></Progress>
        <PercentText>74%</PercentText>
      </Cell>
    </Row>
  );
}

export default IndividualItem;

const Row = styled.tr`
  position: relative;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Cell = styled.td`
  padding: ${({ productId }) => (productId ? '28px 0 28px 7px' : '28px 0')};
  ${({ theme, percent }) => percent && theme.flexMixin('center', 'start')};
  width: ${({ loanType }) => loanType && '30%'};
  text-align: ${({ loanType, productId }) =>
    !loanType && !productId && 'center'};
  font-size: ${({ bigFont }) => (bigFont ? '16px' : '14px')};
  color: ${({ productId, percent, theme }) =>
    (productId && theme.colorTitle) ||
    (percent > 69 && '#e73d3d') ||
    (percent < 70 && theme.colorMain)};
  font-weight: ${({ percent }) => percent && '700'};
`;

const PercentText = styled.span`
  margin-top: -5px;
`;

const CellGrade = styled(Cell)`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  font-weight: 700;
`;

const Progress = styled.div`
  position: relative;
  margin-right: 8px;
  width: 150px;
  height: 4px;
  background: #dbdbdb;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ value }) => `${value}%`};
    height: 100%;
    background: ${({ value, theme }) =>
      (value > 69 && '#e73d3d') || (value < 70 && theme.colorMain)};
  }
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
  // checked: false,
})`
  cursor: pointer;
`;

const GradeBg = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ grade }) =>
    (grade === 'A' && '#2980E4') ||
    (grade === 'B' && '#61C03E') ||
    (grade === 'C' && '#EEC307') ||
    (grade === 'D' && '#DD864D')};
  color: white;
`;

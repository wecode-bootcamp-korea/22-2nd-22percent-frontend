import React from 'react';
import styled from 'styled-components';
import StyledCheckBox from '../../../components/StyledCheckBox/StyledCheckBox';

import { isOverSeventy } from '../../../utilities/utils';

function IndividualItem({ individualItem, checkedItem, setCheckedItem }) {
  const handleChecked = () => {
    checkedItem.includes(individualItem.index)
      ? setCheckedItem(
          checkedItem.filter(item => item !== individualItem.index)
        )
      : setCheckedItem([...checkedItem, individualItem.index]);
  };

  return (
    <Row>
      <Cell>
        <StyledCheckBox
          isChecked={checkedItem.includes(individualItem.index)}
          handleChecked={handleChecked}
        />
      </Cell>
      <Cell productId>{individualItem.index}호</Cell>
      <Cell loanType bigFont>
        {individualItem.title}
      </Cell>
      <CellGrade>
        <GradeBg grade={individualItem.grade}>{individualItem.grade}</GradeBg>
      </CellGrade>
      <Cell bigFont>{individualItem.earningRate}%</Cell>
      <Cell bigFont>{individualItem.period}개월</Cell>
      <Cell bigFont>
        {Number(individualItem.investmentAmount.toString().slice(0, -4))}만원 /{' '}
        {Number(individualItem.amount.toString().slice(0, -4))}만원
      </Cell>
      <Cell percent>
        <Progress
          value={individualItem.progress}
          isOverSeventy={isOverSeventy(individualItem.progress)}
        />
        <PercentText
          value={individualItem.progress}
          isOverSeventy={isOverSeventy(individualItem.progress)}
        >
          {individualItem.progress}%
        </PercentText>
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
  ${({ theme, percent }) => percent && theme.flexMixin('center', 'center')};
  padding: ${({ productId }) => (productId ? '28px 0 28px 7px' : '28px 0')};
  width: ${({ loanType }) => loanType && '30%'};
  text-align: ${({ loanType, productId }) =>
    !loanType && !productId && 'center'};
  font-size: ${({ bigFont }) => (bigFont ? '16px' : '14px')};
  color: ${({ productId, theme }) => productId && theme.colorTitle};
`;

const PercentText = styled.span`
  margin-top: -5px;
  color: ${({ theme, isOverSeventy }) =>
    isOverSeventy ? '#e73d3d' : theme.colorMain};
  font-weight: 700;
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
    background: ${({ value, theme, isOverSeventy }) =>
      isOverSeventy ? '#e73d3d' : theme.colorMain};
  }
`;

const GradeBg = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  width: 28px;
  height: 28px;
  border-radius: 5px;
  background-color: ${({ grade }) =>
    (grade.includes('A') && '#2980E4') ||
    (grade.includes('B') && '#61C03E') ||
    (grade.includes('C') && '#EEC307') ||
    (grade.includes('D') && '#DD864D')};
  color: white;
`;

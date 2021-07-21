import React from 'react';
import styled from 'styled-components';

import IndividualFilterBar from './IndividualFilterBar/IndividualFilterBar';
import StyledCheckBox from '../../../components/StyledCheckBox/StyledCheckBox';

import { GRADE_BAR_RANGE, EARNING_BAR_RANGE } from './filterRange';

const GRADE_MAX_VALUE = GRADE_BAR_RANGE.length - 1;
const PERCENT_MAX_VALUE = EARNING_BAR_RANGE.length - 1;

function IndividualFilter({
  isFilterOn,
  setIsFilterOn,
  handleFilter,
  isPurposeChecked,
  setIsPurposeChecked,
}) {
  const handleClose = () => {
    setIsFilterOn(false);
  };

  return (
    <Container isFilterOn={isFilterOn}>
      <Inner>
        <Title>투자상품 필터</Title>
        <ul>
          <List purpose>
            <ListTitle>대출목적</ListTitle>
            <ListContent purpose>
              <CheckBoxContainer>
                <StyledCheckBox
                  isChecked={isPurposeChecked}
                  setIsPurposeChecked={setIsPurposeChecked}
                />
              </CheckBoxContainer>
              대환대출
            </ListContent>
          </List>
          <List>
            <ListTitle>등급</ListTitle>
            <ListContent>
              <IndividualFilterBar
                grade
                maxValue={GRADE_MAX_VALUE}
                handleFilter={handleFilter}
              />
            </ListContent>
          </List>
          <List>
            <ListTitle>예상수익률</ListTitle>
            <ListContent>
              <IndividualFilterBar
                earningPercent
                maxValue={PERCENT_MAX_VALUE}
                handleFilter={handleFilter}
              />
            </ListContent>
          </List>
        </ul>
      </Inner>
      <Button onClick={handleClose}></Button>
    </Container>
  );
}

export default IndividualFilter;

const Container = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 450px;
  transform: ${({ isFilterOn }) =>
    isFilterOn ? 'translateX(0)' : 'translateX(100%)'};
  background: white;
  box-shadow: -15px 0px 29px -18px rgba(142, 142, 142, 0.41);
  transition: transform 0.6s ease-in-out;
  z-index: 99;
`;

const Inner = styled.div`
  padding: 120px 25px 0;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 50px;
  font-size: 28px;
`;

const List = styled.li`
  padding: ${({ purpose }) => (purpose ? '40px 0' : '40px 0 80px')};

  & + li {
    border-top: 1px solid #dbdbdb;
  }
`;

const ListTitle = styled.span`
  font-size: 20px;
`;

const ListContent = styled.div`
  margin-top: 30px;
  padding: 0 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.colorTitle};
`;

const CheckBoxContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const Button = styled.div`
  position: absolute;
  top: 50px;
  right: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 17px;
    height: 40px;
    border-left: 2px solid ${({ theme }) => theme.colorDesc};
    transform: rotate(135deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 17px;
    height: 40px;
    border-left: 2px solid ${({ theme }) => theme.colorDesc};
    transform: rotate(45deg);
  }
`;

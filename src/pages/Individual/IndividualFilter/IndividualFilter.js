import React, { useState } from 'react';
import styled from 'styled-components';

import IndividualFilterBar from './IndividualFilterBar/IndividualFilterBar';

import { GRADE_BAR_RANGE, EARNING_BAR_RANGE } from './filterRange';

function IndividualFilter({ isFilterOn, setIsFilterOn }) {
  const handleClose = () => {
    setIsFilterOn(false);
  };

  const handleDragStart = e => {
    console.log(e.nativeEvent.offsetX);
  };

  const handleDragEnd = e => {
    console.log(e.nativeEvent.offsetX);
    const unit = 370 / 12;
    const destination = e.nativeEvent.offsetX / unit;
    console.log(destination);
    // if(e.nativeEvent.offsetX)
  };

  return (
    <Container isFilterOn={isFilterOn}>
      <Inner>
        <Title>투자상품 필터</Title>
        <ul>
          <List purpose>
            <ListTitle>대출목적</ListTitle>
            <ListContent>
              <input type="checkbox"></input>
              대환대출
            </ListContent>
          </List>
          <List>
            <ListTitle>등급</ListTitle>
            <ListContent>
              <IndividualFilterBar grade range={GRADE_BAR_RANGE} />
            </ListContent>
          </List>
          <List>
            <ListTitle>예상수익률</ListTitle>
            <ListContent>
              <IndividualFilterBar earningPercent range={EARNING_BAR_RANGE} />
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
  margin-top: 20px;
  padding: 0 15px;
  font-size: 18px;
  color: gray;

  input {
    margin-right: 10px;
  }
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

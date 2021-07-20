import React from 'react';
import styled from 'styled-components';

function AccBox() {
  return (
    <AccContainer>
      <span>2021.07.20 기준</span>
      <AccLoans>
        <span>누적 대출액</span>
        <b>3,614억 4,061만원</b>
      </AccLoans>
      <AccList>
        <List>
          <span>대출잔액</span>
          <b>328억 7,747만원</b>
        </List>
        <List>
          <span>인당 평균 투자금액</span>
          <b>376만원</b>
        </List>
        <List>
          <span>누적 투자건수</span>
          <b>19,052,632건</b>
        </List>
      </AccList>
    </AccContainer>
  );
}

export default AccBox;

const AccContainer = styled.section`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  flex-direction: column;
  padding: 50px 0;
  height: 300px;
`;

const AccLoans = styled.div`
  ${({ theme }) => theme.flexMixin};

  span {
    margin-bottom: -10px;
    margin-right: 30px;
    font-size: 24px;
  }

  b {
    font-size: 40px;
    font-weight: 700;
  }
`;

const AccList = styled.ul`
  ${({ theme }) => theme.flexMixin};
  padding: 30px 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colorDesc};
`;

const List = styled.li`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  flex-direction: column;
  height: 55px;
  width: 40%;
  font-size: 18px;

  & + li {
    border-left: 1px solid ${({ theme }) => theme.colorDesc};
  }
`;

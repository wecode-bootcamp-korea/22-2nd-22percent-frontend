import React from 'react';
import styled from 'styled-components';

function AccBox({ today, accInfo }) {
  const convertFourDigit = price => {
    return String(price)
      .split('')
      .reduceRight((acc, crr, idx, arr) => {
        const reversedIdx = arr.length - 1 - idx;
        if (reversedIdx % 4 === 3) {
          return ',' + crr + acc;
        }
        return crr + acc;
      }, '');
  };

  const matchKoreanUnit = num => {
    const unit = ['만원', '억', '조', '경', '해'];

    const arr = num.split(',').filter(el => el !== '');
    return arr
      .reduce((acc, crr, idx, arr) => {
        const reversedIdx = arr.length - 1 - idx;
        return `${acc} ${Number(crr)}${unit[reversedIdx]}`;
      }, '')
      .trim();
  };

  return (
    <AccContainer>
      <span>{`${today.year}.${today.month}.${today.date} 기준`}</span>
      <AccLoans>
        <LoanAccTitle>누적 대출액</LoanAccTitle>
        <LoanAccContent>
          {matchKoreanUnit(
            convertFourDigit(String(accInfo.loanAcc).slice(0, -4))
          )}
        </LoanAccContent>
      </AccLoans>
      <AccList>
        <List>
          <span>대출잔액</span>
          <b>328억 7747만원</b>
        </List>
        <List>
          <span>인당 평균 투자금액</span>
          <b>
            {matchKoreanUnit(
              convertFourDigit(String(accInfo.avgPerPerson).slice(0, -4))
            )}
          </b>
        </List>
        <List>
          <span>누적 투자건수</span>
          <b>{accInfo.investAcc.toLocaleString()}건</b>
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
  height: 340px;
`;

const AccLoans = styled.div`
  ${({ theme }) => theme.flexMixin};
`;

const LoanAccTitle = styled.span`
  margin-bottom: -10px;
  margin-right: 30px;
  font-size: 24px;
`;

const LoanAccContent = styled.b`
  font-size: 40px;
  font-weight: 700;
`;

const AccList = styled.ul`
  ${({ theme }) => theme.flexMixin};
  padding: 30px 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colorDesc};
`;

const List = styled.li`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  margin: 10px 0;
  width: 40%;
  font-size: 18px;

  & + li {
    border-left: 1px solid ${({ theme }) => theme.colorDesc};
  }

  span {
    margin-bottom: 10px;
  }
`;

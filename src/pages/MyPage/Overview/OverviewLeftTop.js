import React from 'react';
import styled from 'styled-components';

function OverviewLeftTop({ deposit }) {
  return (
    <>
      <DepositBox>
        <DepositInfo>
          <h2>예치금</h2>
          <span>
            {deposit.bank} {deposit.account}
          </span>
          <div>계좌가 신규발급되었어요</div>
        </DepositInfo>
        <DepositAmount>
          {deposit.balance
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </DepositAmount>
      </DepositBox>
      <MsgBox>
        <h3>위코드님의 예치금을 쉬게하지 마세요</h3>
        <span>100만원 재투자 하면? 예상 원리금</span>
        <span>2,000,000원</span>
        <div>
          <span>
            7개 상품에 투자 <br /> 예상 수익률 22%
          </span>
          <Button>재투자하기</Button>
        </div>
      </MsgBox>
    </>
  );
}

export default OverviewLeftTop;

const Box = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px #ccc;
`;

const DepositBox = styled(Box)`
  ${({ theme }) => theme.flexMixin('stretch', 'space-btween')};
  padding: 20px;
  height: 170px;
  background-color: ${({ theme }) => theme.colorMain};
  color: white;
  border-radius: 10px;
`;

const DepositInfo = styled.div`
  flex: 8;
  width: 100%;
  line-height: 160%;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    border-bottom: 1px solid white;
    opacity: 0.7;
  }

  div {
    font-size: 0.9rem;
  }
`;

const DepositAmount = styled.div`
  flex: 2;
  width: 100%;
  font-size: 1.5rem;
`;

const MsgBox = styled(Box)`
  ${({ theme }) => theme.flexMixin};
  height: 180px;
  padding: 20px;
  font-size: 0.8rem;
  line-height: 150%;

  h3 {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
  }

  span {
    width: 100%;
  }

  .expected {
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: 600;
  }

  div {
    ${({ theme }) => theme.flexMixin('space-btween', 'center')};
    width: 100%;
  }
`;

const Button = styled.button`
  width: 150px;
  padding: 13px;
  margin: 10px;
  color: white;
  border-radius: 5px;
  font-size: 0.9rem;
  border: transparent;
  background-color: ${({ theme }) => theme.colorMain};
`;

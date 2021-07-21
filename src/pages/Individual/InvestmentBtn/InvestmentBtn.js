import React from 'react';
import styled from 'styled-components';

function InvestmentBtn({ checkedItem }) {
  const handleClickInvest = () => {
    console.log(checkedItem);
    //버튼 기능 구현 필요
  };

  return (
    <Container>
      <Button onClick={handleClickInvest}>
        <Amount>{checkedItem.length}개 상품</Amount>
        <BtnText>투자하기</BtnText>
      </Button>
    </Container>
  );
}

export default InvestmentBtn;

const Container = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button`
  padding: 20px 40px 20px 30px;
  background: ${({ theme }) => theme.colorMain};
  border-style: none;
  border-radius: 3px;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
`;

const Amount = styled.span`
  margin-right: 120px;
`;

const BtnText = styled.span`
  position: relative;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    right: -13px;
    width: 8px;
    height: 8px;
    border-top: 1px solid white;
    border-right: 1px solid white;
    transform: rotate(45deg);
  }
`;

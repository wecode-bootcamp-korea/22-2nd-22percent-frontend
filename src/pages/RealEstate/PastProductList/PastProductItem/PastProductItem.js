import React from 'react';
import styled from 'styled-components';

function PastProductItem() {
  return (
    <ProductItem>
      <ImgContainer>
        <img alt="real estate" src="http://placehold.it/300" />
      </ImgContainer>
      <div>
        <ProductTitle>주택공급 19호 SH공사 행복주택 1차</ProductTitle>
        <ProductDesc>
          <span>
            <b>8%</b>10,000만원 · 12개월
          </span>
        </ProductDesc>
      </div>
    </ProductItem>
  );
}

export default PastProductItem;

const ProductItem = styled.li`
  cursor: pointer;

  &:hover div::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ProductTitle = styled.span`
  display: block;
  margin: 7px 0;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease-out;
  }
`;

const ProductDesc = styled.div`
  ${({ theme }) => theme.flexMixin};
  color: ${({ theme }) => theme.colorDesc};

  b {
    margin-right: 10px;
    font-size: 24px;
    color: black;
  }
`;

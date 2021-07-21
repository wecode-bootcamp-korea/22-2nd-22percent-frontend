import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PastProductItem({ data }) {
  const amount = Number(data.amount.toString().slice(0, -4)).toLocaleString();

  return (
    <Link to={`/deals/${data.index}`}>
      <ProductItem>
        <ImgContainer>
          <img alt="real estate" src={data.titleImage} />
        </ImgContainer>
        <div>
          <ProductTitle>{data.title}</ProductTitle>
          <ProductDesc>
            <span>
              <b>{Number(data.earningRate).toFixed(1)}%</b>
              {amount}만원 · {data.period}개월
            </span>
          </ProductDesc>
        </div>
      </ProductItem>
    </Link>
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

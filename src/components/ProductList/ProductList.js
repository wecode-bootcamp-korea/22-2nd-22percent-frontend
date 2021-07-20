import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import ProductItem from './ProductItem/ProductItem';

function ProductList() {
  const location = useLocation();

  return (
    <Container>
      <Product>
        {location.pathname === '/deals/real-estate' && (
          <Button>전체 투자</Button>
        )}
        <ListTitle>모집중 상품</ListTitle>
        <ProductBox>
          {[...Array(5)].map((li, i) => (
            <ProductItem key={i} />
          ))}
        </ProductBox>
      </Product>
      <Product>
        <ListTitle>오픈 예정 상품</ListTitle>
        <ProductBox>
          {[...Array(5)].map((li, i) => (
            <ProductItem key={i} />
          ))}
        </ProductBox>
      </Product>
    </Container>
  );
}

export default ProductList;

const Container = styled.section`
  position: relative;
  margin: 60px 0 150px;
`;

const Product = styled.section`
  & + section {
    margin-top: 150px;
  }
`;

const ProductBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 60px;
`;

const ListTitle = styled.h2`
  display: block;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 22px;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 25px;
  background-color: ${({ theme }) => theme.colorMain};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

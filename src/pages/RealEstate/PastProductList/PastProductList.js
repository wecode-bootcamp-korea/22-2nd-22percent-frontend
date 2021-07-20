import React from 'react';
import styled from 'styled-components';

import PastProductItem from './PastProductItem/PastProductItem';

function PastProductList() {
  return (
    <section>
      <Title>지난 투자 상품</Title>
      <ProductList>
        {[...Array(50)].map((li, i) => (
          <PastProductItem key={i} />
        ))}
      </ProductList>
      <ViewMore>지난 투자 상품 더 보기</ViewMore>
    </section>
  );
}

export default PastProductList;

const Title = styled.span`
  font-size: 36px;
  font-weight: 700;
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 80px;
  padding: 30px 0 200px;
`;

const ViewMore = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colorTitle};
  border-radius: 5px;
  color: ${({ theme }) => theme.colorTitle};
  cursor: pointer;
`;

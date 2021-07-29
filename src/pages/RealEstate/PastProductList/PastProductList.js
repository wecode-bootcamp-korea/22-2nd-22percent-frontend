import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import PastProductItem from './PastProductItem/PastProductItem';

import { stringToQuery } from '../../../utilities/query';

function PastProductList({ closed, fetchClosed, closedQuantity }) {
  const history = useHistory();
  const queryObj = stringToQuery(history.location.search);

  const handleViewMore = () => {
    history.push(`?closed=true&offset=${Number(queryObj.offset) + 8}&limit=8`);
    fetchClosed();
  };

  return (
    <section>
      <Title>지난 투자 상품</Title>
      <ProductList>
        {closed.map((li, i) => (
          <PastProductItem closedItem={li} key={i} />
        ))}
      </ProductList>
      {Number(queryObj.offset) + Number(queryObj.limit) < closedQuantity && (
        <ViewMore onClick={handleViewMore}>지난 투자 상품 더 보기</ViewMore>
      )}
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
  padding: 30px 0 150px;
`;

const ViewMore = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  padding: 25px 0;
  border: 1px solid ${({ theme }) => theme.colorTitle};
  border-radius: 5px;
  color: ${({ theme }) => theme.colorTitle};
  cursor: pointer;
`;

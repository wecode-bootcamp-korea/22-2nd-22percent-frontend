import React from 'react';
import styled from 'styled-components';

import MainSlide from './MainSlide/MainSlide';
import ProductList from '../../components/ProductList/ProductList';
import AccBox from './AccBox/AccBox';

function Main() {
  return (
    <Container>
      <MainSlide />
      <Inner>
        <ProductList />
        <AccBox />
      </Inner>
    </Container>
  );
}

export default Main;

const Container = styled.main`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  flex-direction: column;
  padding-bottom: 150px;
`;

const Inner = styled.div`
  width: 65%;
`;

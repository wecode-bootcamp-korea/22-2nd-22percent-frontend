import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MainSlide from './MainSlide/MainSlide';
import ProductList from '../../components/ProductList/ProductList';
import AccBox from './AccBox/AccBox';

import { BASE_URL, MORTGAGE } from '../../config';

function Main() {
  const [progress, setProgress] = useState(null);
  const [scheduled, setScheduled] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}${MORTGAGE}`)
      .then(res => res.json())
      .then(res => {
        setProgress(res.recruitingResults);
        setScheduled(res.scheduledResults);
      });
  }, []);

  return (
    <Container>
      {progress && (
        <MainSlide
          slide={[progress[progress.length - 1], ...progress, progress[0]]}
        />
      )}
      <Inner>
        {progress && (
          <ProductList inProgress progress={progress}>
            모집중 상품
          </ProductList>
        )}
        {scheduled && (
          <ProductList preArranged scheduled={scheduled}>
            오픈 예정 상품
          </ProductList>
        )}
        <AccBox />
      </Inner>
    </Container>
  );
}

export default Main;

const Container = styled.main`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  flex-direction: column;
  margin-top: 90px;
  padding-bottom: 150px;
`;

const Inner = styled.div`
  width: 65%;
`;

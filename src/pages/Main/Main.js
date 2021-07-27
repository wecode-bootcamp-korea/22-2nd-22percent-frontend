import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MainSlide from './MainSlide/MainSlide';
import ProductList from '../../components/ProductList/ProductList';
import AccBox from './AccBox/AccBox';

import { SLIDE_BG_COLOR } from './MainSlide/slideBgColor';
import { BASE_URL, MORTGAGE, LOAN_AMOUNT } from '../../config';
import { isValidObject } from '../../utilities/utils';

function Main() {
  const [progress, setProgress] = useState(null);
  const [slide, setSlide] = useState(null);
  const [scheduled, setScheduled] = useState(null);

  const [today, setToday] = useState({});
  const [accInfo, setAccInfo] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}${MORTGAGE}`)
      .then(res => res.json())
      .then(res => {
        setProgress(res.recruitingResults);
        setSlide(res.recruitingResults.slice(0, SLIDE_BG_COLOR.length));
        setScheduled(res.scheduledResults);
      });
  }, []);

  useEffect(() => {
    const newDate = new Date();

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const date = newDate.getDate();

    setToday({ year, month, date });

    fetch(`${BASE_URL}${LOAN_AMOUNT}`)
      .then(res => res.json())
      .then(res => {
        const { loanAcc, avgPerPerson, investAcc } = res.result;
        setAccInfo({
          loanAcc,
          avgPerPerson,
          investAcc,
        });
      });
  }, []);

  return (
    <Container>
      {slide && (
        <MainSlide slide={[slide[slide.length - 1], ...slide, slide[0]]} />
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
        {isValidObject(today) && isValidObject(accInfo) && (
          <AccBox today={today} accInfo={accInfo} />
        )}
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

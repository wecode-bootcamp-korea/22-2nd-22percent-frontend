import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MainSlide from './MainSlide/MainSlide';
import ProductList from '../../components/ProductList/ProductList';
import AccBox from './AccBox/AccBox';

import { LOAN_AMOUNT, MORTGAGE } from '../../config';
import { getToken } from '../../utilities/token';
import { SLIDE_BG_COLOR } from './MainSlide/slideBgColor';
import { isValidObject } from '../../utilities/utils';
import fetchData from '../../utilities/fetch';

function Main() {
  const [progress, setProgress] = useState(null);
  const [slide, setSlide] = useState(null);
  const [scheduled, setScheduled] = useState(null);

  const [today, setToday] = useState({});
  const [accInfo, setAccInfo] = useState({});

  useEffect(() => {
    fetchData(
      MORTGAGE,
      {
        headers: { Authorization: getToken() },
      },
      {
        onSuccess: res => {
          setProgress(res.recruitingResults);
          setSlide(res.recruitingResults.slice(0, SLIDE_BG_COLOR.length));
          setScheduled(res.scheduledResults);
        },
        onReject: res => {
          alert(res);
        },
      }
    );
  }, []);

  useEffect(() => {
    const newDate = new Date();

    const year = newDate.getFullYear();
    const month = newDate.getMonth();
    const date = newDate.getDate();

    setToday({ year, month: month + 1, date });
    fetchData(
      LOAN_AMOUNT,
      {
        headers: { Authorization: getToken() },
      },
      {
        onSuccess: res => {
          const { loanAcc, avgPerPerson, investAcc } = res.result;
          setAccInfo({ loanAcc, avgPerPerson, investAcc });
        },
        onReject: res => {
          alert(res);
        },
      }
    );
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

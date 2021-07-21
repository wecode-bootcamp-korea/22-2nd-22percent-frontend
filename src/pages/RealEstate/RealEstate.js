import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import ProductList from '../../components/ProductList/ProductList';
import PastProductList from './PastProductList/PastProductList';

import { BASE_URL, MORTGAGE } from '../../config';
import { stringToQuery } from '../../utilities/query';

function RealEstate() {
  const [progress, setProgress] = useState(null);
  const [scheduled, setScheduled] = useState(null);
  const [closed, setClosed] = useState(null);
  const [closedQuantity, setClosedQuantity] = useState(0);

  const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}${MORTGAGE}`)
      .then(res => res.json())
      .then(res => {
        setProgress(res.recruitingResults);
        setScheduled(res.scheduledResults);
      });

    fetch(`${BASE_URL}${MORTGAGE}&closed=true&offset=0&limit=8`)
      .then(res => res.json())
      .then(res => {
        setClosed(res.results);
        setClosedQuantity(res.count);
      });
  }, []);

  const fetchClosed = () => {
    const queryObj = stringToQuery(history.location.search);

    fetch(
      `${BASE_URL}${MORTGAGE}&closed=true&offset=${queryObj.offset}&limit=8`
    )
      .then(res => res.json())
      .then(res => {
        Number(queryObj.offset !== 0) &&
          setClosed(prev => [...prev, ...res.results]);
      });
  };

  return (
    <Container>
      <Inner>
        <Banner>
          <BannerText>
            <span>우리 카톡 플친해요!</span>
            <p>8퍼센트 채널 추가하고 새로운 상품 알림을 받아보세요</p>
          </BannerText>
          <img alt="kakaotalk channel" src="/images/kakao-ch-banner.png" />
        </Banner>
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
        {closed && (
          <PastProductList
            closed={closed}
            setClosed={setClosed}
            closedQuantity={closedQuantity}
            fetchClosed={fetchClosed}
          />
        )}
      </Inner>
    </Container>
  );
}

export default RealEstate;

const Container = styled.main`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  flex-direction: column;
  padding: 200px 0 150px;
`;

const Inner = styled.div`
  width: 65%;
`;

const Banner = styled.div`
  ${({ theme }) => theme.flexMixin};
  position: relative;
  margin-bottom: 120px;
  padding: 0 50px;
  height: 130px;
  background-color: #f8c054;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  img {
    position: absolute;
    top: 50%;
    right: 7%;
    width: 130px;
    transform: translateY(-50%);
  }
`;

const BannerText = styled.div`
  span {
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 24px;
  }
`;

const Observer = styled.div`
  display: none;
`;

import React from 'react';
import styled from 'styled-components';

import ProductList from '../../components/ProductList/ProductList';
import PastProductList from './PastProductList/PastProductList';

function RealEstate() {
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
        <ProductList />
        <PastProductList />
      </Inner>
    </Container>
  );
}

export default RealEstate;

const Container = styled.main`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  flex-direction: column;
  padding-bottom: 150px;
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

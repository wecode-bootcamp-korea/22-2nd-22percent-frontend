import React from 'react';
import styled from 'styled-components';

function ProductItem() {
  return (
    <Item>
      <ImgContainer>
        <img alt="real estate" src="http://placehold.it/100" />
      </ImgContainer>
      <ItemInfo>
        <ItemPercent>
          <i className="fas fa-chart-pie"></i>
          <span>64% 모집</span>
        </ItemPercent>
        <p>주거안정 357호 세종 새뜸1단지 메이저시티푸르지오</p>
        <ItemNotice>
          <b>8.5%</b>
          <span>12개월 · 20,000만원 모집</span>
        </ItemNotice>
      </ItemInfo>
    </Item>
  );
}

export default ProductItem;

const Item = styled.li`
  cursor: pointer;

  .imgContainer {
  }
`;

const ImgContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    transition: transform 0.3s ease-out;
    object-fit: cover;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

const ItemInfo = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'normal')};
  flex-direction: column;
  height: 85px;

  p {
    color: ${({ theme }) => theme.colorTitle};
    font-weight: 700;
    font-size: 17px;
  }
`;

const ItemPercent = styled.div`
  color: ${({ theme }) => theme.colorMain};
  font-weight: 700;

  i {
    margin-right: 10px;
  }
`;

const ItemNotice = styled.div`
  ${({ theme }) => theme.flexMixin};

  b {
    margin-right: 15px;
    font-size: 26px;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colorDesc};
  }
`;

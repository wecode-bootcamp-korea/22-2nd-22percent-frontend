import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InvestedLabel from './InvestedLabel/InvestedLabel';

import { isOverSeventy } from '../../../utilities/utils';

function ProductItem({ data, inProgress, preArranged }) {
  const [_year, month, date] = data.startDate.split('-');
  const investmentAmount =
    data.investmentAmount &&
    Number(data.investmentAmount.toString().slice(0, -4)).toLocaleString();

  return (
    <Link to={`/deals/${data.index}`}>
      <Item>
        <ImgContainer>
          <img alt="real estate" src={data.titleImage} />
          {data.invested && <InvestedLabel />}
        </ImgContainer>
        <ItemInfo>
          {inProgress && (
            <ItemPercent
              percent={data.progress}
              isOverSeventy={isOverSeventy(data.progress)}
            >
              <PercentGraph
                percent={data.progress}
                isOverSeventy={isOverSeventy(data.progress)}
              ></PercentGraph>
              <span>{data.progress}% 모집</span>
            </ItemPercent>
          )}
          <p>{data.title}</p>
          <ItemNotice>
            <b>{Number(data.earningRate).toFixed(1)}%</b>
            {inProgress && (
              <span>
                {data.period}개월· {investmentAmount}만원 모집
              </span>
            )}
          </ItemNotice>
        </ItemInfo>
        {preArranged && (
          <Label>
            {month}월 {date}일
          </Label>
        )}
      </Item>
    </Link>
  );
}

export default ProductItem;

const Item = styled.li`
  position: relative;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
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

  p {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colorTitle};
    font-weight: 700;
    font-size: 17px;
  }
`;

const ItemPercent = styled.div`
  ${({ theme }) => theme.flexMixin};
  margin-bottom: 10px;
  color: ${({ theme, isOverSeventy }) =>
    isOverSeventy ? '#e73d3d' : theme.colorMain};
  font-weight: 700;

  i {
    margin-right: 10px;
  }
`;

const PercentGraph = styled.div`
  border: 1px solid
    ${({ theme, isOverSeventy }) =>
      isOverSeventy ? '#e73d3d' : theme.colorMain};
  margin-right: 10px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme, percent, isOverSeventy }) =>
    `conic-gradient(${
      isOverSeventy ? '#e73d3d' : theme.colorMain
    } 0% ${percent}%, #fff ${percent}% 100%)`};
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

const Label = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #1d2024;
  color: white;
`;

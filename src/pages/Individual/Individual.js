import React, { useState } from 'react';
import styled from 'styled-components';

import IndividualItem from './IndividualItem/IndividualItem';
import IndividualFilter from './IndividualFilter/IndividualFilter';

function Individual() {
  const [wholeCheck, setWholeCheck] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const handleCheckBox = e => {
    setWholeCheck(!wholeCheck);
  };

  const handleFilterBtn = () => {
    setIsFilterOn(true);
  };

  return (
    <Container>
      <Inner>
        <TitleBox>
          <Title>
            모집중 상품<span>25</span>
          </Title>
          <p>평일 오후 1시 새로운 상품이 오픈됩니다.</p>
        </TitleBox>
        <Table>
          <thead>
            <tr>
              <Cell>
                <CheckBox
                  wholeCheck={wholeCheck}
                  onChange={e => handleCheckBox(e)}
                ></CheckBox>
              </Cell>
              <Cell colSpan="2" selectAll>
                전체선택 (24)
              </Cell>
              <Cell>등급</Cell>
              <Cell>예상수익률</Cell>
              <Cell>상환기간</Cell>
              <Cell>모집현황</Cell>
              <Cell>모집률</Cell>
            </tr>
          </thead>
          <tbody>
            {[...Array(24)].map((item, i) => (
              <IndividualItem key={i} />
            ))}
          </tbody>
        </Table>
        <Button onClick={handleFilterBtn}>
          <i className="fas fa-sliders-h"></i>
        </Button>
      </Inner>
      <IndividualFilter isFilterOn={isFilterOn} setIsFilterOn={setIsFilterOn} />
    </Container>
  );
}

export default Individual;

const Container = styled.section`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  margin: 80px 0 200px;
`;

const Inner = styled.div`
  position: relative;
  width: 60%;
`;

const TitleBox = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;

  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.colorDesc};
  }
`;

const Table = styled.table`
  width: 100%;
`;

const Cell = styled.td`
  padding: ${({ selectAll }) => (selectAll ? '30px 0 30px 7px' : '30px 0')};
  background: #f8f9fa;
  text-align: ${({ selectAll }) => !selectAll && 'center'};
  color: ${({ theme }) => theme.colorTitle};
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
`;

const Button = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colorTitle};
  border-radius: 2px;
  font-size: 20px;
  color: ${({ theme }) => theme.colorTitle};
  cursor: pointer;
`;

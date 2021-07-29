import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import IndividualItem from './IndividualItem/IndividualItem';
import IndividualFilter from './IndividualFilter/IndividualFilter';
import EmptyIndividual from './EmptyIndividual/EmptyIndividual';
import StyledCheckBox from '../../components/StyledCheckBox/StyledCheckBox';
import InvestmentBtn from './InvestmentBtn/InvestmentBtn';

import { INDIVIDUAL } from '../../config';
import {
  GRADE_BAR_RANGE,
  EARNING_BAR_RANGE,
  GRADE_CONVERSION,
} from './IndividualFilter/filterRange';
import fetchData from '../../utilities/fetch';
import { getToken } from '../../utilities/token';

function Individual() {
  const [individual, setIndividual] = useState(null);
  const [copyIndividual, setCopyIndividual] = useState([]);
  const [gradeFilterRange, setGradeFilterRange] = useState({
    start: 0,
    end: GRADE_BAR_RANGE.length - 1,
  });
  const [earningFilterRange, setEarningFilterRange] = useState({
    start: 0,
    end: EARNING_BAR_RANGE.length - 1,
  });

  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isInvestBtnOn, setIsInvestBtnOn] = useState(false);

  const [checkedItem, setCheckedItem] = useState([]);
  const [isPurposeChecked, setIsPurposeChecked] = useState(false);

  const isInitialMount = useRef(true);

  useEffect(() => {
    fetchData(
      INDIVIDUAL,
      {
        headers: { Authorization: getToken() },
      },
      {
        onSuccess: res => {
          setIndividual(res.results);
          setCopyIndividual(res.results);
        },
        onReject: res => {
          alert(res);
        },
      }
    );
  }, []);

  const handleFilter = (grade, earningPercent, inputValue, direction) => {
    if (grade) {
      if (direction === 'start') {
        setGradeFilterRange(prev => ({ start: inputValue, end: prev.end }));
      } else if (direction === 'end') {
        setGradeFilterRange(prev => ({ start: prev.start, end: inputValue }));
      }
    }

    if (earningPercent) {
      if (direction === 'start') {
        setEarningFilterRange(prev => ({ start: inputValue, end: prev.end }));
      } else if (direction === 'end') {
        setEarningFilterRange(prev => ({ start: prev.start, end: inputValue }));
      }
    }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const filteredList = individual.filter(item => {
        return (
          item.earningRate >= EARNING_BAR_RANGE[earningFilterRange.start] &&
          item.earningRate <= EARNING_BAR_RANGE[earningFilterRange.end] &&
          GRADE_CONVERSION[item.grade] >= gradeFilterRange.start &&
          GRADE_CONVERSION[item.grade] <= gradeFilterRange.end &&
          ((isPurposeChecked && item.title === '대환대출') || !isPurposeChecked)
        );
      });
      setCopyIndividual(filteredList);
    }
  }, [earningFilterRange, gradeFilterRange, isPurposeChecked]);

  useEffect(() => {
    setIsInvestBtnOn(!!checkedItem.length);
  }, [checkedItem]);

  const handleFilterBtn = () => {
    setIsFilterOn(true);
  };

  const handleAllChecked = () => {
    const allItemsId = copyIndividual.map(item => item.index);

    allItemsId.length === checkedItem.length
      ? setCheckedItem([])
      : setCheckedItem(allItemsId);
  };

  return (
    <Container>
      <Inner>
        <TitleBox>
          <Title>
            모집중 상품<span>{individual && individual.length}</span>
          </Title>
          <p>평일 오후 1시 새로운 상품이 오픈됩니다.</p>
        </TitleBox>
        <Table>
          <thead>
            <tr>
              <Cell checkbox>
                <StyledCheckBox
                  isChecked={copyIndividual.length === checkedItem.length}
                  handleAllChecked={handleAllChecked}
                />
              </Cell>
              <Cell colSpan="2" selectAll>
                전체선택 ({copyIndividual && copyIndividual.length})
              </Cell>
              <Cell>등급</Cell>
              <Cell>예상수익률</Cell>
              <Cell>상환기간</Cell>
              <Cell>모집현황</Cell>
              <Cell>모집률</Cell>
            </tr>
          </thead>
          <tbody>
            {copyIndividual.length !== 0 ? (
              copyIndividual.map((item, i) => (
                <IndividualItem
                  checkedItem={checkedItem}
                  setCheckedItem={setCheckedItem}
                  data={item}
                  key={i}
                />
              ))
            ) : (
              <EmptyIndividual />
            )}
          </tbody>
        </Table>
        <Button onClick={handleFilterBtn}>
          <i className="fas fa-sliders-h"></i>
        </Button>
      </Inner>
      <IndividualFilter
        isPurposeChecked={isPurposeChecked}
        setIsPurposeChecked={setIsPurposeChecked}
        handleFilter={handleFilter}
        isFilterOn={isFilterOn}
        setIsFilterOn={setIsFilterOn}
      />
      {isInvestBtnOn && <InvestmentBtn checkedItem={checkedItem} />}
    </Container>
  );
}

export default Individual;

const Container = styled.section`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  margin: 230px 0 200px;
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
  padding: 30px 0;
  background: #f7f7f7;
  text-align: ${({ selectAll }) => !selectAll && 'center'};
  color: ${({ theme }) => theme.colorTitle};
  ${({ checkbox, selectAll }) =>
    (checkbox &&
      css`
        padding: 30px 8px;
      `) ||
    (selectAll &&
      css`
        padding: 30px 0px 30px 7px;
      `)}
`;

const Button = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colorTitle};
  border-radius: 3px;
  font-size: 20px;
  color: ${({ theme }) => theme.colorTitle};
  cursor: pointer;
`;

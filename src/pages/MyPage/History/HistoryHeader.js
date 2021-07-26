import React from 'react';
import styled from 'styled-components';

export default function HistoryHeader({ filterHandler }) {
  return (
    <Header>
      <select name="filter" onChange={filterHandler}>
        {OPTION_LIST.map(option => (
          <option value={option}>{STATUS_NAME[option]}</option>
        ))}
      </select>
    </Header>
  );
}

const OPTION_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const STATUS_NAME = {
  0: '전체',
  1: '신청중',
  2: '정상',
  3: '상환지연',
  4: '연체',
  5: '부실',
  6: '정상상환완료',
  7: '부실상환완료',
  8: '모집예정',
};

const Header = styled.header`
  ${({ theme }) => theme.flexMixin('flex-start', 'center')};
  width: 100%;
  padding: 40px 20px 10px 30px;

  select {
    font-size: 1.3rem;
    font-weight: 600;
    color: #606060;
    padding-right: 10px;
    width: 150px;
    height: 40px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  i {
    color: #606060;
  }
`;

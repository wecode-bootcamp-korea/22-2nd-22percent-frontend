import React from 'react';
import styled from 'styled-components';

export default function HistoryHeader({ filterHandler }) {
  return (
    <Header>
      <select name="filter" onChange={filterHandler}>
        {OPTION_LIST.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </Header>
  );
}

const OPTION_LIST = [
  '전체',
  '신청중',
  '정상',
  '상환지연',
  '연체',
  '부실',
  '정산상환완료',
  '부실상환완료',
];

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

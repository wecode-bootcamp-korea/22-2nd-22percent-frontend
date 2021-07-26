import React from 'react';
import styled from 'styled-components';

function HistoryTable({ investLogItems }) {
  return (
    <HistoryTableWrapper>
      <thead>
        <tr>
          <th>투자일</th>
          <th className="col2">상품명</th>
          <th>등급</th>
          <th>예상수익률</th>
          <th>기간</th>
          <th>투자금액</th>
          <th>원금상환률</th>
          <th>상환완료회차</th>
          <th>상환상태</th>
        </tr>
      </thead>
      <tbody>
        {investLogItems.map(
          (
            {
              date,
              item,
              grade,
              interestRate,
              term,
              amount,
              repayment,
              cycle,
              status,
            },
            idx
          ) => {
            return (
              <tr key={idx}>
                <td>{date}</td>
                <td className="col2">{item}</td>
                <td>
                  <img src={`/image/${grade.toLowerCase()}.png`} alt="grade" />
                </td>
                <td>{interestRate}%</td>
                <td>{term}</td>
                <td>{amount / 10000}만원</td>
                <td>{repayment}%</td>
                <td>
                  {cycle}/{term}
                </td>
                <td>{STATUS_NAME[status]}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </HistoryTableWrapper>
  );
}

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

const HistoryTableWrapper = styled.table`
  margin: 10px auto;
  width: 95%;

  th,
  td {
    padding: 15px;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #fafafa;
    border-top: 1px solid #ccc;
    color: grey;
  }

  td {
    color: #606060;
  }

  .col2 {
    width: 270px;
    text-align: left;
  }

  tbody {
    min-height: 280px;
  }
`;

export default HistoryTable;

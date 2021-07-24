import React from 'react';
import styled from 'styled-components';

function HistoryTable({ filteredList }) {
  return (
    <HistoryTableWrapper>
      <thead>
        <th>투자일</th>
        <th className="col2">상품명</th>
        <th>등급</th>
        <th>예상수익률</th>
        <th>기간</th>
        <th>투자금액</th>
        <th>원금상환률</th>
        <th>상환완료회차</th>
        <th>상환상태</th>
      </thead>
      <tbody>
        {filteredList.map(
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
                <td>{interestRate}</td>
                <td>{term}</td>
                <td>{amount}만원</td>
                <td>{repayment}</td>
                <td>{cycle}</td>
                <td>{status}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </HistoryTableWrapper>
  );
}

const HistoryTableWrapper = styled.table`
  margin: 10px auto 50px auto;
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
`;

export default HistoryTable;

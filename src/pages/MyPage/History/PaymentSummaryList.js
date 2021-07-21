import React from 'react';

export default function PaymentSummaryList({ filteredList, title, item }) {
  const getReducedValueOf = property =>
    filteredList
      .reduce((acc, cur) => {
        return acc + cur[property];
      }, 0)
      .toLocaleString();

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <span>{getReducedValueOf(`${item}`)}원</span>
      </div>
    </li>
  );
}

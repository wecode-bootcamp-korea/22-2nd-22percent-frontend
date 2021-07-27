import React from 'react';

function DealInfo(props) {
  return (
    <>
      <li className="deal-info">
        <p className="deal-info-label">{props.setItmes}</p>
        <p className="deal-info-value">A</p>
      </li>
      <li className="deal-info-bar"></li>
    </>
  );
}

export default DealInfo;

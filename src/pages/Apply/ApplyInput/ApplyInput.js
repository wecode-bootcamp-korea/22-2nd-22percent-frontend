import React, { Component } from 'react';
import { ReactComponent as CheckImg } from './CheckImg.svg';
import styled from 'styled-components';

function ApplyInput(props) {
  console.log(props.investName);
  //console.log(props.investCheckedItems);
  return (
    <CardInput>
      <div className="checkable-area">
        <label>
          <input
            type="checkbox"
            id="allControl"
            className="form-checkable"
            onCange={e => props.investCheckedItems(e)}
          />
          <CheckAreaLabel>
            <CheckImg />
          </CheckAreaLabel>
          <span className="label-name deal-name">{props.investName}</span>
        </label>
        <DealInfo>
          <DealTextGroup>
            <DealIndex>41204호</DealIndex>
            <p>{props.investGrade}</p>
            <p>{props.investEarningRate}%</p>
            <p>{props.investRepaymentPeriod}개월</p>
          </DealTextGroup>
        </DealInfo>
      </div>
      <SelectWrap>
        <select className="form-control">
          {props.investOption.map(investOption => (
            <option value={investOption}>{investOption}</option>
          ))}
          <option value="5000">0.5만원</option>
        </select>
      </SelectWrap>
    </CardInput>
  );
}

export default ApplyInput;

const DealTextGroup = styled.div`
  margin: 6px 0 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #4b525a;
`;

const DealInfo = styled.div`
  margin-left: 40px;

  p {
    margin-right: 10px;
  }
`;

const DealIndex = styled.p`
  color: #858d94;
  line-height: 24px;
  letter-spacing: -0.6px;
  display: inline-block;
  margin-right: 10px;
`;

const CardInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e5;
  padding: 14px 20px;
  align-items: center;

  label {
    cursor: pointer;
  }
  .label-name {
    margin-left: 20px;
  }
  .deal-name {
    font-size: 16px;
    display: inline-block;
    width: 278px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  input[type='checkbox'] {
    display: none;
    text-indent: -99999999;
    opacity: 0;
  }
  input[type='checkbox'] + span {
    background: #fff;
    transition-property: background-color;
    transition-duration: 0.1s;
  }
  input[type='checkbox']:checked + span {
    background: #6c3ad3;
  }
`;

const SelectWrap = styled.div`
  position: relative;
  width: 220px;

  select {
    text-align-last: right;
    padding: 0 30px;
    font-size: 14px;
    appearance: none;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
    width: 100%;
    height: 36px;
  }
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    box-sizing: border-box;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #8a8a8a;
    right: 10px;
    top: calc(50% - 3px);
  }
`;

const CheckAreaLabel = styled.span`
  border: 1px solid transparent;
  display: inline-block;
  border-color: #6c3ad3;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  width: 18px;
  height: 18px;
`;

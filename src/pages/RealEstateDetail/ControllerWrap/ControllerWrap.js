import React from 'react';
import styled from 'styled-components';

function ControllerWrap() {
  return (
    <Controller>
      <form>
        <section>
          <ControllerHeading>투자하기</ControllerHeading>
          <ControllerBalance>
            <BalanceGroup>
              <BalanceLabel>나의 예치금</BalanceLabel>
              <span>0 원</span>
            </BalanceGroup>
            <ControllerBar></ControllerBar>
            <BalanceGroup>
              <span>나의 포인트</span>
              <span>0 P</span>
            </BalanceGroup>
          </ControllerBalance>
          <SelectWrap>
            <FormControl>
              <option value="5000">0.5만원</option>
            </FormControl>
          </SelectWrap>
          <Bar />
          <ControllerEarning>
            <ControllerGroup>
              <p>예상 지급금</p>
              <ControllerAmount>53,230원</ControllerAmount>
            </ControllerGroup>
            <EarningList>
              <ul>
                <li>
                  <EarningLabel>이자</EarningLabel>
                  <EarningAmount>4,456d원</EarningAmount>
                </li>
                <li>
                  <EarningLabel>금</EarningLabel>
                  <EarningAmount>4,456d원</EarningAmount>
                </li>
                <li>
                  <EarningLabel>이용료</EarningLabel>
                  <EarningAmount>4,456d원</EarningAmount>
                </li>
              </ul>
            </EarningList>
          </ControllerEarning>
          <ButtonPriority>
            <BtnPriority className="btn btn-md">투자하기</BtnPriority>
          </ButtonPriority>
        </section>
      </form>
    </Controller>
  );
}

export default ControllerWrap;

//SelectWrap.css
const SelectWrap = styled.div`
  position: relative;
`;

const FormControl = styled.select`
  width: 100%;
  height: 46px;
  background-color: #fff;
  color: #3c3c3c;
  border-color: #d2d2d2;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  padding: 0 10px;
  font-size: inherit;
  appearance: none;
  position: relative;

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

//Bar.css
const Bar = styled.div`
  margin: 20px 0;
  border-bottom: solid 1px #f1f3f5;
`;

//label
const EarningLabel = styled.span`
  font-size: 12px;
  color: #868e96;
`;

const EarningAmount = styled.span`
  color: #495057;
  font-size: 12px;
  text-align: right;
  letter-spacing: -0.3px;
`;

const ControllerEarning = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;
//earning-list
const EarningList = styled.div`
  ul li {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
//amount
const ControllerAmount = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: right;
  color: #6741d9;
`;
//group
const ControllerGroup = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//constorllBalnace
const ControllerBalance = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  background-color: #f8f9fa;
`;
//Controller.css
const Controller = styled.div`
  display: block;
  position: relative;
  flex: 3 3 25%;
  box-sizing: border-box;
  flex-direction: column;

  section {
    display: block !important;
    width: 269px;
    border: 1px solid #dee2e6;
    padding: 25px 20px 20px;
    background-color: #fff;
    flex-direction: column;
  }
`;

const BalanceGroup = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;

const BalanceLabel = styled.span`
  color: #868e96;
  font-size: 12px;
`;

const ControllerBar = styled.div`
  margin: 12px 0;
  border-bottom: solid 1px #dee2e6;
`;
const ControllerHeading = styled.h2`
  width: 100%;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #495057;
`;
const ButtonPriority = styled.div`
  display: inline-block;
  width: 100%;
`;
const BtnPriority = styled.button`
  background-color: ${props => props.theme.colorMain};
  color: #fff;
  width: 100%;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;

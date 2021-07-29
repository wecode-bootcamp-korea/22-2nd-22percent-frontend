import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function ControllerWrap(props) {
  const investmentOption = number => {
    let result = '';
    let array = [];
    for (let i = 0; i < number; i++) {
      result = number[i] / 10000;
      array.push(result);
    }

    return array;
  };

  const investment = investmentOption(props.dealInvestmentOption);
  const history = useHistory();
  const goToInvestmentPage = pathname => history.push(pathname);
  return (
    <Controller>
      <form>
        <section className="controller">
          <h2 className="controller-heading">투자하기</h2>
          <div className="controller-balance">
            <div className="group">
              <span className="label">나의 예치금</span>
              <span>{props.dealAmount} 원</span>
            </div>
            <div className="bar"></div>
            <div className="group">
              <span className="label">나의 포인트</span>
              <span>0 P</span>
            </div>
          </div>
          <SelectWrap>
            <select id="select-lg" className="form-control">
              {investment.map(investment => (
                <option>{investment}만원</option>
              ))}
            </select>
          </SelectWrap>
          <Bar />
          <ControllerEarning>
            <div className="group">
              <p className="big-label">예상 지급금</p>
              <p className="amount">53,230원</p>
            </div>
            <div className="earning-list">
              <ul>
                <li>
                  <span className="label">이자</span>
                  <span className="amount">4,456d원</span>
                </li>
                <li>
                  <span className="label">세금</span>
                  <span className="amount">4,456d원</span>
                </li>
                <li>
                  <span className="label">이용료</span>
                  <span className="amount">4,456d원</span>
                </li>
              </ul>
            </div>
          </ControllerEarning>
          <ButtonPriority>
            <button
              className="btn btn-priority btn-md"
              onClick={() => goToInvestmentPage(`/investments/apply`)}
            >
              투자하기
            </button>
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
  .form-control {
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

//Bar.css
const Bar = styled.div`
  margin: 20px 0;
  border-bottom: solid 1px #f1f3f5;
`;

const ControllerEarning = styled.div`
  margin-bottom: 10px;
  width: 100%;

  .group {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .amount {
      font-size: 20px;
      font-weight: bold;
      line-height: normal;
      letter-spacing: -0.3px;
      text-align: right;
      color: #6741d9;
    }
  }
  .earning-list ul li {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

    .label {
      font-size: 12px;
      color: #868e96;
    }

    .amount {
      color: #495057;
      font-size: 12px;
      text-align: right;
      letter-spacing: -0.3px;
    }
  }
`;
//Controller.css
const Controller = styled.div`
  display: block;
  position: relative;
  flex: 3 3 25%;
  box-sizing: border-box;
  flex-direction: column;

  .controller {
    width: 269px;
    border: 1px solid #dee2e6;
    padding: 25px 20px 20px;
    background-color: #fff;
    display: block;
    flex-direction: column;

    .controller-balance {
      margin-bottom: 15px;
      padding: 15px;
      font-size: 12px;
      font-weight: normal;
      line-height: normal;
      letter-spacing: -0.3px;
      background-color: #f8f9fa;

      .bar {
        margin: 12px 0;
        border-bottom: solid 1px #dee2e6;
      }

      .group {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        .label {
          color: #868e96;
          font-size: 12px;
        }
      }
    }
  }
  .controller-heading {
    width: 100%;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    color: #495057;
  }
`;

const ButtonPriority = styled.div`
  display: inline-block;
  width: 100%;
  .btn-priority {
    background-color: ${props => props.theme.colorMain};
    color: #fff;
    width: 100%;
    height: 50px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
`;

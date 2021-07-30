import React, { useState, useEffect, useSelector } from 'react';
import styled from 'styled-components';
import ApplyInput from './ApplyInput/ApplyInput';
import { INVESTMENTSINFO_API, BASE_URL } from '../../config';
import { getToken } from '../../utilities/token';

function Apply(props) {
  const [applyInput, setApplyInput] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const [checkedItem, setCheckedItem] = useState([]);

  useEffect(() => {
    const authToken = getToken();
    fetch(`${INVESTMENTSINFO_API}${props.location.search}`, {
      headers: {
        Authorization: authToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        setApplyInput(res.results.investInfo);
        setUserInfo({
          depositAccount: res.results.depositAccount,
          depositAmount: res.results.depositAmount,
          depositBank: res.results.depositBank,
          name: res.results.name,
        });
      });
  }, []);
  //체크박스 전체 선택
  const checkedAll = () => {
    const allItmesId = applyInput.map(item => item.id);
    allItmesId.length === checkedItem.length
      ? setCheckedItem([])
      : setCheckedItem(allItmesId);
  };
  // 체크박스 개별선택
  const handleCheckItem = (e, productId) => {
    if (e.target.checked) {
      setCheckedItem([...checkedItem, productId]);
    } else {
      setCheckedItem(checkedItem.filter(checkedId => checkedId !== productId));
    }
  };

  const pushAccount = () => {
    const authToken = getToken();
    const productInvestments = applyInput.map(el => ({
      id: el.id,
      amount: 10000,
    }));
    fetch(`${BASE_URL}/investments`, {
      method: 'POST',
      headers: {
        Authorization: authToken,
      },
      body: JSON.stringify({
        investments: productInvestments,
      }),
    });
    alert('투자가 완료 되었습니다.');
    //history.push('/');
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>투자 신청하기</HeaderTitle>
      </Header>
      <Card>
        <form>
          <CardHead>
            <CardInput>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="allCheck"
                    checked={checkedItem.length === applyInput.length}
                    onChange={checkedAll}
                  />
                  <CheckAreaLabel>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RjlCMzRFNUYtMzRDNS00RDcxLUFDNDYtNkRBQzBBNkUxRDlCPC90aXRsZT48cGF0aCBkPSJNMSA0LjgwOGw0LjAzNCAzLjkwNkwxMyAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iI0ZGRiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                      alt="checkbox"
                    />
                  </CheckAreaLabel>
                  <CardInputLabelName>전체선택</CardInputLabelName>
                </label>
              </div>
              {/* <SelectWrap>
                <select className="form-control">
                  <option value="">금액 일괄 적용</option>
                </select>
              </SelectWrap> */}
            </CardInput>
            {applyInput &&
              applyInput.map((applyInput, idx) => (
                <ApplyInput
                  id={applyInput.id}
                  investName={applyInput.name}
                  investOption={applyInput.investmentOption}
                  investCategory={applyInput.category}
                  investGrade={applyInput.grade}
                  investEarningRate={applyInput.earningRate}
                  investRepaymentPeriod={applyInput.repaymentPeriod}
                  HandleCheckItem={handleCheckItem}
                  checkedItem={checkedItem}
                />
              ))}
          </CardHead>
          <Summary>
            <SummaryWrap>
              <SummaryWraplabel>투자 상품</SummaryWraplabel>
              {applyInput && (
                <SummaryValue>
                  총 {checkedItem.length}/{applyInput.length}건
                </SummaryValue>
              )}
            </SummaryWrap>
            {/* <SummaryWrap>
              <SummaryWraplabel>총 투자 괄련상품 가격</SummaryWraplabel>
              {applyInput && (
                <SummaryValue className="acount">
                  {applyInput.amount}원
                </SummaryValue>
              )}
            </SummaryWrap> */}
          </Summary>
        </form>
      </Card>
      <Card>
        <form>
          <Balance>
            <BalanceWrap>
              <Title>나의 예치금 잔액</Title>
              <div className="copiable-text">
                {userInfo.depositAccount}
                {userInfo.name}
                {userInfo.depositBank}
              </div>
            </BalanceWrap>
            <BalanceWrap>
              <p className="amount">{userInfo.depositAmount}원</p>
            </BalanceWrap>
          </Balance>
          <Final>
            <Title>최종 투자 금액</Title>
            <FinalWrap>
              <p>총 투자 금액</p>
              <p>{checkedItem.length * 10000}원</p>
            </FinalWrap>
            {/* <FinalWrap>
              <p className="fianl-label">사용 포인트</p>
              <FinalPointInput>
                <FianlPointUseAll>
                  <p>전액 사용</p>
                </FianlPointUseAll>
                <label>
                  <input type="text" className="form-control" value="0" />
                </label>
                <p>P</p>
              </FinalPointInput>
            </FinalWrap>
            <div className="final-wrap final-end">
              <p>잔여: 0P</p>
            </div> */}
          </Final>
          <Total>
            <div>사용 예치금</div>
            {/* {applyInput && <TotalValue>{applyInput.amount}원</TotalValue>} */}
            <TotalValue>{checkedItem.length * 10000}원</TotalValue>
          </Total>
        </form>
      </Card>
      <BtnWrap>
        <button type="button" onClick={pushAccount}>
          투자 하기
        </button>
      </BtnWrap>
    </Container>
  );
}

export default Apply;

const BtnWrap = styled.div`
  button {
    color: #fff;
    background: #6741d9;
    width: 320px;
    height: 60px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      transition: 0.3s all;
      background: #5234ad;
    }
    &:active {
      box-shadow: none;
      border: none;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 40px 0;
`;

const TotalValue = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.6px;
  color: #1d2024;
`;

const Summary = styled.div`
  margin-top: 20px;
`;

const SummaryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  line-height: 24px;
  font-size: 14px;
  letter-spacing: -0.6px;
`;

const SummaryWraplabel = styled.p`
  font-weight: 400;
  color: #4b525a;
`;

const SummaryValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4b525a;

  .acount {
    font-weight: bold;
  }
`;

const FinalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;
`;

const FinalPointInput = styled.div`
  align-items: center;
  display: flex;
  label {
    width: 86px;
    height: 30px;
    margin-right: 10px;
    overflow: hidden;
    .form-control {
      text-align-last: right;
      border: 1px solid #d2d2d2;
      width: 100%;
      height: 100%;
      color: #3c3c3c;
      border-radius: 3px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FianlPointUseAll = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.4px;
  font-weight: 700;
  padding: 5px 8px;
  color: #6741d9;
  background: #f7f5fd;
  margin-right: 10px;
`;

const Final = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 40px 0;
  border-bottom: 1px solid #dee2e5;

  .final-end {
    text-align: right;
    justify-content: flex-end;
    font-size: 12px;
    margin-bottom: 10px;

    p {
      color: #9ca5ad;
    }
  }
`;
const Balance = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dee2e5;
  padding: 0 40px 15px;
`;

const BalanceWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  .copiable-text {
    color: #9ca5ad;
  }
  .amount {
    font-size: 24px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.5px;
  color: #1d2024;
  margin-bottom: 20px;
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

const CardInputLabelName = styled.span`
  margin-left: 20px;
  font-size: 14px;
  color: #4b525a;
`;

const CardInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e5;
  padding: 10px 20px;
  align-items: center;

  label {
    cursor: pointer;
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
  padding: 6px 0;
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

const CardHead = styled.div``;

const Card = styled.section`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  margin-bottom: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0 0 0 / 6%);
  padding: 40px 0;
  width: 716px;
  form {
    width: 100%;
  }
`;

const Container = styled.main`
  ${({ theme }) => theme.flexMixin('normal', 'center')};
  background: #f4f4f4;
  flex-direction: column;
  padding: 120px 20px 120px;
`;

const HeaderTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: -0.8px;
  color: #1d2024;
  margin-bottom: 20px;
`;

const Header = styled.header`
  margin-bottom: 40px;
`;

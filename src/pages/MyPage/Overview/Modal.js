import React from 'react';
import styled from 'styled-components';

function Modal({ closeModal }) {
  return (
    <ModalStatus>
      <ModalWrapper>
        <ModalDocument>
          <img src="/image/x.png" alt="닫기버튼" onClick={closeModal} />
          <ModalContent>
            <h1>투자현황</h1>
            <p>
              전체 투자 금액을 원금 회수 상태별로, 투자중 원금(상환받을
              잔여원금)을 상환 상태별로 보여드립니다.
            </p>
            <ModalOverflowWrap>
              <table>
                <thead>
                  <tr>
                    <th>회수 상태</th>
                    <th>상태 정의</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>투자중</td>
                    <td>현재 투자중으로 회수 예정인 원금</td>
                  </tr>
                  <tr>
                    <td>투자완료</td>
                    <td>상환되어 회수한 원금</td>
                  </tr>
                  <tr>
                    <td>손실</td>
                    <td>매각 등 부실상환완료 채권의 미회수 원금</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>상환 상태</th>
                    <th>상태 정의</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
              <p>
                * 연체, 부실 채권의 잔액은 확정된 손실금액이 아닙니다. 변제의
                완료 또는 매각으로 ‘부실상환완료’ 상태가 되면, 손실금액이
                확정되고 투자가 종결됩니다.
              </p>
            </ModalOverflowWrap>
          </ModalContent>
        </ModalDocument>
      </ModalWrapper>
    </ModalStatus>
  );
}

const ModalStatus = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ModalDocument = styled.div`
  background: white;
  box-shadow: 0 2px 20px 0 rgba(17, 19, 22, 0.3);
  position: relative;
  padding: 50px;

  img {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: 20px;
  }
`;

const ModalContent = styled.div`
  width: 80vw;
  max-width: 350px;
  position: relative;
`;

const ModalOverflowWrap = styled.div`
  height: 300px;
  overflow: scroll;
`;

export default Modal;

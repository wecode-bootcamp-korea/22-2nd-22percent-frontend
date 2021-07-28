import React from 'react';
import styled from 'styled-components';

function Modal({ closeModal }) {
  return (
    <ModalStatus onClick={closeModal}>
      <ModalWrapper>
        <ModalDocument onClick={e => e.stopPropagation()}>
          <img src="/image/x.png" alt="닫기버튼" onClick={closeModal} />
          <ModalContent>
            <h1>투자현황</h1>
            <p>
              전체 투자 금액을 원금 회수 상태별로, 투자중 원금(상환받을
              잔여원금)을 상환 상태별로 보여드립니다.
            </p>
            <p>
              * 연체, 부실 채권의 잔액은 확정된 손실금액이 아닙니다. 변제의 완료
              또는 매각으로 ‘부실상환완료’ 상태가 되면, 손실금액이 확정되고
              투자가 종결됩니다.
            </p>
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
  right: 0;
  bottom: 0;
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

  h1 {
    font-size: 1.2rem;
    line-height: 200%;
    font-weight: 600;
    border-bottom: 3px solid black;
  }

  p {
    padding: 10px 0;
    line-height: 160%;
  }
`;

export default Modal;

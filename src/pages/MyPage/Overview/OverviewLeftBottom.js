import React from 'react';
import styled from 'styled-components';

function OverviewLeftBottom({ investLimit }) {
  return (
    <>
      <LimitBox>
        <LimitBoxWrapper>
          <Titlebox>
            <ProfitTitle>
              투자한도
              <i className="far fa-question-circle"></i>
            </ProfitTitle>
            <LimitAmount> {investLimit.total.toLocaleString()}원</LimitAmount>
          </Titlebox>
          <ProgressBar max="39681219" value="29681219" />
          <ProgressBarLabel>
            <span>총 잔여한도</span>
            <span>{investLimit.remainTotal.toLocaleString()}원</span>
          </ProgressBarLabel>
          <ProgressBarLabel>
            <span>부동산 잔여한도</span>
            <span>{investLimit.remainEstate.toLocaleString()}원</span>
          </ProgressBarLabel>
        </LimitBoxWrapper>
      </LimitBox>
      <KakaoBox>
        <div>
          <h3>우리 카톡 플친해요!</h3>
          <p>
            22퍼센트 채널 추가하고 <br /> 새로운 상품 알림을 받아보세요
          </p>
        </div>
        <img src="/image/kakaofriend.png" alt="kakaofriend" />
      </KakaoBox>
    </>
  );
}

const Box = styled.div`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 5px 5px 5px #ccc;
`;

const LimitBox = styled(Box)`
  padding: 19px;

  i {
    padding-left: 5px;
    color: #ccc;
    font-size: 1.1rem;
  }
`;

const LimitBoxWrapper = styled.div`
  width: 100%;
`;

const ProfitTitle = styled.div`
  width: 100%;
`;
const Titlebox = styled.div`
  padding-bottom: 60px;
`;

const LimitAmount = styled.div`
  padding: 10px 0;
  font-size: 1.4rem;
`;

const KakaoBox = styled(Box)`
  align-items: flex-start;
  flex-direction: row;
  position: relative;
  padding: 30px 20px;

  div {
    width: 100%;

    h3 {
      font-weight: 600;
      padding-bottom: 10px;
    }

    p {
      line-height: 130%;
      font-size: 0.8rem;
    }
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 140px;
  }
`;

const ProgressBar = styled.progress`
  display: block;
  width: 250px;
  height: 5px;
  margin-bottom: 15px;
  appearance: none;

  &::-webkit-progress-bar {
    color: coral;
    background-color: #ffa526;
    border-radius: 8px;
  }

  &::-webkit-progress-value {
    background-color: #ffcb64;
    border-radius: 8px;
  }
`;

const ProgressBarLabel = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  padding: 8px 0;
`;

export default OverviewLeftBottom;

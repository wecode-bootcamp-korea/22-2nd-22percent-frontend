import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Login/Input';
import Button from '../../components/Login/Button';

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpBox>
        <Title>회원가입</Title>
        <div className="inputWrapper">
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
        </div>
        <div className="checkWrapper">
          <Label>
            <div className="border">
              <input type="checkbox" name="agree" />
              아래 내용에 모두 동의합니다.
            </div>
          </Label>
          <Label>
            <div>
              <input type="checkbox" name="agree" />
              [필수] 이용약관 동의
            </div>
            <div className="showMore">상세보기</div>
          </Label>
          <Label>
            <div>
              <input type="checkbox" name="agree" />
              [필수] 개인정보 수집 이용 동의
            </div>
            <div className="showMore">상세보기</div>
          </Label>
        </div>
        <ButtonWrapper>
          <div>
            <Button>이메일로 가입</Button>
          </div>
          <div>
            <Button kakao>카카오로 로그인</Button>
          </div>
        </ButtonWrapper>
      </SignUpBox>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  background-color: #eee;
`;

const SignUpBox = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  margin: 200px 0;
  background-color: white;
`;

const Title = styled.h1`
  padding: 60px 0 50px 0;
  font-size: 1.7rem;
  text-align: center;
  font-weight: 300;
`;

const Label = styled.label`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 270px;
  padding: 5px 0;
  font-size: 0.8rem;

  input {
    margin: 0 10px 0 0;
  }
`;

const ButtonWrapper = styled.div`
  padding: 30px 80px 80px 80px;
`;

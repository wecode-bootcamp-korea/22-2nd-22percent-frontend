import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Login/Input';
import Button from '../../components/Login/Button';
// import KakaoLogin from 'react-kakao-login';

const SignIn = () => {
  return (
    <Wrapper>
      <SignUpBox>
        <Title>로그인</Title>
        <div>
          <Input placeholder="이메일 주소" />
          <Input placeholder="비밀번호" />
        </div>
        <div>
          <Label>
            <div>
              <input type="checkbox" />
              로그인 상태 유지
            </div>
          </Label>
        </div>
        <ButtonWrapper>
          <div>
            <Button>이메일로 로그인</Button>
          </div>
          <div>
            <Button kakao>카카오로 로그인</Button>
          </div>
        </ButtonWrapper>
      </SignUpBox>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  background-color: #eee;
`;

const SignUpBox = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  width: 400px;
  height: 500px;
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

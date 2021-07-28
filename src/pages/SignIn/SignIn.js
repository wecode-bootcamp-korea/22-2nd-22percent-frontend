import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { SIGNIN_API, KAKAO_API } from '../../config';
import Input from '../../components/Login/Input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const history = useHistory();

  //카카오로 회원가입 및 로그인
  const { Kakao } = window;
  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAO_API, {
          method: 'POST',
          headers: { Authorization: authObj.access_token },
        })
          .then(response => response.json())
          .then(result => {
            localStorage.setItem('accessToken', result.accessToken);
            alert('로그인 성공');
            history.push('/');
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  // 이메일로 로그인 하기
  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePwd = e => {
    setPwd(e.target.value);
  };

  const requestLogin = e => {
    e.preventDefault();

    fetch(SIGNIN_API, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.accessToken) {
          alert('로그인 성공!');
          localStorage.setItem('accessToken', res.accessToken);
          history.push('/');
        } else {
          alert('이메일과 비밀번호를 확인해주세요.');
        }
      });
  };

  return (
    <Wrapper>
      <SignUpBox>
        <form onSubmit={requestLogin}>
          <Title>로그인</Title>
          <div>
            <Input
              placeholder="이메일 주소"
              type="text"
              onChange={handleEmail}
            />
            <Input
              placeholder="비밀번호"
              type="password"
              onChange={handlePwd}
            />
          </div>
          <div>
            <Label>
              <div>
                <input type="checkbox" />
                로그인 상태 유지
              </div>
            </Label>
          </div>
          <div>
            <EmailBtn email={email} pwd={pwd}>
              이메일로 로그인
            </EmailBtn>
          </div>
        </form>
        <div onClick={handleKakaoLogin}>
          <KakaoBtn>카카오로 로그인</KakaoBtn>
        </div>
      </SignUpBox>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  background-color: #eee;
`;

const SignUpBox = styled.section`
  ${({ theme }) => theme.flexMixin('center', 'center')};
  flex-direction: column;
  margin: 200px 0;
  background-color: white;
  padding: 10px 50px 60px 50px;
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
  margin: 0 auto;
  padding: 5px 0;
  font-size: 0.8rem;

  input {
    margin: 0 10px 0 0;
  }
`;

const Btn = styled.button`
  width: 270px;
  height: 50px;
  margin: 5px;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
`;

const EmailBtn = styled(Btn).attrs(props => ({
  disabled: !(props.email && props.pwd),
}))`
  background-color: ${({ theme, disabled }) =>
    disabled ? '#ccc' : theme.colorMain};
  color: white;
`;

const KakaoBtn = styled(Btn)`
  background-color: #ffd900;
  color: black;
`;

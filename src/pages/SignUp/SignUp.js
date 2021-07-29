import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { SIGNUP_API, KAKAO_API } from '../../config';
import { validator } from '../../Validation/Validation';
import Input from '../../components/Login/Input';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [checkList, setCheckList] = useState([]);
  // const [error, setError] = useState(false);
  const history = useHistory();

  // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
  const handleCheck = e => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter(el => el !== e.target.name));
  };

  // 전체체크 선택시 전체 선택 or 전체해제
  const checkAll = e => {
    e.target.checked ? setCheckList(['terms', 'privacy']) : setCheckList([]);
  };

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
            alert('회원가입 성공');
            history.push('/');
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  // 이메일로 회원가입 및 로그인
  const handleSignupForm = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // 유효성검사 함수
  const isAllValid = form => {
    for (const name in form) {
      const value = form[name];
      const validateFunction = validator[name];

      if (!validateFunction(value)) return false;
    }

    return true;
  };

  // 에러메세지 출력 함수
  // const handleError = () => {
  // if (isAllValid(formValues)) {
  //   setError(false);
  // } else {
  //   setError(true);
  // }
  // };

  // 회원가입
  const checkInfo = e => {
    e.preventDefault();
    if (isAllValid(formValues)) {
      fetch(SIGNUP_API, {
        method: 'POST',
        body: JSON.stringify({
          ...formValues,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.accessToken) {
            localStorage.setItem('accessToken', res.accessToken);
            alert('회원가입 성공!');
            history.push('/');
          } else {
            alert('회원가입에 실패하였습니다.');
            setFormValues({ email: '', password: '' });
          }
        });
    } else {
      alert('올바른 형식의 이메일과 비밀번호를 입력해주세요.');
    }
  };

  return (
    <Wrapper>
      <SignUpBox>
        <Title>회원가입</Title>
        <form onSubmit={checkInfo}>
          <div className="inputWrapper">
            <Input
              placeholder="이메일"
              type="text"
              name="email"
              onChange={handleSignupForm}
            />
            {/* <Error error={error}>올바른 형식의 이메일을 입력해주세요.</Error> */}
            <Input
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={handleSignupForm}
            />
            {/* <Error error={error}>
              대소문자, 특수문자를 포함한 8자 이상을 입력해주세요.
            </Error> */}
          </div>
          <div>
            <Label>
              <div>
                <input
                  type="checkbox"
                  name="checkAll"
                  onChange={checkAll}
                  checked={checkList.length === 2}
                />
                아래 내용에 모두 동의합니다.
              </div>
            </Label>
            <Label>
              <div>
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handleCheck}
                  checked={checkList.includes('terms')}
                />
                [필수] 이용약관 동의
              </div>
              <div className="showMore">상세보기</div>
            </Label>
            <Label>
              <div>
                <input
                  type="checkbox"
                  name="privacy"
                  onChange={handleCheck}
                  checked={checkList.includes('privacy')}
                />
                [필수] 개인정보 수집 이용 동의
              </div>
              <div className="showMore">상세보기</div>
            </Label>
          </div>

          <EmailBtn
            email={formValues.email}
            password={formValues.password}
            checkList={checkList}
          >
            이메일로 가입
          </EmailBtn>
        </form>

        <div onClick={handleKakaoLogin}>
          <KakaoBtn>카카오로 가입</KakaoBtn>
        </div>
      </SignUpBox>
    </Wrapper>
  );
};

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
  padding-top: 15px;
  font-size: 0.8rem;

  input {
    margin: 0 10px 0 0;
  }

  &:first-child {
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }

  &:last-child {
    padding-top: 8px;
    padding-bottom: 20px;
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
  disabled: !(props.email && props.password && props.checkList.length === 2),
}))`
  background-color: ${({ theme, disabled }) =>
    disabled ? '#ccc' : theme.colorMain};
  color: white;
`;

const KakaoBtn = styled(Btn)`
  width: 270px;
  height: 50px;
  margin: 5px;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffd900;
  color: black;
`;

const Error = styled.div`
  display: ${({ error }) => (error ? 'block' : 'none')};
  font-size: 0.7rem;
  padding-left: 10px;
  color: tomato;
`;

export default SignUp;

import React from 'react';

import styled from 'styled-components';

function Footer() {
  return (
    <CommonFooter>
      <InnerBox>
        <InfoContainer>
          <ul>
            <Divider>
              <li>이용안내</li>
              <li>인재채용</li>
              <li>기술블로그</li>
            </Divider>
            <Divider>
              <li>윤리강령</li>
              <li>이용약관</li>
              <li>개인정보 처리 방침</li>
            </Divider>
            <Divider>
              <li>전자금융거래 약관</li>
            </Divider>
          </ul>
          <Service>
            <ServiceItem>
              <span>
                <b>고객센터</b>평일10시~18시 (점심12시~13시)
              </span>
            </ServiceItem>
            <ServiceItem>
              <span>
                전화<b>02-0000-0000</b>
              </span>
              <span>
                팩스<b>02-0000-0000</b>
              </span>
            </ServiceItem>
            <ServiceItem>
              <span>
                대표메일<b>ask@22percent.kr</b>
              </span>
              <span>
                사업제휴<b>partner@22percent.kr</b>
              </span>
            </ServiceItem>
          </Service>
          <SnsBox>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google-plus"></i>
            <i className="fab fa-snapchat"></i>
          </SnsBox>
        </InfoContainer>
        <div>
          <CompanyInfo>
            <span>(주)에잇퍼센트 | 대표 </span>
            <span>
              법인등록번호 | 온라인투자연계금융업 | 서울특별시 강남구 삼성동
              테헤란로 427
            </span>
          </CompanyInfo>
          <ServiceAlert>
            대출금리: 연 20% 이내 대출 실행시 플랫폼수수료 및 기타 부대비용이
            발생할 수 있습니다. 중도상환은 전액상환만 가능하며 계약조건에 따라
            중도상환금액의 최대 2.0% 이내의 수수료가 부과되거나 면제될 수
            있습니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시
            귀하의 개인신용평점이 하락할 수 있습니다. 에잇퍼센트는 투자상품에
            대한 충분한 정보를 제공할 의무가 있으며, 에잇퍼센트가 제공하는
            정보를 확인한 후 투자하시기 바랍니다. 에잇퍼센트는 투자원금과 수익을
            보장하지 않으며, 투자손실에 대한 책임은 모두 투자자에게 있습니다.
            투자 플랫폼이용료는 최대 연1.2% 입니다.
          </ServiceAlert>
        </div>
      </InnerBox>
    </CommonFooter>
  );
}

export default Footer;

const CommonFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #242424;
  color: ${props => props.theme.colorDesc};
`;

const InnerBox = styled.div`
  padding: 70px 0 80px;
  width: 65%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  li {
    display: inline-block;
    font-size: 20px;
  }
`;

const Divider = styled.div`
  margin-bottom: 20px;
  ${props => props.theme.flexMixin};

  li + li {
    margin-left: 20px;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
`;

const ServiceItem = styled.div`
  margin-bottom: 15px;

  &:first-of-type b {
    margin-left: 0;
  }

  b {
    margin: 0 10px 0 10px;
    font-weight: 700;
  }
`;

const CompanyInfo = styled.div`
  margin-bottom: 30px;
`;

const ServiceAlert = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
`;

const SnsBox = styled.div`
  font-size: 32px;

  i + i {
    margin-left: 8px;
  }
`;

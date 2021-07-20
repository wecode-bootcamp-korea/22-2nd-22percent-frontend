import React, { useEffect } from 'react';

import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import KakaoMapScript from './KakaoMapScript';

const pieChart = {
  legend: {
    display: false,
  },
  labels: { display: false },
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(222, 226, 230)',
        'rgb(173, 181, 189)',
        'rgb(50, 130, 240)',
      ],
      hoverBackgroundColor: [
        'rgb(222, 226, 230)',
        'rgb(173, 181, 189)',
        'rgb(50, 130, 240)',
      ],
      borderWidth: '.5',
      weight: '.5',
      options: {
        responsive: false,
      },
    },
  ],
  text: '23%',
};

const line = {
  labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
  datasets: [
    {
      label: '신용자 등급 정보',
      data: [900, 920, 880, 890, 850, 870, 880, 890, 920, 920, 780, 800],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  display: false, // label 숨기기
};

function RealEstateDetail() {
  useEffect(() => {
    KakaoMapScript();
  }, []);
  return (
    <main>
      <CarouselContainer>
        <div className="carusel-dim"></div>
        <div className="carousel-slide">
          <ul>
            <li>
              <img src="https://cdn-media.8percent.kr/deal/7mNeTdhvF52d0J237jbPYPl0fDJUFj_Deal_page3.jpg" />
            </li>
            <li>
              <img src="https://cdn-media.8percent.kr/deal/7mNeTdhvF52d0J237jbPYPl0fDJUFj_Deal_page3.jpg" />
            </li>
            <li>
              <img src="https://cdn-media.8percent.kr/deal/7mNeTdhvF52d0J237jbPYPl0fDJUFj_Deal_page3.jpg" />
            </li>
          </ul>
        </div>
        <div className="carusel-dim"></div>
        <CarouselPage>1/3</CarouselPage>
        <CaruselBtnWrap>
          <button className="carousel-control left-btn">
            <svg
              data-v-1b48df72=""
              data-v-33ca715b=""
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="41"
              viewBox="0 0 22 41"
            >
              <g data-v-1b48df72="" fill="none" fill-rule="evenodd">
                <path
                  data-v-1b48df72=""
                  fill="white"
                  d="M1.403 41c-.187 0-.368-.033-.541-.1a1.31 1.31 0 0 1-.461-.3A1.312 1.312 0 0 1 0 39.636c0-.374.134-.694.4-.962L18.715 20.36.681 2.365a1.335 1.335 0 0 1-.4-.982C.28.995.414.668.68.4S1.276 0 1.663 0s.715.134.982.4l18.954 18.998c.267.267.401.588.401.962s-.134.694-.4.962L2.363 40.599a1.393 1.393 0 0 1-.962.4z"
                ></path>
              </g>
            </svg>
          </button>
          <button className="carousel-control right-btn">
            <svg
              data-v-1b48df72=""
              data-v-33ca715b=""
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="41"
              viewBox="0 0 22 41"
            >
              <g data-v-1b48df72="" fill="none" fill-rule="evenodd">
                <path
                  data-v-1b48df72=""
                  fill="white"
                  d="M1.403 41c-.187 0-.368-.033-.541-.1a1.31 1.31 0 0 1-.461-.3A1.312 1.312 0 0 1 0 39.636c0-.374.134-.694.4-.962L18.715 20.36.681 2.365a1.335 1.335 0 0 1-.4-.982C.28.995.414.668.68.4S1.276 0 1.663 0s.715.134.982.4l18.954 18.998c.267.267.401.588.401.962s-.134.694-.4.962L2.363 40.599a1.393 1.393 0 0 1-.962.4z"
                ></path>
              </g>
            </svg>
          </button>
        </CaruselBtnWrap>
      </CarouselContainer>
      <DealHeader>
        <div className="deal-header-grid">
          <article className="deal-index">41207호</article>
          <h1 className="deal-heading">
            소거안정 357호 세종 새뜸1단지 메이저시티푸르지오
          </h1>
          <div className="deal-info-container">
            <ul>
              <li className="deal-info">
                <p className="deal-info-label">등급</p>
                <p className="deal-info-value">A</p>
              </li>
              <li className="deal-info-bar"></li>
              <li className="deal-info">
                <p className="deal-info-label">수익률</p>
                <p className="deal-info-value">8.5%</p>
              </li>
              <li className="deal-info-bar"></li>
              <li className="deal-info">
                <p className="deal-info-label">상환기간</p>
                <p className="deal-info-value">12개월</p>
              </li>
              <li className="deal-info-bar"></li>
              <li className="deal-info">
                <p className="deal-info-label">상환방식</p>
                <p className="deal-info-value">만기일시</p>
              </li>
              <li className="deal-info-bar"></li>
              <li className="deal-info">
                <p className="deal-info-label">모집현황</p>
                <p className="deal-info-value">12,829/20,000만원</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="deal-progress">
          <div className="deal-progress-tick" style={{ left: '60%' }}></div>
          <div className="deal-progress-rail">
            <span className="deal-progress-handle" style={{ left: '60%' }}>
              64%
            </span>
          </div>
        </div>
      </DealHeader>
      <ContentWrap>
        <section className="content">
          <Deal>
            <ContentScheduleMd>
              <article className="select-inline">
                <div className="select-wrap">
                  <select id="deal-amout-select-sm" className="form-control">
                    <option value="5000">0.5만원</option>
                  </select>
                </div>
              </article>
              <p>을 투자할 경우,예상 세후 지급금은</p>
              <div>5000원</div>
            </ContentScheduleMd>
            <ContentBlock>
              <h1 className="content-heading">투자 포인트</h1>
              <ul>
                <li className="selling-point">
                  <div className="image-wrapper">
                    <img
                      src="https://cdn-media.8percent.kr/deal/BfE0n8ad7G5Ux3c2RJtg3g2KiK9RBV_invalid-name.svg"
                      alt=""
                    />
                  </div>
                  <div className="selling-point__content">
                    <p className="title">양호한 LTV 비율과 채권보전</p>
                    <p className="des">
                      잔액 기준 LTV 55.67%로 낙찰가율 대비 낮은 편입니다.
                    </p>
                  </div>
                </li>
                <li className="selling-point">
                  <div className="image-wrapper">
                    <img
                      src="https://cdn-media.8percent.kr/deal/t2pNSp5uIVUBChr7eWogTHrfzXlYVK_invalid-name.svg"
                      alt=""
                    />
                  </div>
                  <div className="selling-point__content">
                    <p className="title">우수한 교육 환경</p>
                    <p className="des">
                      단지 1km 내 어린이집, 초, 중, 고등학교가 위치해 있어
                      학군이 우량하고 아이들 등, 하교가 안전합니다.
                    </p>
                  </div>
                </li>
              </ul>
            </ContentBlock>
            <ContentBlock>
              <h1 className="content-heading">상품 개요</h1>
              <div>
                <table>
                  <colgroup>
                    <col width="114px;" />
                    <col width="221px;" />
                    <col width="144px;" />
                    <col widthj="221px;" />
                  </colgroup>
                  <tr>
                    <th className="table-lab">대출예정금액</th>
                    <td className="table-lab">2억원</td>
                    <th className="table-lab">상환일자</th>
                    <td className="table-lab">매월 5일</td>
                  </tr>
                  <tr>
                    <th className="table-lab">대출종류</th>
                    <td className="table-lab">부동산 담보 대출</td>
                    <th className="table-lab">자금용도</th>
                    <td className="table-lab">생활 자금</td>
                  </tr>
                  <tr>
                    <th className="table-lab">감정가</th>
                    <td className="table-lab">9억원</td>
                    <th className="table-lab">담보비율</th>
                    <td className="table-lab">LTV 55.67%</td>
                  </tr>
                  <tr>
                    <th className="table-lab">상환계획</th>
                    <td className="table-lab" colspan="3">
                      1. 대출자의 자체 자금
                      <br /> 2. 타금융기관 또는 8퍼센트 대출을 통한 상환 <br />
                      3. 경매 또는 채권매각 (NPL)
                    </td>
                  </tr>
                </table>
              </div>
            </ContentBlock>
            <ContentBlock>
              <h1 className="content-heading">담보 안정성</h1>
              <div className="chart-area">
                <DealMortgageTempate>
                  <ChartItem>
                    <Doughnut
                      data={pieChart}
                      width={250}
                      height={250}
                      options={options}
                      className="pie-chart"
                    />
                    <div className="chart-center">
                      <p>감정가</p>
                      <p>9억원</p>
                    </div>
                  </ChartItem>
                </DealMortgageTempate>
                <LegendItem>
                  <article className="legend">
                    <span className="legend-color "></span>
                    <span className="legend-label">선순위 대출잔액</span>
                    <span className="legend-value">
                      3억 100만원<span className="percent"> 33.44%</span>
                    </span>
                  </article>
                  <article className="legend">
                    <span className="legend-color real-grey"></span>
                    <span className="legend-label">8퍼센트 대출금</span>
                    <span className="legend-value">
                      3억 100만원<span className="percent"> 33.44%</span>
                    </span>
                  </article>
                  <article className="legend">
                    <span className="legend-color blue"></span>
                    <span className="legend-label">담보 여유금</span>
                    <span className="legend-value">
                      3억 100만원<span className="percent"> 33.44%</span>
                    </span>
                  </article>
                  <p className="expected-recover-amount">
                    회수예상가액 5억 9,900만원
                  </p>
                </LegendItem>
              </div>
            </ContentBlock>
            <ContentBlock>
              <h1 className="content-heading">담보 상세</h1>
              <Map>
                <div className="map-area" id="myMap"></div>
              </Map>
              <div>
                <table>
                  <colgroup>
                    <col width="114px;" />
                    <col width="221px;" />
                    <col width="144px;" />
                    <col widthj="221px;" />
                  </colgroup>
                  <tr>
                    <th className="table-lab">주소</th>
                    <td className="table-lab" colspan="3">
                      세종특별자치시 새롬남로 18 새뜸마을1단지
                    </td>
                  </tr>
                  <tr>
                    <th className="table-lab">준공시기</th>
                    <td className="table-lab">2017년 4월 </td>
                    <th className="table-lab">규모</th>
                    <td className="table-lab">1077세대 / 14개동</td>
                  </tr>
                  <tr>
                    <th className="table-lab">공급면적</th>
                    <td className="table-lab">146.99㎡ </td>
                    <th className="table-lab">전용면적</th>
                    <td className="table-lab">120.50㎡</td>
                  </tr>
                  <tr>
                    <th className="table-lab">층수</th>
                    <td className="table-lab">1층 / 15층 </td>
                    <th className="table-lab">임차여부 </th>
                    <td className="table-lab">본인거주</td>
                  </tr>
                </table>
              </div>
            </ContentBlock>
            <ContentBlock>
              <h1 className="content-heading">대출자 정보 </h1>
              <div className="line-chart">
                <Line data={line} />
              </div>
              <div>
                <table>
                  <colgroup>
                    <col width="114px;" />
                    <col width="221px;" />
                    <col width="144px;" />
                    <col widthj="221px;" />
                  </colgroup>
                  <tr>
                    <th className="table-lab">KCB 점수 </th>
                    <td className="table-lab">783점</td>
                    <th className="table-lab">나이</th>
                    <td className="table-lab">40대</td>
                  </tr>
                </table>
              </div>
            </ContentBlock>
          </Deal>
          <ControllerWrap>
            <form>
              <section className="controller">
                <h2 className="controller-heading">투자하기</h2>
                <div className="controller-balance">
                  <div className="group">
                    <span className="label">나의 예치금</span>
                    <span>0 원</span>
                  </div>
                  <div className="bar"></div>
                  <div className="group">
                    <span className="label">나의 포인트</span>
                    <span>0 P</span>
                  </div>
                </div>
                <SelectWrap>
                  <select id="select-lg" className="form-control">
                    <option value="5000">0.5만원</option>
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
                  <button className="btn btn-priority btn-md">투자하기</button>
                </ButtonPriority>
              </section>
            </form>
          </ControllerWrap>
        </section>
      </ContentWrap>
    </main>
  );
}

export default RealEstateDetail;
const CaruselBtnWrap = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -20px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .carousel-control {
    background: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  .left-btn {
    svg {
      transform: scaleX(-1);
    }
  }
  .left-btn {
  }
`;
const CarouselPage = styled.div`
  display: block;
  position: absolute;
  color: #fff;
  bottom: 40px;
  left: 50%;
  margin-left: -21.5px;
  margin: 0 auto;
  border-radius: 11.5px;
  padding: 5px 0 3px;
  width: 42px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
`;
const CarouselContainer = styled.div`
  height: 360px;
  overflow: hidden;
  display: flex;
  position: relative;

  .carousel-dim {
    flex: 1 0 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 30;
  }

  .carousel-slide {
    overflow: visible;

    ul li img {
      width: 100%;
      height: 100%;
    }
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
//Bar.css
const Bar = styled.div`
  margin: 20px 0;
  border-bottom: solid 1px #f1f3f5;
`;
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
//ControllerWrap.css
const ControllerWrap = styled.div`
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
const Map = styled.div`
  .map-area {
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-bottom: 30px;
    border: solid 1px #dee2e6;
  }
`;

//LegendItem.css
const LegendItem = styled.div`
  flex: 0 1 50%;
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3c3c3c;
  .expected-recover-amount {
    font-size: 14px;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: -0.6px;
    color: #9ca5ad;
    text-align: right;
    margin-top: -12px;
  }
  .legend {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .legend-color {
      background-color: rgb(222, 226, 230);
      display: inline-block;
      margin-right: 10px;
      border-radius: 2px;
      width: 14px;
      height: 14px;
    }
    .blue {
      background-color: rgb(50, 130, 240);
    }
    .real-grey {
      background-color: rgb(173, 181, 189);
    }
    .legend-label {
      margin-right: auto;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.71;
      letter-spacing: -0.3px;
      color: #868e96;
    }
    .legend-value {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: -0.3px;
      color: #495057;

      .percent {
        font-weight: 400;
      }
    }
  }
`;
//DealMortgageTempate.css
const DealMortgageTempate = styled.div`
  display: flex;
  flex: 0 1 240px;
  position: relative;
  margin-right: auto;
`;
//chart.chart
const ChartItem = styled.div`
  height: 240px;
  width: 240px;
  position: relative;
  .chart-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
//content.css
const ContentBlock = styled.div`
  margin-bottom: 80px;
  .line-chart {
    margin-bottom: 20px;
  }
  .content-heading {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.5px;
    line-height: 1.27;
    color: #1d2024;
  }
  .chart-area {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  ul {
    padding-inline-start: 0;

    li {
      display: flex;
      flex-direction: row;
      margin-bottom: 30px;
      align-items: start;
      align-items: center;
      .image-wrapper {
        img {
          box-sizing: border-box;
          padding-right: 30px;
        }
      }
      .selling-point__content {
        display: flex;
        flex-direction: column;
        width: 100%;

        .title {
          font-size: 18px;
          font-weight: bold;
          line-height: 26px;
          letter-spacing: -0.4px;
          padding-bottom: 10px;
          color: #1d2024;
        }
      }
    }
  }
  table {
    table-layout: fixed;
    width: 100%;
    tr {
      th {
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.6px;
        margin-bottom: 7px;
        font-weight: normal;
        color: ${props => props.theme.colorDesc};
        background: #f8f9fa;
      }
      td {
        font-size: 16px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: -0.4px;
        margin-bottom: 8px;
        color: #4b525a;
      }
      th,
      td {
        padding: 14px 20px;
      }
      .table-lab {
        box-shadow: inset 0 1px 0 0 #f1f3f5, inset 0 -1px 0 0 #f1f3f5;
      }
    }
  }
`;
//content-schedule-md.css
const ContentScheduleMd = styled.div`
  display: none;
  margin-bottom: 66px;
  border: solid 1px #dee2e6;
  padding: 33px 40px;
  text-align: center;
`;
//ContentWrap.css
const ContentWrap = styled.div`
  margin: 0 auto;
  padding: 0 18px;
  max-width: 1110px;
  section {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
`;
//DealHeader.css
const DealHeader = styled.header`
  margin: 0 auto;
  padding: 60px 0;
  display: block;

  .deal-header-grid {
    display: flex;
    flex-direction: column;
    max-width: 730px;
    margin: 0 auto;
    padding: 0 7.5px;

    .deal-index {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.38;
      letter-spacing: -0.3px;
      color: #858d94;
    }
    .deal-heading {
      font-weight: bold;
      font-size: 32px;
      line-height: 48px;
      letter-spacing: -1px;
      margin-bottom: 30px;
      color: #1d2024;
      word-break: keep-all;
    }

    .deal-info-container {
      ul {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-bottom: 40px;
        li.deal-info {
          p {
            font-size: 14px;
            margin-bottom: 10px;
            font-weight: normal;
            line-height: normal;
            letter-spacing: -0.2px;
            color: #858d94;
          }
          .deal-info-value {
            font-size: 20px;
            font-weight: normal;
            line-height: 24px;
            letter-spacing: -0.5px;
            color: #1d2024;
          }
        }
        li.deal-info-bar {
          flex: 0 0 1px;
          margin: 0 25px;
          background: #f1f3f5;
        }
      }
    }
  }
  .deal-progress {
    position: relative;
    padding: 0 25px;
    height: 3px;
    background-image: linear-gradient(to right, #a56ceb, #6c3ad3);

    .deal-progress-tick {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #e6e6e6;
    }

    .deal-progress-rail {
      position: relative;

      .deal-progress-handle {
        position: absolute;
        top: -12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 51px;
        height: 26px;
        border-radius: 15px;
        color: #fff;
        background-color: ${props => props.theme.colorMain};
        z-index: 1;
        transform: translateX(-50%);
      }
    }
  }
`;
const Deal = styled.div`
  flex: 8 8 66.6667%;
  margin-right: calc(8.3333% - 15px);
`;

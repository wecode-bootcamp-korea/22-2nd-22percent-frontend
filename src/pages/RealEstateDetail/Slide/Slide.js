import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const TOTAL_SLIDES = 2;

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    console.log(currentSlide);
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    console.log(currentSlide);
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <CarouselContainer>
      <div className="carusel-dim"></div>
      <div className="carousel">
        <div className="carousel-slide">
          <ul ref={slideRef}>
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
      </div>
      <div className="carusel-dim"></div>
      <CarouselPage>{currentSlide + 1} / 3</CarouselPage>
      <CaruselBtnWrap>
        <button className="carousel-control left-btn" onClick={prevSlide}>
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
        <button className="carousel-control right-btn" onClick={nextSlide}>
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
  );
});

export default Slide;

const CarouselContainer = styled.div`
  height: 360px;
  overflow: hidden;
  display: flex;
  position: relative;
  .carousel {
    max-width: 1095px;
    display: flex;
    height: 360px;
    overflow: visible;
  }

  .carousel-dim {
    flex: 1 0 0;
    background: rgba(255, 255, 255, 0.9);
    z-index: 30;
  }

  .carousel-slide {
    flex: 0 1 100%;
    overflow: visible;

    ul {
      display: flex;
      transform: translateX();

      li {
        width: 100vw;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
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
`;

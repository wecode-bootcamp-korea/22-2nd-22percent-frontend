import React from 'react';
import * as S from '../DealStyle';

function DealOutLine() {
  return (
    <S.ContentBlock>
      <S.ContentHeading>상품 개요</S.ContentHeading>
      <div>
        <table>
          <colgroup>
            <col width="114px;" />
            <col width="221px;" />
            <col width="144px;" />
            <col width="221px;" />
          </colgroup>
          <tr>
            <S.TableLabTh>대출예정금액</S.TableLabTh>
            <S.TableLabTd>2억원</S.TableLabTd>
            <S.TableLabTh>상환일자</S.TableLabTh>
            <S.TableLabTd>매월 5일</S.TableLabTd>
          </tr>
          <tr>
            <S.TableLabTh>대출종류</S.TableLabTh>
            <S.TableLabTd>부동산 담보 대출</S.TableLabTd>
            <S.TableLabTh>자금용도</S.TableLabTh>
            <S.TableLabTd>생활 자금</S.TableLabTd>
          </tr>
          <tr>
            <S.TableLabTh>감정가</S.TableLabTh>
            <S.TableLabTd>9억원</S.TableLabTd>
            <S.TableLabTh>담보비율</S.TableLabTh>
            <S.TableLabTd>LTV 55.67%</S.TableLabTd>
          </tr>
          <tr>
            <S.TableLabTh>상환계획</S.TableLabTh>
            <S.TableLabTd colspan="3">
              1. 대출자의 자체 자금
              <br /> 2. 타금융기관 또는 8퍼센트 대출을 통한 상환 <br />
              3. 경매 또는 채권매각 (NPL)
            </S.TableLabTd>
          </tr>
        </table>
      </div>
    </S.ContentBlock>
  );
}

export default DealOutLine;

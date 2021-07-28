import React, { useEffect } from 'react';
import KakaoMapScript from '../../KakaoMapScript';

import * as S from '../DealStyle';

function DealDetail(props) {
  useEffect(() => {
    KakaoMapScript(props.mortgageInfoLatitude, props.mortgageInfoLongitude);
  }, []);

  const years = props.mortgageCompletedDate.split('-')[0];
  const month = props.mortgageCompletedDate.split('-')[1];
  return (
    <S.ContentBlock>
      <S.ContentHeading>담보 상세</S.ContentHeading>
      <S.Map>
        <div className="map-area" id="myMap"></div>
      </S.Map>
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
              {props.mortgageInfoAddress}
            </td>
          </tr>
          <tr>
            <th className="table-lab">준공시기</th>
            <td className="table-lab">
              {years}년 {month}월
            </td>
            <th className="table-lab">규모</th>
            <td className="table-lab">{props.mortgageScale}</td>
          </tr>
          <tr>
            <th className="table-lab">공급면적</th>
            <td className="table-lab">146.99㎡ </td>
            <th className="table-lab">전용면적</th>
            <td className="table-lab">120.50㎡</td>
          </tr>
          <tr>
            <th className="table-lab">층수</th>
            <td className="table-lab">{props.mortFloor} </td>
            <th className="table-lab">임차여부 </th>
            <td className="table-lab">본인거주</td>
          </tr>
        </table>
      </div>
    </S.ContentBlock>
  );
}

export default DealDetail;

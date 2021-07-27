import React from 'react';

import { Line } from 'react-chartjs-2';
import { makeLineChartData } from '../../Chart/lineChart.js';

import * as S from '../DealStyle';

function DealInfo() {
  //Chart Data
  const line = makeLineChartData();
  return (
    <S.ContentBlock>
      <S.ContentHeading>대출자 정보 </S.ContentHeading>
      <S.LineChart>
        <Line data={line} />
      </S.LineChart>
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
    </S.ContentBlock>
  );
}

export default DealInfo;

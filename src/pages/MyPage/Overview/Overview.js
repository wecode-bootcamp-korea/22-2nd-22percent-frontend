import React, { useState, useEffect } from 'react';
import OverviewLeftTop from './OverviewLeftTop';
import OverviewRightTop from './OverviewRightTop';
import OverviewLeftBottom from './OverviewLeftBottom';
import OverviewRightBottom from './OverviewRightBottom';
import { isValidObject } from '../../../utils';

import styled from 'styled-components';

function Overview() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/data/overview.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <>
      {isValidObject(data) && (
        <Wrapper>
          <OverviewGrid>
            <OverviewBox>
              <OverviewLeft>
                <OverviewLeftTop deposit={data.results.deposit} />
              </OverviewLeft>
              <OverviewRight>
                <OverviewRightTop
                  overview={data.results.overview}
                  investStatus={data.results.investStatus}
                />
              </OverviewRight>
            </OverviewBox>
            <OverviewBox>
              <OverviewLeft>
                <OverviewLeftBottom investLimit={data.results.investLimit} />
              </OverviewLeft>
              <OverviewRight>
                <OverviewRightBottom portfolio={data.results.portfolio} />
              </OverviewRight>
            </OverviewBox>
          </OverviewGrid>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin};
  background-color: #f4f4f4;
  flex-direction: column;
`;

const OverviewGrid = styled.main`
  ${({ theme }) => theme.flexMixin};
  flex-direction: column;
  padding: 80px;
`;

const OverviewBox = styled.div`
  ${({ theme }) => theme.flexMixin};
  margin-bottom: 30px;
`;

const OverviewLeft = styled.div`
  width: 290px;
  height: 350px;
`;

const OverviewRight = styled.div`
  width: 590px;
  height: 350px;
  margin-left: 15px;
`;

export default Overview;

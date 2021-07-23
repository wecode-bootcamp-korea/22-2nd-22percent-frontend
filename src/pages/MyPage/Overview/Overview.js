import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OverviewLeftTop from './OverviewLeftTop';
import OverviewRightTop from './OverviewRightTop';
import OverviewLeftBottom from './OverviewLeftBottom';
import OverviewRightBottom from './OverviewRightBottom';
import { isValidObject } from '../../../utilities/utils';

function Overview() {
  const [summary, setSummary] = useState({});
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    // Promise.all
    // Promise.allSettled
    fetch('/data/investmentSummaryView.json')
      .then(res => res.json())
      .then(res => setSummary(res.results));
    fetch('/data/portfolioView.json')
      .then(res => res.json())
      .then(res => setPortfolio(res.results));
  }, []);

  return (
    isValidObject(summary) &&
    isValidObject(portfolio) && (
      <Wrapper>
        <OverviewGrid>
          <OverviewBox>
            <OverviewLeft>
              <OverviewLeftTop deposit={summary.deposit} />
            </OverviewLeft>
            <OverviewRight>
              <OverviewRightTop summary={summary} />
            </OverviewRight>
          </OverviewBox>
          <OverviewBox>
            <OverviewLeft>
              <OverviewLeftBottom investLimit={summary.investLimit} />
            </OverviewLeft>
            <OverviewRight>
              <OverviewRightBottom portfolio={portfolio} />
            </OverviewRight>
          </OverviewBox>
        </OverviewGrid>
      </Wrapper>
    )
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexMixin};
  padding-top: 150px;
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

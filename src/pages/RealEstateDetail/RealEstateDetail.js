import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Slide from './Slide/Slide';
import DealHeader from './DealHeader/DealHeader';
import Deal from './Deal/Deal';
import ControllerWrap from './ControllerWrap/ControllerWrap';

const RealEstateDetail = () => {
  const [dealInfo, setDealInfo] = useState(null);

  useEffect(() => {
    fetch(`https://13.124.4.250:8000/deals/100`)
      .then(res => res.json())
      //.then(res => console.log(res.dealInfo[0].name));
      .then(res => setDealInfo(res.dealInfo));
  }, []);
  console.log(dealInfo);
  return (
    <main>
      {dealInfo && (
        <>
          <Slide />
          <DealHeader
            dealInfoName={dealInfo[0].name}
            delInfoGrade={dealInfo[0].grade}
          />
          <ContentWrap>
            <section>
              <Deal />
              <ControllerWrap />
            </section>
          </ContentWrap>
        </>
      )}
    </main>
  );
};

export default RealEstateDetail;

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

import React from 'react';
import styled from 'styled-components';

import Slide from './Slide/Slide';
import DealHeader from './DealHeader/DealHeader';
import Deal from './Deal/Deal';
import ControllerWrap from './ControllerWrap/ControllerWrap';

function RealEstateDetail() {
  return (
    <main>
      <Slide />
      <DealHeader />
      <ContentWrap>
        <section>
          <Deal />
          <ControllerWrap />
        </section>
      </ContentWrap>
    </main>
  );
}

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

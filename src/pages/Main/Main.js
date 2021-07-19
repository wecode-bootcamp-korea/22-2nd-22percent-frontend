import React from 'react';

import styled from 'styled-components';

function Main() {
  return (
    <>
      <h1>hi</h1>
      <Container>
        <h1>Main</h1>
      </Container>
    </>
  );
}

export default Main;

const Container = styled.div`
  color: ${props => props.theme.colorMain};
`;

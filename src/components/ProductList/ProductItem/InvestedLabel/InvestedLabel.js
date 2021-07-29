import React from 'react';
import styled from 'styled-components';

function InvestedLabel() {
  return (
    <Box>
      <i className="far fa-check-circle" />
    </Box>
  );
}

export default InvestedLabel;

const Box = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;

  i {
    font-size: 40px;
    color: #00ead3;
  }
`;

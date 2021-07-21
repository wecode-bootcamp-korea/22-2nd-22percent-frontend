import React from 'react';
import styled from 'styled-components';

function EmptyIndividual() {
  return (
    <tr>
      <Cell colSpan="8">
        <Text>조건에 일치하는 상품이 없습니다</Text>
      </Cell>
    </tr>
  );
}

export default EmptyIndividual;

const Cell = styled.td`
  position: relative;
  padding: 100px 0 150px;
`;

const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colorDesc};
`;

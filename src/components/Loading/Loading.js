import React from 'react';
import styled, { keyframes, css } from 'styled-components';

function Loading() {
  return (
    <Box>
      <DotBox>
        {[...Array(5)].map((_, idx) => (
          <Dot idx={idx} key={idx} />
        ))}
      </DotBox>
    </Box>
  );
}

export default Loading;

const Box = styled.div`
  position: absolute;
  bottom: 110px;
  left: 50%;
  padding: 20px 0 0;
  transform: translateX(-50%);
`;

const DotBox = styled.ul`
  ${({ theme }) => theme.flexMixin('space-between', 'center')};
  width: 100px;
  color: ${({ theme }) => theme.colorMain};
  font-weight: 700;
`;

const movingDot = keyframes`
0% {
  transform: translateY(0px);
}
50% {
  transform: translateY(-35px);
}
100% {
transform: translateY(0px);
}
`;

const Dot = styled.li`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colorMain};
  border-radius: 50%;
  ${({ idx }) =>
    css`
      animation: ${movingDot} 1s ${`0.${idx}s`} infinite ease-in-out;
    `}
`;

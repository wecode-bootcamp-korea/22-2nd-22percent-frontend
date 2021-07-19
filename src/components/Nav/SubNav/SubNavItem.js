import React from 'react';
import styled from 'styled-components';

function SubNavItem(props) {
  return (
    <>
      {props.children.map((li, i) => (
        <Item key={i}>{li}</Item>
      ))}
    </>
  );
}

export default SubNavItem;

const Item = styled.li`
  margin: 0 15px 0;
  padding: 20px 30px;
  color: ${({ theme }) => theme.colorTitle};
  transition: color 0.3s ease-out;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

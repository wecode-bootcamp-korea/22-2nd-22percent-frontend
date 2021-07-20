import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SubNavItem({ children }) {
  const location = useLocation();

  return (
    <>
      {children.map(li => (
        <Link to={li.path} key={li.id}>
          <Item isSelected={li.path === location.pathname}>{li.name}</Item>
        </Link>
      ))}
    </>
  );
}

export default SubNavItem;

const Item = styled.li`
  position: relative;
  margin: 0 15px 0;
  padding: 20px 5px;
  margin: 0 25px;
  color: ${({ theme, isSelected }) =>
    isSelected ? 'black' : theme.colorTitle};
  transition: color 0.3s ease-out;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: ${({ isSelected }) => isSelected && '3px solid black'};
  }
`;

import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder }) => {
  return (
    <>
      <InputBox placeholder={placeholder} type="text" />
    </>
  );
};

const InputBox = styled.input`
  display: block;
  width: 250px;
  padding: 15px 10px;
  margin: 5px auto;
  border: 1px solid #ddd;
`;

export default Input;

import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder, type, onChange, name }) => {
  return (
    <InputBox
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      name={name}
    />
  );
};

const InputBox = styled.input`
  display: block;
  width: 270px;
  padding: 15px 10px;
  margin: 5px auto;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
  }
`;

export default Input;

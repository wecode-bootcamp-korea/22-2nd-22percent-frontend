import React from 'react';
import styled from 'styled-components';

function StyledCheckBox({
  isChecked,
  handleChecked,
  handleAllChecked,
  setIsPurposeChecked,
}) {
  return (
    <Label
      onChange={() => {
        (handleChecked && handleChecked()) ||
          (handleAllChecked && handleAllChecked()) ||
          (setIsPurposeChecked && setIsPurposeChecked(prev => !prev));
      }}
    >
      {isChecked ? (
        <i className="fas fa-check-square" />
      ) : (
        <i className="far fa-square" />
      )}
      <InputCheckBox></InputCheckBox>
    </Label>
  );
}

export default StyledCheckBox;

const Label = styled.label`
  color: ${({ theme }) => theme.colorMain};
  cursor: pointer;
`;

const InputCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`;

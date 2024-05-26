import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const WeightInput: React.FC<{
  label: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}> = ({ label, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue === "" ? undefined : parseFloat(inputValue));
  };

  return (
    <InputWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type="number"
        name={label}
        value={value === undefined ? "" : value}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default WeightInput;

import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
`;

export const Label = styled.label`
  text-transform: capitalize;
`;

export const Input = styled.input`
  border-radius: ${(p) => p.theme.borderRadius};
  border: 1px solid ${(p) => p.theme.colors.gray};
  background-color: #f0f4f8;
  display: block;
  height: 35px;
  padding: 0 8px;
  margin-top: 8px;
  width: 100%;

  &:focus {
    border: 1px solid black;
  }
`;

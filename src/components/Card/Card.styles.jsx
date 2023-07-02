import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: ${(p) => p.theme.borderRadius};
  max-width: 400px;
  width: 90vw;
`;

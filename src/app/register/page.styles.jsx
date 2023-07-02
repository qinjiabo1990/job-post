import styled from 'styled-components';
import Button from '../../components/Button/Button';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  margin-top: 16px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;

export const MemberSwitchContainer = styled.span`
  display: flex;
`;

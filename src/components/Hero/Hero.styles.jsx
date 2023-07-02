import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 575px;

  @media (min-width: 768px) {
    margin-top: 64px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;

  span {
    color: ${(prop) => prop.theme.colors.primary};
  }
`;

export const Description = styled.p`
  color: ${(prop) => prop.theme.colors.gray};
  margin: 24px 0;
`;

export const HeroImageContainer = styled.div`
  width: 49%;
  height: 470px;
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

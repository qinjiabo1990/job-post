'use client';

import { Container } from './page.styles';
import { Navigation } from '../../components/Navigation/Navigation.styles';
import Hero from '../../components/Hero/Hero';
import Logo from '../../components/Logo/Logo';
import { useAppContext } from '../../context/appContext';

function LandingPage() {
  // const { state } = useAppContext();
  // console.log(state);
  return (
    <Container>
      <Navigation>
        <Logo />
      </Navigation>
      <Hero />
    </Container>
  );
}

export default LandingPage;

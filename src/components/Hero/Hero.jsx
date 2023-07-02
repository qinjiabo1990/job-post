import Image from 'next/image';
import {
  HeroContainer, InfoContainer, Title, Description, HeroImageContainer,
} from './Hero.styles';
import Button from '../Button/Button';

function Hero() {
  return (
    <HeroContainer>
      <InfoContainer>
        <Title>Job <span>Tracking</span> App</Title>
        <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae laboriosam rerum eligendi nihil a ex illo amet iusto ullam et sed nam enim distinctio, quibusdam, quidem rem itaque aliquid?</Description>
        <Button href="/register">Login/Register</Button>
      </InfoContainer>

      <HeroImageContainer className="hero-image">
        <Image
          src="./hero.svg"
          alt="hero"
          fill
        />
      </HeroImageContainer>
    </HeroContainer>
  );
}

export default Hero;

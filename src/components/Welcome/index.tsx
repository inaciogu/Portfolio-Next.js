import Lottie from 'react-lottie';
import animationData from './animation.json';
import ArrowDown from './Arrow';
import { Container, WelcomeContainer } from './styles';

function Welcome() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Container data-aos="zoom-in">
      <WelcomeContainer>
        <div className="animation">
          <h1>Boas vindas ao meu portfólio!</h1>
          <Lottie
            options={defaultOptions}
            height={400}
            width={480}
            isStopped={false}
            isPaused={false}
          />
        </div>
        <ArrowDown />
      </WelcomeContainer>
    </Container>
  );
}

export default Welcome;

import Lottie from 'react-lottie';
import { Container, TextContainer, InfoItem, InfosContainer } from './styles';
import animationData from './animation.json';

interface HomeHeroProps {
  section: {
    text: string;
  }[];
}

function HomeHero({ section }: HomeHeroProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Container data-aos="fade-right">
      <div className="animation">
        <Lottie
          options={defaultOptions}
          height={420}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
      <div>
        <TextContainer>
          <h1>Sobre mim</h1>
          <InfosContainer>
            {section.map(item => (
              <InfoItem key={item.text} data-aos="zoom-in">
                <p>{item.text}</p>
              </InfoItem>
            ))}
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;

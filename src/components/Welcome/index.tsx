import { LoadingButton } from '@mui/lab';
import Lottie from 'react-lottie';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { Box } from '@mui/material';
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
            width={450}
            isStopped={false}
            isPaused={false}
          />
        </div>
        <Box alignSelf="center">
          <LoadingButton
            color="error"
            variant="contained"
            type="download"
            href="gustavo_inacio_cv.pdf"
            startIcon={<AiOutlineFilePdf />}
            target="_blank"
          >
            Baixar curriculo
          </LoadingButton>
        </Box>
        <ArrowDown />
      </WelcomeContainer>
    </Container>
  );
}

export default Welcome;

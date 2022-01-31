import Lottie from 'react-lottie';
import { ArrowContainer } from './styles';
import animationData from './arrowAnimation.json';

function ArrowDown() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <ArrowContainer>
      <div className="arrow">
        <Lottie
          options={defaultOptions}
          height={190}
          width={200}
          isStopped={false}
          isPaused={false}
        />
      </div>
    </ArrowContainer>
  );
}

export default ArrowDown;

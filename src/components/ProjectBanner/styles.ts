import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  section {
    z-index: 0;
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }
    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
    }
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 17rem;

    section {
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;

export default Container;

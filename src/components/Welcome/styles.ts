import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

export const WelcomeContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 0.5rem;

  > div.animation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h1 {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 1000px) {
    > div.animation {
      flex: 1
      flex-direction: column;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

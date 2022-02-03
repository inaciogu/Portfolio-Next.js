import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    flex-wrap: wrap;
    gap: 8rem;

    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
  }

  svg {
    width: 6.5rem;
    height: 6.5rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
    animation: degrade 3s linear infinite;
  }

  /* &:hover {
    svg {
      transform: scale(0.95);
      color: ${({ theme }) => theme.colors.secondary};
      transition: 1s;
    }
  } */

  @keyframes degrade {
    from {
      color: ${({ theme }) => theme.colors.primary};
      transform: rotatey(-90deg);
    }
    to {
      color: ${({ theme }) => theme.colors.secondary};
      transform: rotatey(90deg);
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

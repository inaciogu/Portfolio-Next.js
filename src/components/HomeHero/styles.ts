import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  img {
    width: 30rem;
    flex: 1;
    box-shadow: 40px -50px 0px ${({ theme }) => theme.colors.primary};
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    img {
      width: 30rem;
      height: 35rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    img {
      width: 20rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }

    > img {
      width: 70%;
      box-shadow: 60px -30px 0px ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const TextContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 5rem;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 3rem;
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoItem = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono,', monospace;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1200px) {
    width: 23rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:nth-child(2) {
    align-self: center;
  }

  &:last-child {
    align-self: flex-start;
  }

  > div {
    margin: 0.2rem;
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.yellow {
    color: darkgoldenrod;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.red {
    color: #e51713;
  }

  span.texthigh {
    color: ${({ theme }) => theme.colors.textHighlight};
  }

  span.pink {
    color: #c40685;
  }

  span.primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  span.secondary {
    color: ${({ theme }) => darken(0.3, theme.colors.secondary)};
  }

  span.green {
    color: green;
  }

  span.black {
    color: black;
  }

  section.about {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.3;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

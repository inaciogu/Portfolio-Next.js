import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectProps {
  imgSrc: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  @media (max-width: 1000px) {
    gap: 2rem;
  }

  > button {
    background: ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    border: none;
    margin-bottom: 2rem;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    }

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (max-width: 500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  justify-content: center;
  align-items: center;
  position: relative;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url(${props => props.imgSrc}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.text {
      position: absolute;
      top: 3rem;
      right: -2rem;
      transition: 0.5s;
      width: fit-content;
    }

    h1 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 2.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 2rem;
      font-weight: 300;
    }

    > button {
      z-index: 5;
      padding: 0.5rem 1rem;
      position: absolute;
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 0.5rem;

      a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: 0.5s;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.primary};
        > a {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }

  &:hover {
    > section {
      > div.text {
        right: -10rem;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 3rem 5rem 0 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -6rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;
      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }
    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;
      > section {
        width: 100%;
        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;

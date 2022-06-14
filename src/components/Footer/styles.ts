import { lighten } from 'polished';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  box-shadow: 0 0 4px ${({ theme }) => lighten(0.3, theme.colors.text)};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
    }

    p {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
      justify-content: space-evenly;
      text-align: center;
      font-size: 1rem;
    }

    > section {
      display: flex;
      align-items: center;

      svg {
        width: 2.3rem;
        height: 2.3rem;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
        transition: 0.5s;
        margin: 10px;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          transform: translateY(-20%);
        }
      }
    }

    @media (max-width: 450px) {
      button {
        font-size: 0.7rem;
      }

      p {
        font-size: 0.5rem;
      }

      section {
        gap: 0.5rem;
        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

export default Container;

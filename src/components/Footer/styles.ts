import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.text};
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
      font-size: 1.2rem;
    }

    p {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.text};
      justify-content: space-evenly;
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
        font-size: 0.9rem;
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

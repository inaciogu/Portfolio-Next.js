import { darken, lighten } from 'polished';
import styled from 'styled-components';

interface ProjectButtonProps {
  github: boolean;
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
    @media (max-width: 700px) {
      padding: 0 2.5rem;
      p {
        font-size: 1rem;
      }
      button {
        padding: 0.7rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const ProjectButton = styled.button<ProjectButtonProps>`
  background: ${props => (props.github ? 'black' : props.theme.colors.primary)};
  padding: 0.8rem 0.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: 0.5s;
  margin-right: 0.1rem;
  margin-top: 2rem;

  &:hover {
    background: ${props =>
      props.github
        ? lighten(0.08, 'black')
        : darken(0.05, props.theme.colors.primary)};
  }

  a {
    color: #fff;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;
  }
`;

export default ProjectContainer;

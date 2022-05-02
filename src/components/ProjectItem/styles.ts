import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 20rem;
  margin: 0.5rem;
  > a {
    position: relative;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: 0.5rem;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    section {
      z-index: 1;
      h1 {
        color: #fff;
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1rem;
      }
    }
  }
`;

export default Container;

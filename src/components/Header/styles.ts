import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  box-shadow: 2px 2px 9px ${({ theme }) => theme.colors.border};
  ul {
    display: flex;
    gap: 2rem;
    margin: 1.5rem;
    align-items: center;
  }
  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    width: 2rem;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.text};
    transition: 0.5s;
    &:hover {
      color: ${props =>
        props.isActive
          ? props.theme.colors.secondary
          : props.theme.colors.primary};
    }
  }
`;

import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  button {
    border: none;
    padding: 1rem 2.5rem;
    color: black;
    font-weight: 500;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.primary};
    transition: 0.5s;
    width: fit-content;
    text-transform: uppercase;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.colors.primary)};
    }
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  padding: 1.7rem 1.5rem;
  margin-bottom: 0.5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.textHighlight};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.textHighlight};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  padding: 1.7rem 1.5rem;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1/3;

  &:focus {
    border-color: ${({ theme }) => theme.colors.textHighlight};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

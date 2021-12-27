import { ReactNode } from 'react';
import Container from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </Container>
  );
}

SectionTitle.defaultProps = {
  description: ''
};

export default SectionTitle;

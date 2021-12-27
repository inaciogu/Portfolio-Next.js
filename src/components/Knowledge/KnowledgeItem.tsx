import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgeItem({ title, icon }: KnowledgeProps) {
  return (
    <KnowledgeContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
}

import { ReactNode } from 'react';
import { KnowledgeContainer } from './styles';

interface KnowledgeProps {
  title: string;
  icon: ReactNode;
}

export default function KnowledgeItem({ title, icon }: KnowledgeProps) {
  return (
    <KnowledgeContainer>
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
}

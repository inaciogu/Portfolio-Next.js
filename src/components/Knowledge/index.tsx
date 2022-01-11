import { AiFillHtml5 } from 'react-icons/ai';
import { SiNextdotjs, SiRedux, SiTestinglibrary } from 'react-icons/si';
import { DiJavascript, DiGit, DiGithubBadge } from 'react-icons/di';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Toolkit" />
      <section>
        <KnowledgeItem title="HTML5" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS3" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Javascript" icon={<DiJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Redux" icon={<SiRedux />} />
        <KnowledgeItem title="RTL" icon={<SiTestinglibrary />} />
        <KnowledgeItem title="Git" icon={<DiGit />} />
        <KnowledgeItem title="Github" icon={<DiGithubBadge />} />
        <KnowledgeItem title="NextJS" icon={<SiNextdotjs />} />
      </section>
    </Container>
  );
}

export default Knowledge;

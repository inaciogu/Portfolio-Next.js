import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function Contact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Interessado nos meus serviços?
            <br />
            Vamos trabalhar juntos!
          </>
        }
        description={
          <>
            Preencha o formulário abaixo <br />e eu retornarei em breve!
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default Contact;

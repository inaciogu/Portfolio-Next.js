import { Button } from '@mui/material';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <Container id="contact">
      <SectionTitle
        title={
          <>
            Interessado nos meus serviços?
            <br />
            Vamos trabalhar juntos!
          </>
        }
        description={
          <>Você pode me enviar um e-mail clicando no botão abaixo</>
        }
      />
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Enviar E-mail
      </Button>
      <Form open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}

export default Contact;

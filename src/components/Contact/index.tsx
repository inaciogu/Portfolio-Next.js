import { Button } from '@mui/material';
import { useState, useContext } from 'react';
import { darken } from 'polished';
import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Context } from '../../context';
import { Container } from './styles';

function Contact() {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(Context);

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          background: theme.colors.primary,
          '&:hover': { background: darken(0.06, theme.colors.primary) }
        }}
      >
        Enviar E-mail
      </Button>
      <Form open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}

export default Contact;

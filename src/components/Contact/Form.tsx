import { useState } from 'react';
import { AiOutlineMail, AiOutlineBlock } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { Dialog, Stack } from '@mui/material';
import sendContactMail from '../../services/sendMail';
import theme from '../../styles/theme/dark';
import { FormContainer, Input, TextArea } from './styles';

interface FormProps {
  open: boolean;
  onClose: () => void;
}

export default function Form({ open, onClose }: FormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!name || !message || !email) {
      toast('Preencha todos os campos para enviar seu E-mail', {
        icon: <AiOutlineBlock />,
        style: {
          background: theme.colors.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      setEmail('');
      setName('');
      setMessage('');

      toast('E-mail enviado com sucesso', {
        position: 'top-right',
        icon: <AiOutlineMail />,
        style: {
          background: theme.colors.primary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao enviar o E-mail, tente novamente', {
        position: 'top-right',
        icon: <AiOutlineBlock />,
        style: {
          background: theme.colors.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <Stack
        p={4}
        sx={{ background: 'linear-gradient(45deg, #202020, #101010);' }}
      >
        <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
          <Input
            placeholder="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            placeholder="E-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <TextArea
            placeholder="Mensagem"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <button type="submit" disabled={loading}>
            Enviar
          </button>
        </FormContainer>
      </Stack>
    </Dialog>
  );
}

import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input placeholder="E-mail" required />
      <TextArea placeholder="Mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}

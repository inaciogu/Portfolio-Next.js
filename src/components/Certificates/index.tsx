import CertificateItem from '../CertificateItem';
import SectionTitle from '../SectionTitle';
import Container from './styles';

function Certificates() {
  return (
    <Container>
      <SectionTitle title="Certificados" />
      <section>
        <CertificateItem
          title="Front end"
          link="https://www.credential.net/4573e57f-b6ad-48c0-a219-41602ad9e2ac#gs.knqvyc"
          institution="TRYBE"
          imgUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/42886926"
        />
        <CertificateItem
          title="Fundamentos do Desenvolvimento Web"
          link="https://www.credential.net/81c58d02-081f-4316-9260-9d1580af6977#gs.knws1g"
          institution="TRYBE"
          imgUrl="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38013710"
        />
      </section>
    </Container>
  );
}

export default Certificates;

import { Container, TextContainer, InfoItem, InfosContainer } from './styles';

import picture from '../../assets/foto.jpeg';

function HomeHero() {
  return (
    <Container data-aos="fade-right">
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <TextContainer>
          <h1>Quem sou?!</h1>
          <InfosContainer>
            <InfoItem data-aos="zoom-in">
              <section className="about">Sobre mim</section>
              <p>
                Desenvolvedor <strong>Front End jr.</strong> altamente
                comunicativo, dedicado e cheio de vontade de aprender cada vez
                mais. Comecei minha jornada no{' '}
                <strong>desenvolvimento web</strong> em junho de 2021 e desde
                então, venho me esforçado todos os dias para evoluir minhas
                habilidades tecnicas e sociocomportamentais a fim de poder
                ingressar no mercado de trabalho e agregar valor.
              </p>
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <span className="secondary">Infos:</span> {'\u007B'}
              <div>
                Nome: <span className="textLight">Gustavo,</span>
              </div>
              <div>
                Sobrenome: <span>Inacio,</span>
              </div>
              <div>
                Idade: <span>20 anos,</span>
              </div>
              <div>
                Cidade: <span>Imbituba,</span>
              </div>
              <div>
                Estado: <span>Santa Catarina,</span>
              </div>
              {'\u007D'}
            </InfoItem>
            <InfoItem data-aos="zoom-in">
              <span className="secondary">Soft Skills:</span> {'\u007B'}
              <div>
                <span>Autodidatismo,</span>
              </div>
              <div>
                <span>Comunicação,</span>
              </div>
              <div>
                <span>Pensamento Crítico,</span>
              </div>
              <div>
                <span>Trabalho em Equipe,</span>
              </div>
              {'\u007D'}
            </InfoItem>
          </InfosContainer>
        </TextContainer>
      </div>
    </Container>
  );
}

export default HomeHero;

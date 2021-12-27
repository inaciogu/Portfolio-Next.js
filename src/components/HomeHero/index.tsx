import { Container, TextContainer, InfoItem, InfosContainer } from './styles';

import picture from '../../assets/foto.jpeg';

function HomeHero() {
  return (
    <Container>
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Gustavo</h2>
          <InfosContainer>
            <InfoItem>
              <section className="about">Sobre mim</section>
              <p>
                Desenvolvedor Front End jr. altamente comunicativo, dedicado e
                cheio de vontade de aprender cada vez mais. Comecei minha
                jornada no desenvolvimento web em junho de 2021 e desde então,
                venho me esforçado todos os dias para evoluir minhas habilidades
                tecnicas e sociocomportamentais a fim de poder ingressar no
                mercado de trabalho e agregar valor.
              </p>
            </InfoItem>
            <InfoItem>
              <span className="purple">Infos:</span> {'\u007B'}
              <div>
                Nome: <span className="primary">Gustavo,</span>
              </div>
              <div>
                Sobrenome: <span className="secondary">Inacio,</span>
              </div>
              <div>
                Idade: <span className="purple">20 anos,</span>
              </div>
              <div>
                Cidade: <span className="blue">Imbituba,</span>
              </div>
              <div>
                Estado: <span className="yellow">Santa Catarina,</span>
              </div>
              {'\u007D'}
            </InfoItem>
            <InfoItem>
              <span className="purple">Soft Skills:</span> {'\u007B'}
              <div>
                <span className="blue">Autodidatismo,</span>
              </div>
              <div>
                <span className="green">Comunicação,</span>
              </div>
              <div>
                <span className="yellow">Pensamento Crítico,</span>
              </div>
              <div>
                <span className="primary">Trabalho em Equipe,</span>
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

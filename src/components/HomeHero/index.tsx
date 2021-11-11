import { Container, TextContainer, InfoItem, InfosContainer } from './styles';

import picture from '../../assets/Image.png';

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
              <span className="purple">Infos:</span> {'\u007B'}
              <div>
                Nome: <span className="blue">Gustavo,</span>
              </div>
              <div>
                Sobrenome: <span className="blue">Inacio,</span>
              </div>
              <div>
                Idade: <span className="primary">20 anos,</span>
              </div>
              <div>
                Cidade: <span className="secondary">Imbituba,</span>
              </div>
              <div>
                Estado: <span className="secondary">Santa Catarina,</span>
              </div>
              {'\u007D'}
            </InfoItem>
            <InfoItem>
              <span className="purple">Hard-skills:</span> {'\u007B'}
              <div>
                <span className="blue">HTML5,</span>
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

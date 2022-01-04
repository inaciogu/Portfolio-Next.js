import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Overlay from '../Overlay';
import CertificateContainer from './styles';

interface CertificateProps {
  title: string;
  institution: string;
  imgUrl: string;
  link: string;
}

function CertificateItem({
  title,
  institution,
  imgUrl,
  link
}: CertificateProps) {
  return (
    <CertificateContainer imgUrl={imgUrl}>
      <section>
        <Overlay />
        <div className="text">
          <h1>{title}</h1>
          <h2>{institution}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={link}>
          <a target="_blank">
            Visualizar Credencial <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </CertificateContainer>
  );
}

export default CertificateItem;

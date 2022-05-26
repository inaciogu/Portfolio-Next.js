import { Box, IconButton } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Context } from '../../context';
import Overlay from '../Overlay';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  slug: string;
  img: string;
  increment: () => void;
  decrement: () => void;
}

export default function ProjectItem({
  title,
  slug,
  img,
  increment,
  decrement
}: ProjectProps) {
  const { theme } = useContext(Context);

  return (
    <ProjectContainer imgSrc={img}>
      <section data-aos="fade-up">
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          position="absolute"
          zIndex={5}
          alignSelf={{ xs: 'flex-end', md: 'center' }}
        >
          <IconButton sx={{ color: theme.colors.text }} onClick={decrement}>
            <FaArrowLeft size={50} />
          </IconButton>
          <IconButton sx={{ color: theme.colors.text }} onClick={increment}>
            <FaArrowRight size={50} />
          </IconButton>
        </Box>
        <Overlay />
        <div className="text">
          <h1># {title}</h1>
        </div>
        <button type="button">
          <Link href={`/projects/${slug}`}>
            <a>
              Ver mais <AiOutlineRightCircle />
            </a>
          </Link>
        </button>
      </section>
    </ProjectContainer>
  );
}

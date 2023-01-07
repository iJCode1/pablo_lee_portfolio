import styled from 'styled-components'
import ExperienceProject from './ExperienceProject'
import { motion } from 'framer-motion'

const ExperienceStyled = styled.div`
  background-color: var(--blue);
  inline-size: 100%;
  padding-inline: 1.375rem;
  box-sizing: border-box;
  padding-block: 5rem;
  overflow-x: hidden;

  .experience{
    max-inline-size: 42rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .concept{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .concept::after{
    content: '';
    inline-size: 100%;
    block-size: 1px;
    background-color: var(--background-1);
  }

  .title{
    font: var(--headline3);
    margin: 0;
  }

  .paragraph{
    margin: 0;
  }

  @media screen and (min-width: 768px){
    .title{
      font: var(--headline1);
    }

    .paragraph{
      font: var(--headline5);
    }
  }
`

function Experience(){
  return(
    <ExperienceStyled id='experience'>
      <motion.div 
        className="experience"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="concept">
          <h2 className='title'>Experiencia</h2>
          <p className="paragraph">Tengo más de 3 años de experiencia en Frontend.</p>
        </div>
        <ExperienceProject 
        title="Marvol"
        charge="Frontend - 2020"
        description="¡Marvol.com es el sitio oficial de Marvol Entertainment! Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvel."/>
        <ExperienceProject 
        title="Niko"
        charge="Frontend - 2021"
        description="Encuentra lo mejor de Niko, con productos nuevos cada semana y disfruta del envío gratis. ¡Únete a nosotros! y accede como miembro a productos y beneficios exclusivos. "/>
        <ExperienceProject 
        title="Netnet"
        charge="Frontend - 2022"
        description="Netnet es una de las plataformas de entretenimiento con más ranking a nivel mundial y detrás de las películas y series que nos ofrece, hay un diseño con el que está estructurada y organizada cada sección de la plataforma."/>
      </motion.div>
    </ExperienceStyled>
  )
}

export default Experience
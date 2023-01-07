import styled from 'styled-components'
import Button, { ButtonTransparent } from './Button'
import b_netnet from '../assets/images/img-1.png'
import { motion } from 'framer-motion'

const ProjectStyled = styled.div`
  margin: 0;
  color: var(--grey);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  inline-size: 100%;
  max-inline-size: 70rem;
  box-sizing: border-box;
  margin: 0 auto;
  padding-inline: 1.375rem;
  align-items: center;

  .content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title{
    font: var(--headline3);
    color: var(--blue);
    margin: 0;
  }

  .description{
    margin: 0;
  }

  .image-container{
    background-image: url(${props => props.background ? props.background : ""});
    background-size: cover;
    background-position: center;
    max-inline-size: 22rem;
    position: relative;
    block-size: 21.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: 100%;
    margin: 0 auto;
    border-radius: .75rem;
    margin-block: 3rem;
    img{
      vertical-align: middle;
      position: absolute;
      inline-size: 13.75rem;
    }
  }

  .buttons{
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  @media screen and (min-width: 768px){
    flex-direction: row;
    gap: 4rem;

    .content{
      max-inline-size: 26rem;
    }

    .image-container{
      block-size: 30rem;
      margin-block: 5rem;
      min-inline-size: 22rem;
      max-inline-size: 100%;
      img{
        max-inline-size: 18rem;
        inline-size: 100%;
      }
    }

    .buttons{
      flex-direction: row;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 1024px){
    gap: 7rem;
  }
`

function Project({background, image, title, description, code, project}){
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, ease: 'easeInOut' }}
    >
      <ProjectStyled background={background}>
        <div className="image-container">
          <img src={image} alt={`${title} image`} width="220"/>
        </div>
        <div className="content">
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
          <div className="buttons">
            <Button text="Ver proyecto" link={project} large="large"/>
            <ButtonTransparent text="Ver código" link={code} large="large"/>
          </div>
        </div>
      </ProjectStyled>
    </motion.div>
  )
}

export default Project
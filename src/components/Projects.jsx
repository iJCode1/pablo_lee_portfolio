import styled from 'styled-components'
import Project from './Project'
import i_netnet from '../assets/images/iphone-2.png'
import b_netnet from '../assets/images/img-2.png'
import i_insta from '../assets/images/iphone-1.png'
import b_insta from '../assets/images/img-1.png'
import i_fotos from '../assets/images/iphone-3.png'
import b_fotos from '../assets/images/img-3.png'

const ProjectsStyled = styled.section`
  background-color: var(--background-1);
  padding-block: 6rem;
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media screen and (min-width: 768px){
    gap: 8rem;
    &> div:nth-child(odd){
      .image-container{
        order: 1;
      }
    }
  }
`

function Projects(){
  return(
    <ProjectsStyled id='projects'>
      <Project 
        background={b_netnet}
        image={i_netnet}
        title="Netnet" 
        description="Netnet es una de las plataformas de entretenimiento con más ranking a nivel mundial y detrás de las películas y series que nos ofrece, hay un diseño con el que está estructurada..."
        code="https://github.com/iJCode1"
        project="https://github.com/iJCode1"/>

      <Project 
        background={b_insta}
        image={i_insta}
        title="Instantánea" 
        description="Aplicación y red social propiedad de Facebook, cuya función principal es poder compartir fotografías y vídeos con otros usuarios."
        code="https://github.com/iJCode1/grid-gallery"
        project="https://ijcode1.github.io/grid-gallery/"/>
      
      <Project 
        background={b_fotos}
        image={i_fotos}
        title="Fotos" 
        description="Encuentra tus fotos más rápido.
        Tus fotos se organizan y permiten búsquedas en función de los lugares y las cosas que muestran, sin necesidad de etiquetarlas."
        code="https://github.com/iJCode1"
        project="https://github.com/iJCode1"/>
    </ProjectsStyled>
  )
}

export default Projects
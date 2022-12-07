import styled from 'styled-components'

const ExperienceProjectStyled = styled.div`
  padding-block-start: 1.625rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .project-title,
  .project-charge,
  .project-description{
    margin: 0;
  }

  .project-title{
    font: var(--headline3);
  }

  .project-charge{
    font: var(--body1-bold);
    color: var(--background-1);
  }

  .project-description{
    font: var(--body2-regular);
  }

  @media screen and (min-width: 768px){
    .project-description{
      font: var(--body1-regular);
    }
  }

`

function ExperienceProject({ title, charge, description }){
  return(
    <ExperienceProjectStyled>
      <h2 className='project-title'>{title}</h2>
      <h3 className='project-charge'>{charge}</h3>
      <p className="project-description">{description}</p>
    </ExperienceProjectStyled>  
  )
}

export default ExperienceProject
import styled from 'styled-components'

const ContactStyled = styled.div`
  background-color: var(--blue);
  padding-block: 4rem;
  padding-inline: 1.375rem;

  .content{
    max-inline-size: 42rem;
    margin: 0 auto;
  }

  p{
    margin: 0;
  }

  .title{
    font: var(--headline3);
  }

  .mail{
    font: var(--headline4);
    color: var(--tertiary);
    margin-block-start: 2rem;
    display: inline-block;
  }

  @media screen and (min-width: 768px){
    padding-block: 5rem;

    .title{
      font: var(--headline2);
    }

    .mail{
      font: var(--headline3);
    }
  }
`

function Contact(){
  return(
    <ContactStyled id='contact'>
      <div className="content">
        <p className='title'>¿Quieres trabajar conmigo?</p>
        <p className='title'>¡Hazme ping!</p>
        <a className='mail' href="mailto: pablolee@example.com">pablolee@gmail.com</a>
      </div>
    </ContactStyled>  
  )
}

export default Contact
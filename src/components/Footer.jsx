import styled from 'styled-components'
import SocialLink from './SocialLink'

const FooterStyled = styled.footer`
  background-color: var(--blue);
  color: var(--secondary);
  padding-inline: 1.375rem;
  padding-block: 3rem;
  inline-size: 100%;
  box-sizing: border-box;
  
  .content{
    display: flex;
    gap: 2.5rem;
    flex-direction: column;
    max-inline-size: 70rem;
    margin: 0 auto;
  }

  .title{
    margin: 0;
  }

  .social{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (min-width: 768px){
    /* padding-inline: 5.625rem; */

    .content{
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .social{
      gap: 2.5rem;
      flex-direction: row;
    }
  }
`

function Footer(){
  return(
    <FooterStyled>
      <div className="content">
        <h2 className='title'>Pablo Lee</h2>
        <div className="social">
          <SocialLink 
          text="Instagram"
          link="https://github.com/iJCode1"/>

          <SocialLink 
          text="Facebook"
          link="https://github.com/iJCode1"/>

          <SocialLink 
          text="Twitter"
          link="https://twitter.com/iJCode1"/>
        </div>
      </div>
    </FooterStyled>  
  )
}

export default Footer
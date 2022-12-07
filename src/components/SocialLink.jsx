import styled from 'styled-components'

const SocialLinkStyled = styled.a`
  color: var(--secondary);
  font: var(--body2-bold);
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .2s;

  :hover{
    color: var(--button-background);
  }

  :active{
    transform: scale(.9);
  }
`

function SocialLink({ text, link }){
  return(
    <SocialLinkStyled href={link} target="_blank" rel="noreferrer">
      {text}
    </SocialLinkStyled>  
  )
}

export default SocialLink
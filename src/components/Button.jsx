import styled from 'styled-components'

const ButtonStyled = styled.button`
  background-color: var(--button-background);
  color: var(--white);
  padding-block: .75rem;
  padding-inline: 1.5rem;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  font: var(--button);
  inline-size: 100%;
  text-decoration: none;
  transition: transform .2s;
  box-sizing: border-box;
  text-align: center;
  inline-size: ${props => props.large ? "100%" : "100%"};

  :active{
    transform: scale(.9);
  }

  :hover{
    text-decoration: none;
  }

  @media screen and (min-width: 425px){
    inline-size: max-content;
    inline-size: ${props => props.large ? "100%" : "max-content"};

  }

  @media screen and (min-width: 768px){
    inline-size: max-content;
  }
`

function Button({text, className, link, download, large}){
  const component = link ? 'a' : 'button' 
  return(
    <ButtonStyled className={className} as={component} href={link} link={link} download={download} target="_blank" rel="noreferrer" large={large}>
      {text}
    </ButtonStyled>
  )
}

export const ButtonTransparent = styled(Button)`
  background: transparent;
  border: 2px solid var(--blue);
  color: var(--blue);
`

export default Button
import styled from "styled-components"
import avatar from "../assets/images/lee.webp"
import Button, { ButtonTransparent } from "./Button"
import CV from '../assets/documents/pabloLeeCV.pdf'
import { motion } from 'framer-motion'

const HeaderStyled = styled.main`
  color: var(--grey);
  inline-size: 100%;
  max-inline-size: 42rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
  padding-inline: 1.375rem;
  box-sizing: border-box;
  font: var(--body2-regular);

  .title,
  .area,
  .message {
    margin: 0;
  }

  .title {
    font: var(--headline3);
    color: var(--blue);
  }

  .area {
    font: var(--headline4);
  }

  @media screen and (min-width: 768px){
    min-height: calc(100vh - 6rem);
    justify-content: center;

    .title {
      font: var(--headline1);
    }

    .area {
      font: var(--headline5);
    }
  }
`;

function Header() {
  return (
    <motion.div
      initial={{ x: "-100%"}}
      animate={{ x:0 }}
      transition={{ duration: 1, ease:'easeInOut' }}
    >
      <HeaderStyled id="hello">
        <img src={avatar} alt="Pablo lee's avatar" width="60" />
        <h1 className="title">Pablo Lee</h1>
        <p className="area">
          Soy un Frontend, centrado en la creación de productos digitales durante
          los últimos 4 años.
        </p>
        <p className="message">
          Me encanta centrarme en los detalles de las experiencias de nuevos
          productos con una implementación en código perfecta. Pero los grandes
          productos no comienzan ahí, comienzan con una sólida colaboración con
          los compañeros de equipo de investigación, ingeniería y productos para
          comprender los problemas y las circunstancias de los clientes.
        </p>
        <Button text="Descargar curriculum" download link={CV}/>
      </HeaderStyled>
    </motion.div>
  );
}

export default Header;

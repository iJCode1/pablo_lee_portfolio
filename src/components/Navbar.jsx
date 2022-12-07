import styled from "styled-components";
import menu from "../assets/icons/icon-menu.svg";
import cancel from "../assets/icons/icon-cancel.svg";

const NavbarStyled = styled.nav`
  block-size: 6rem;
  box-sizing: border-box;
  inline-size: 100%;
  color: var(--secondary);
  padding-inline: 1.375rem;
  position: sticky;
  inset-block-start: 0;
  inset-inline: 0;
  background-color: var(--white);
  z-index: 5;

  .content {
    max-inline-size: 70rem;
    margin: 0 auto;
    block-size: 100%;
  }

  .list {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    block-size: 100%;
    align-items: center;
    list-style: none;

    .link {
      text-decoration: none;
      transition: transform 0.2s;
    }

    .link:active {
      transform: scale(0.9);
    }
  }

  .title {
    font: var(--headline4);
    color: var(--secondary);
    text-decoration: none;
  }

  .list2 {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: var(--white);
    position: absolute;
    inset-inline: 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    padding-block: 2rem;
    display: ${props => props.navState ? "none" : "flex"};

    .item{
      transition: transform .2s;

      :active{
        transform: scale(.9);
      }
    }

    .link {
      color: var(--secondary);
      text-decoration: none;
      text-transform: uppercase;
      font: var(--body1-bold);

      :hover{
        color: var(--primary);
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      display: flex;
      justify-content: space-between;

      .icon {
        display: none;
      }
    }

    .list2 {
      flex-direction: row;
      position: relative;
      padding: 0;
      display: flex;
      .link {
        font: var(--body2-bold);
      }
    }
  }
`;

function Navbar({ navState, setNavState }) {
  const icon = document.getElementsByClassName("icon");

  const handleClick = () => {
    setNavState(!navState);
  };

  return (
    <NavbarStyled navState={navState}>
      <div className="content">
        <ul className="list">
          <li className="item">
            <a className="link" href="#hello">
              <h2 className="title">Pablo Lee</h2>
            </a>
          </li>
          <li onClick={handleClick}>
            <img
              className="icon"
              src={navState ? menu : cancel}
              alt="Icono de Menú"
              width="24"
            />
          </li>
        </ul>

        <ul className="list2" onClick={handleClick}>
          <li className="item">
            <a className="link" href="#hello">
              Hola
            </a>
          </li>
          <li className="item">
            <a className="link" href="#projects">
              Proyectos
            </a>
          </li>
          <li className="item">
            <a className="link" href="#experience">
              Testimonios
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
}

export default Navbar;

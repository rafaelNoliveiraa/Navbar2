import { Component } from "react";
import "./NavbarStyles.css";
import logo from "./img/LogoVetorizada.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
          <img src={logo} width="100px" height="50px" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="index.html"> HOME </a>{" "}
              </li>
              <li>
                <a href="index.html"> MEUS DADOS </a>{" "}
              </li>
              <li>
                <a href="index.html"> CURSOS </a>{" "}
              </li>
              <li>
                <a href="index.html"> MEUS CURSOS </a>{" "}
              </li>
              <li>
                <a href="index.html"> FAVORITOS </a>{" "}
              </li>
              <li>
                <a href="index.html"> SOBRE NÓS </a>{" "}
              </li>
              <div className="login-button">
                <button>
                  <a href="#">Cadastre-se</a>
                </button>
              </div>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars "}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

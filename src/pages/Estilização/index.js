import React from "react";
import Numbers from "../../components/Numbers/index";
import "./styles.css";
import { Buttons, Button } from "./styles.js";

export default class Estilização extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            color: "beige",
            fontSize: "50px",
            padding: "20px",
            margin: "0",
            textAlign: "center",
            backgroundColor: "rgb(50,100,150)",
            fontFamily: "Arial",
          }}
        >
          Hello, Fluxo
        </h1>
        <div className="bloco1">
          <Numbers />
          <div className="bloco2">
            <Numbers />
          </div>
          <div className="bloco3">
            <Numbers />
          </div>
        </div>
        <Buttons>
          <Button>Press</Button>
          <button id="botao">
            Press
          </button>
        </Buttons>
      </>
    );
  }
}

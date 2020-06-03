import React from 'react';
import './styles.css';
import Numbers from '../../components/Numbers/index';
import { Buttons, Button } from './styles.js';

export default class Main extends React.Component {
  render() {
    const hello = {
      color: 'beige',
      fontSize: '50px',
      padding: '20px',
      margin: '0',
      textAlign: 'center',
      fontFamily: 'Arial',
      backgroundColor: 'rgb(50,100,150)',
    };

    return (
      <>
        <h1 style={hello}>Hello, Fluxo!</h1>
        <div
          style={{
            backgroundColor: 'burlywood',
            marginTop: '20px',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            letterSpacing: '10px',
          }}
        >
          <Numbers />
          <div
            style={{
              backgroundColor: 'lightgrey',
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              margin: '2%',
              padding: '10px',
            }}
          >
            <Numbers />
          </div>
          <div
            style={{
              backgroundColor: 'rgb(20,100,100)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column-reverse',
              width: '30%',
              margin: '2%',
              padding: '10px',
            }}
          >
           <Numbers/>
          </div>
        </div>
        <Buttons>
          <Button>Press</Button>
          <button className="botao2" id="botaozinho2">
            Press
          </button>
        </Buttons>
      </>
    );
  }
}

import React from 'react';
import './styles.css';
import Numbers from '../Other/index';

function Main() {
  return (
      <>
        <h1 style={{color:"beige", fontSize:"50px", padding:"20px", margin:"0", textAlign: "center", fontFamily: "Arial", backgroundColor: "rgb(50,100,150)"}}> 
          Hello, Fluxo!
        </h1>
    <div style={{backgroundColor: "burlywood", marginTop: "20px", color:"white", display: "flex", flexDirection: "row", padding:"10px", letterSpacing: "10px"}}>
           <Numbers />
        <div style={{backgroundColor: "lightgrey", color:"black", display: "flex", flexDirection: "column", width: "50%", margin: "2%",  padding:"10px"}} >
           <Numbers />
            </div>
            <div style={{backgroundColor: "rgb(20,100,100)", color:"white", display: "flex", flexDirection: "column-reverse", width: "30%", margin: "2%", padding:"10px"}} >
            <h3>0</h3>
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
            </div>
        </div>
        <button className="botao" id="botaozinho">
            Press
        </button>
    </>
  );
}

export default Main;
import "./styles/App.css";
import React from 'react';
import Header from "./components/Header";
import Bot from "./components/Bot";
import Main from "./components/Main";


function App() {



  return ( <div className="layout">
              <div className="wrap">
                <Header/>
                <Main/>
                <Bot/>
              </div>
            </div>
  );

}

export default App;


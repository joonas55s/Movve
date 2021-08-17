import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes/index';

function App() {
  return (
   
      <BrowserRouter>      
            <Routes/>
        <GlobalStyles/>
      </BrowserRouter>

  );
}

export default App;

import React from 'react';
import './App.scss';
import ServerStatusMap from './Components/map';
import NavBar from './Components/NavBar';
import StatusBar from './Components/StatusBar';
//TODO: language pack
function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <div className='top-bar'>Server Status Map</div>
      <NavBar />
      <ServerStatusMap />
      <StatusBar/>
    </div>
    </React.StrictMode>
  );
}

export default App;

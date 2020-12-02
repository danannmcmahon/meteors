import logo from './logo.svg';
import './App.css';
import { Dashboard } from './Components/dashboard';
import { SearchView } from './Components/search-view';
import { DetailView } from './Components/detail-view';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Media from 'react-media';



function App() {

  const[meteorJSON, setMetJSON] = useState([]);
  const[meteorID, setMetID] = useState({});
  const[searchPar, setSearchPar] = useState({year:[1900,2020],mass:[0,60000]});


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   
      </header>
     
      <Media query="(max-width: 650px)">
          {matches =>
            matches ? (
      
      <Switch>
        <Route exact path='/' render={(props) => <SearchView {...props} json={meteorJSON} clickj={setMetJSON} clicki={setMetID} setPar={setSearchPar} metID={meteorID} sp={searchPar} />} />
        <Route exact path='/detail' render={(props) => <DetailView {...props} met={meteorID} />} />
      </Switch>

            ):(
              <Dashboard setPar={setSearchPar} sp={searchPar} mj={meteorJSON} mi={meteorID} clickj={setMetJSON} clicki={setMetID}/>
            )}
        </Media>
      
      
    </div>
  );
}

export default App;
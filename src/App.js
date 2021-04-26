import './App.css';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route path='/detail/:id'>
            <ItemDetailContainer />
          </Route>

          <Route path='/'>
            <ItemListContainer />
          </Route>

        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

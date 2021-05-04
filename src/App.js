import './App.css';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          
          <Route path='/detail/:id'>
            <ItemDetailContainer />
          </Route>

          <Route path='/categories/:category'>
            <ItemListContainer />
          </Route>

          <Route path='/categories'>
            <ItemListContainer />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;

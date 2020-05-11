import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gamelist from './Routes/gamelist'
import Playerlist from './Routes/playerlist';
import Createplayer from './Routes/createplayer';
import Addgame from './Routes/addgame';
import Updateplayer from './Routes/updateplayer';
import Deleteplayer from './Routes/deleteplayer';
import MaterialTableDemo from './home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/gamelist"> <Gamelist/>  </Route>
        <Route path ='/playerlist'> <Playerlist/> </Route>
        <Route path='/createplayer'><Createplayer/></Route>  
        <Route path='/addgame'><Addgame/></Route>
        <Route path='/updateplayer'><Updateplayer/></Route>
        <Route path='/deleteplayer'><Deleteplayer/></Route>
        <Route exact path='/'><MaterialTableDemo/></Route>
      </Switch>
    </Router>
  );
}

export default App;

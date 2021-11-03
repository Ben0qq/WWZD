import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route
} from "react-router-dom";
import Wordcloud from './wordcloud/Wordcloud'
import Navigation from './components/Navigation/Navigation'
import GraphTree from './graph-tree/GraphTree'
import Forcegraph from './forcegraph/Forcegraph'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <main>
            <Switch>
              <Route path='/forcegraph' component={Forcegraph}  />
              <Route path='/wordcloud' component={Wordcloud}  />
              <Route path='/' component={GraphTree}  />
            </Switch>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

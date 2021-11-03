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
import Tree from './tree/Tree'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <main>
            <Switch>
              <Route path='/wordcloud' component={Wordcloud}  />
              <Route path='/' component={Tree}  />
            </Switch>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

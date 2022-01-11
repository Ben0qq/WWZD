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
import highcharts from './highcharts/Highcharts'
import Forcegraph from './forcegraph/Forcegraph'
import ForceGraph3D from './forcegraph/Forcegraph3d';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <main>
            <Switch>
              <Route path='/forcegraph' component={Forcegraph}  />
              <Route path='/forcegraph3d' component={ForceGraph3D}  />
              <Route path='/wordcloud' component={Wordcloud}  />
              <Route path='/' component={highcharts}  />
            </Switch>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

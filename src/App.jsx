import './App.css';
import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Highchartss from './highcharts/Highcharts'
import PcaHighchartss from './pca-highcharts/PcaHighcharts';
import TsneHighchartss from './tsne-highcharts/TsneHighcharts';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <main>
            <Switch >
              <Route exact path="/">
                    <Redirect from='/' to='/umap'/>
              </Route>
              <Route path='/umap' component={Highchartss}  />
              <Route path='/pca' component={PcaHighchartss}  />
              <Route path='/tsne' component={TsneHighchartss}  />
            </Switch>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

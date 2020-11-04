import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ResidencePage from './pages/ResidencePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ResidencePage} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ResidenceFormPage from './pages/ResidenceFormPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ResidenceFormPage} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

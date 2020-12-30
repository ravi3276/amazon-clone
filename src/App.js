import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import CheckoutPage from './CheckoutPage';
import Login from './Login';
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Header />
   <Home />

    </Route>
    
    <Route  path="/login">
    <Login />
    </Route>

    <Route path="/checkout">
    <Header />
    <CheckoutPage />
    </Route>

    <Route path="/prime">
    <h1>try prime</h1>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

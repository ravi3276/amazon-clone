import './App.css';
import React,{useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import CheckoutPage from './CheckoutPage';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

import Login from './Login';
function App() {
  const [{basket},dispatch]=useStateValue();
  //event listner useEffect is a hook used to Data fetching, setting up a subscription,
  //  and manually changing the DOM in React components are all examples of side effects.
  useEffect(() => {

    const unsubscribe =auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user is login
        console.log('user is',authUser.user);

        dispatch({
          type:"SET_USER",
          user:authUser
          
        })
      }else{
        //user logout
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return ()=>{
      //any cleanup operaitons go in here
      unsubscribe();
    }
  }, [])
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

import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Currency from './components/Currency';
import Home from './components/Home';
import Market from './components/Market';
import Volume from './components/Volume';

function App() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        if(res.status === 200)
        {
          setRepo(res.data);
          console.log(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      })


  },[])




  return (
    <Router>
    <div className="App">
      <Link to ="/">Home</Link>
        <Switch>
          <Route exact path = "/">
            <Home 
            link = {repo}
            />
          </Route>
          <Route path = "/currency/:id">
            <Currency />
          </Route>
          <Route path = "/market/:id">
            <Market />
          </Route>
          <Route path = "/volume/:id">
            <Volume />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

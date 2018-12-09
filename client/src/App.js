import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

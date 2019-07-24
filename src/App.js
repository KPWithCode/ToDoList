import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './component/Form'
import './App.css';

function App() {

    return (
      <Router>
        <> 
          <div>
            <Route exact path="/" component={Form} />
          </div>
        </>
      </Router>
    );

}

export default App;

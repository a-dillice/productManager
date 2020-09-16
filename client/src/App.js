import React from 'react';
import {Router} from '@reach/router';
import Create from './views/Create';
import Show from './views/Show'

// App 
function App() {
  return (
    <div className="App">
      
      <Router>
        <Create path="/"/>
        <Show path="/:id"/>
      </Router>

    </div>
  );
}

export default App;

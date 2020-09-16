import React from 'react';
import {Router} from '@reach/router';
import Create from './views/Create'

// App 
function App() {
  return (
    <div className="App">
      
      <Router>
        <Create path="/" />
      </Router>

    </div>
  );
}

export default App;

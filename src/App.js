import React from 'react';
import Parent from './ParentComponent';
const App = () =>{
  return (
    <React.StrictMode>
    <div>
        <p>
          Example of Functional Component.
        </p>
        <Parent/>
    </div>
    </React.StrictMode>
  );
}

export default App;

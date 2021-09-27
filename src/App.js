import {StrictMode} from 'react';
import Parent from './ParentComponent';
const App = () =>{
  return (
    <StrictMode>
    <div>
        <p>
          Example of Functional Component.
        </p>
        <Parent/>
    </div>
    </StrictMode>
  );
}

export default App;

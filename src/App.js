import logo from './logo.svg';
import './App.scss';
import LoadingZoom from './LoadingZoom'
import LoadingSheets from './LoadingSheets'
import SignIn from './SignIn'
import SignUp from './signup'
import { HashRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route 
          exact path='/'
          render={(props) => (
            <SignIn {...props}/>
          )}
        />
        <Route 
          path='/sign_in'
          render={(props) => (
            <SignIn {...props}/>
          )}
        />
        <Route 
          path='/sign_up'
          render={(props) => (
            <SignUp {...props}/>
          )}
        />
        <Route 
          path='/loading_zoom'
          render={(props) => (
            <LoadingZoom {...props}/>
          )}
        />
        <Route 
          path='/loading_sheets'
          render={(props) => (
            <LoadingSheets {...props}/>
          )}
        />
      </HashRouter>
    </div>
  );
}

export default App;

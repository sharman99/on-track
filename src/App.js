import { HashRouter, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar';
import LoadingZoom from './pages/LoadingZoom';
import LoadingSheets from './pages/LoadingSheets';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Report from './pages/Report';
import Profile from './pages/Profile';
import Pod from './pages/Pod';
import WaitingPeriod from './pages/WaitingPeriod'
import ReportRecorded from './pages/ReportRecorded'
import YourProfile from './pages/YourProfile'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
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
        <Route
          path='/report'
          render={(props) => (
            <Report {...props}/>
          )}
        />
        <Route
          path='/profile'
          render={(props) => (
            <Profile {...props}/>
          )}
        />
        <Route
          path='/waiting_period'
          render={(props) => (
            <WaitingPeriod {...props}/>
          )}
        />
        <Route
          path='/report_recorded'
          render={(props) => (
            <ReportRecorded {...props}/>
          )}
        />
        <Route
          path='/your_profile'
          render={(props) => (
            <YourProfile {...props}/>
          )}
        />
        <Route
          path='/pod'
          render={(props) => (
            <Pod {...props}/>
          )}
        />
      </HashRouter>
    </div>
  );
}

export default App;

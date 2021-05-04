import logo from './logo.svg';
import './App.scss';

function LoadingZoom() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CLICK ON THE FOLLOWING ZOOM LINK INTO YOUR BROWSER TO START A POD MEETING
        </p>
        <a>LINK TO ZOOM</a>
      </header>
    </div>
  );
}

export default LoadingZoom;

import logo from './logo.svg';
import './App.scss';

function LoadingZoom() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          REDIRECTING YOU TO YOUR POD'S GOOGLE SHEET...
        </p>
      </header>
    </div>
  );
}

export default LoadingZoom;

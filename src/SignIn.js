import logo from './logo.svg';
import './App.scss';
import TextField from '@material-ui/core/TextField';
import background from "./green_background.jpg"

function LoadingZoom() {
  return (
    <div className="App"
        style={{ backgroundImage: `url(${background})`, width:'100%', opacity:'50%', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      <div id="center_square"
          style={{ backgroundColor: 'white', position:'absolute', top:'30%', left:'30%', padding: '10%'}}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <p>EMAIL</p>
          <TextField id="standard-basic" label="" />
        </div>
        <div>
          <p>PASSWORD</p>
          <TextField id="standard-basic" label="" />
        </div>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}

export default LoadingZoom;

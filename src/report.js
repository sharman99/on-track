  
import logo from './logo.svg';
import './App.scss';
import LoadingZoom from './LoadingZoom'
import LoadingSheets from './LoadingSheets'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Why are you reporting this profile?</h1>
      <form>
    

          <input type="radio" id="underage" name="neg_behavior" value="underage" />
          <label for="underage">Underage user</label><br />
          <input type="radio" id="pretending" name="neg_behavior" value="pretending"  />
          <label for="pretending">Pretending to be someone else</label><br />
          <input type="radio" id="bullying" name="neg_behavior" value="bullying" />
          <label for="bullying">Bullying or harrassment</label><br />
          <input type="radio" id="scam" name="neg_behavior" value="scam" />
          <label for="scam">Scam or fraud</label><br />
          <input type="radio" id="hurting" name="neg_behavior" value="hurting" />
          <label for="hurting">At risk of hurting themselves or others</label><br />
          <input type="radio" id="not_participating" name="neg_behavior" value="not_participating" />
          <label for="not_participating">Not participating in accountability mechanisms</label><br />
          <input type="radio" id="other" name="neg_behavior" value="other" />
          <label for="other">Other</label>
          <input type="text" id="other_text" name="neg_behavior" /><br />
          <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
  );
}

export default App;
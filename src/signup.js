  
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
        <h1>Create an account</h1>
    <form>
        <h2>Basic Info</h2>

        <div class="row">
            <div class="column">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" /><br /> <br /> 
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" /><br /><br /> 
                <label for="pronouns">Pronouns (optional):</label>
                <input type="text" id="pronouns" name="pronouns" /><br /><br /> 
                <label for="major">Major:</label>
                <input type="text" id="major" name="major" /><br /><br /> 
                
            </div> 
            <div class="column">
                <label for="year">Year:</label>
                <input type="text" id="year" name="year" /><br /><br /> 
                <label for="number">Phone number:</label>
                <input type="text" id="number" name="number" /><br /><br /> 
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" /><br /><br /> <br />
            </div>
            <p>Check the fields you would like to remain private:</p>
            <input type="checkbox" id="fname" name="fname" />
            <label for="fname">First Name</label>  
            <input type="checkbox" id="lname" name="lname" />
            <label for="lname">Last Name</label>   
            <input type="checkbox" id="pronouns" name="pronouns" />
            <label for="pronouns">Pronouns</label>    
            <input type="checkbox" id="major" name="major" />
            <label for="major">Major</label>    
            <input type="checkbox" id="year" name="year" />
            <label for="year">Year</label> 
            <input type="checkbox" id="number" name="number" />
            <label for="number">Phone Number</label> 
            <input type="checkbox" id="email" name="email" />     
            <label for="email">Email</label> 
          </div>


        <h2>Accountability Preferences</h2>
        <div class="row">
            <div class="column">
            </div>
        </div>
    
        <p>What would you like to be held accountable for?</p>
        <input type="checkbox" id="technical" name="work_type" value="technical" />
        <label for=" technical">Technical work (eg. coding)</label><br /> 
        <input type="checkbox" id="psets" name="work_type" value="daily" />
        <label for="sheet">Problem sets</label><br />
        <input type="checkbox" id="text" name="work_type" value="daily" />
        <label for="text">Readings</label><br />
        <input type="checkbox" id="text" name="work_type" value="daily"/>
        <label for="text">Essays</label><br />
        <input type="checkbox" id="text" name="work_type" value="daily" />
        <label for="text">Projects</label><br />
        <input type="checkbox" id="text" name="work_type" value="daily" />
        <label for="text">Personal goals</label><br />
        <input type="checkbox" id="text" name="work_type" value="daily" />
        <label for="text">Other</label>
        <input type="text" id="partner_name" name="partner_name" /><br /><br />
     
        <label for="work_hours">Weekly estimated hours of work</label>
        <select name="work_hours" id="work_hours">
            <option value="work_hours5">5</option>
            <option value="work_hours5">10</option>
            <option value="work_hours5">15</option>
            <option value="work_hours5">20</option>
            <option value="work_hours5">25</option>
            <option value="work_hours5">30</option>

        </select>

        <p>Matching preference</p>
        <input type="radio" id="random" name="matching_preference" value="random" />
        <label for="quarter">A random person</label><br />
        <input type="radio" id="known" name="matching_preference" value="known" />
        <label for="known">Someone I know</label>
        <input type="text" id="partner_name" name="partner_name" /><br />

        <p>Desired Frequency of check-ins</p>
        <input type="radio" id="daily" name="check_frequency" value="daily" />
        <label for="daily">Daily</label>
        <input type="radio" id="weekly" name="check_frequency" value="weekly" />
        <label for="weekly">Weekly</label>
        <input type="radio" id="quarterly" name="check_frequency" value="quarterly" />
        <label for="quarterly">Quarterly</label>

        <p>Length of partnership</p>
        <input type="radio" id="quarter" name="partnership_length" value="quarter" />
        <label for="quarter">Quarter</label>
        <input type="radio" id="year" name="partnership_length" value="year" />
        <label for="year">Year</label>


        <p>Accountability pod size</p>
        <input type="checkbox" id="pod1" name="pod1" />
        <label for="pod1">1</label>  
        <input type="checkbox" id="pod2" name="pod2" />
        <label for="pod2">2</label>  
        <input type="checkbox" id="pod3" name="pod3" />
        <label for="pod3">3</label>  
        <input type="checkbox" id="pod4" name="pod4" />
        <label for="pod4">4</label>   
        
        <p>Style of accountability</p>
        <input type="checkbox" id="zoom" name="zoom" />
        <label for="zoom">Zoom meetings working together</label><br /> 
        <input type="checkbox" id="sheet" name="sheet" />
        <label for="sheet">Tracking hours of work on a Google Sheet</label><br />
        <input type="checkbox" id="text" name="text" />
        <label for="text">Text check-ins</label><br /><br />

        <label for="accountability_strategy">How might you and your partner(s) make sure that you're keeping up with work?</label><br />
        <input type="text" id="accountability_strategy" name="accountability_strategy" /><br /><br />
      
        <input type="submit" id="create_account" value="Create Account" />
    </form>
      </header>
    </div>
  );
}

export default App;
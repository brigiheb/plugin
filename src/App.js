import logo from './logo.svg';
import './App.css';
import SatisfactionSurvey from './SatisfactionSurvey';
import Satisfaction from './satisfaction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Satisfaction/>
        <SatisfactionSurvey />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Event from './components/Event';

const App = () => {
  return (
    <div className="App">
      <h1>GDSC Club Events</h1>
      <h3>Lehman College</h3>
      <p>Welcome! Interested in viewing when our events will occur? Please view the list below for an easy-to-access viewpoint. We are so excited to have you join!</p>

      {/* Render an Event component */}
      <div className="eventOutline">
        <Event name="Hackathon" date="March 10, 2025" sign="Sign Up Here" />
      </div>
    </div>
  );
}

export default App;

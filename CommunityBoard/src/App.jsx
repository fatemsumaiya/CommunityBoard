import './App.css';
import Event from './components/Event'; './components/Event.jsx';

const App = () => {
  return (
    <div className="App">
      <div class="container">
          <div className="logo">
          <img src="/src/assets/GDSC.svg" id= "logo"  alt = "Google Developers Logo"/>
          <h1>GDSC Club Events</h1>
          <img src="/src/assets/GDSC.svg" id= "logo"  alt = "Google Developers Logo"/> 
       </div>
        <h1 id="subheading">Lehman College</h1>
    </div>
      <div className="eventOutline">
        <Event name="Interest Event" subtitle= "Get to know us, and the future events will happen week after  Club Fair" date="March 11, 2025"  />
        <Event name="Linkedln Event" subtitle= "Learn how to make the best use of LinkedIn, Fom networking to setup, plus get a picture for it" date="March 10, 2025" />
        <Event name="Ready Player One Movie Night" subtitle= " Movie night with Video game Club " date="March 14, 2025"  />
        <Event name="Hackathon" subtitle= " Movie night with Video game Club in Mid to late February " date="March 18, 2025"  />
        <Event name="Industry Talk" subtitle= "Women in tech talk" date="March 28, 2025"  />
        <Event name="Google Lookout" subtitle= "Campus Tour of Google! Limited seats! Sign up incoming <3" date="TBD" />
        <Event name="RSM Lookout" subtitle= "A tour at RSM US" date="TBD" />
        <Event name="CS Trivia Night" subtitle= "Join us for to finnese your problem solving skills" date="April 4, 2025" />
        <Event name="Collaborative Code 1" subtitle= "Hackathon Prep!!! Get used to GitHub and learning with others" date="April 30, 2025" />
        <Event name="Hackathon" subtitle= "Lehman College's second Spring Hackathon! Avalible for Lehman and CUNY Students" date="May 05, 2025" />
      </div>
    </div>
  );
}


export default App;

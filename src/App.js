import './App.css';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Experiences from "./components/experiences"
import KatieZaf from "./images/katie-zaferes.png"
import Wedding from "./images/wedding-photography 1.png"
import Mountain from "./images/mountain-bike 1.png"
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="exp">
        <Experiences
          imagelink={KatieZaf}
          rate="5.0"
          after_rating=" (6).USA"
          about="Life lessons with Katie Zaferes"
          price="From 136$/"         
        />
        <Experiences
          imagelink={Wedding}
          rate="5.0"
          after_rating=" (30).USA"
          about="Learn wedding photography"
          price="From 125$/"         
        />
        <Experiences 
          imagelink={Mountain}
          rate="4.8"
          after_rating=" (2).USA"
          about="Group Mountain Biking"
          price="From 50$ /"      
        />
      </div>
    </div>
  );
}

export default App;

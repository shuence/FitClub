import './App.css';
import Hero from './Components/Hero/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Hero from './Components/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Footer/Footer';
import Join from './Join/Join';
import Contact from './Join/Join/Contact';


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

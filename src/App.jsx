import "./App.scss";
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Trips from './layout/Trips';
import Contactinfo from "./layout/Contactinfo";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";




function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <About />
        <Trips />
        <Contactinfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

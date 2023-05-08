import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import Services from './components/services/services';
import Contact from './components/contact/contact';






function App() {
  return (
    <div className="App">
     <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />

            { /*<Route path="/show_blog/:id" element={<Show/>} /> 
            <Route path="/bloglist" element={<BlogList/>} />*/ }
            
          </Routes>
        </Router>
        <Footer />
        </div>
  );
}

export default App;

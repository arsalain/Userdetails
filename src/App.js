import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail';
function App() {
  return (

    <div className='App'>
  <>
  <Router>
  <Header/>
  <div className="container">
      <Routes>
          <Route exact path="/" element ={<Home />} />
            <Route exact path="/movie/:imdbID" element={<MovieDetail/>} />
      </Routes>
      </div>
    <Footer/>
  </Router>
  </>
  </div>
  );
}

export default App;

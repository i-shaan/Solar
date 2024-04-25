
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Video from './components/Video';
import Quiz from './components/Quiz';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Sun from './components/Planets/Sun';
import Moon from './components/Planets/Moon';
import Mars from './components/Planets/Mars';
import Venus from './components/Planets/Venus';
import Earth from './components/Planets/Earth';
import Mercury from './components/Planets/Mercury';
import Saturn from './components/Planets/Saturn';
import Neptune from './components/Planets/Neptune';
import Jupiter from './components/Planets/Jupiter';
import Uranus from './components/Planets/Uranus';
import Explore from './components/Explore';
import FeedbackForm from './components/Feedback';
function App() {
  return (
    <>
  <Router>
    <Routes>
    <Route exact path="/" element={<HomePage/>}></Route>
    <Route exact path="/video" element={<Video/>}></Route>
    <Route exact path="/quiz" element={<Quiz/>}></Route>
    <Route exact path="/Signup" element={<Signup/>}></Route>
    <Route exact path="/login" element={<Signin/>}></Route>
    <Route exact path="/planet/Sun" element={<Sun/>}></Route>
    <Route exact path="/planet/Moon" element={<Moon/>}></Route>
    <Route exact path="/planet/Mars" element={<Mars/>}></Route>
    <Route exact path="/planet/Venus" element={<Venus/>}></Route>
    <Route exact path="/planet/Earth" element={<Earth/>}></Route>
    <Route exact path="/planet/Mercury" element={<Mercury/>}></Route>
    <Route exact path="/planet/Uranus" element={<Uranus/>}></Route>
    <Route exact path="/planet/Jupiter" element={<Jupiter/>}></Route>
    <Route exact path="/planet/Neptune" element={<Neptune/>}></Route>
    <Route exact path="/planet/Saturn" element={<Saturn/>}></Route>
    <Route exact path="/explore" element ={<Explore/>}></Route>
    <Route exact path="/feed" element ={<FeedbackForm/>}></Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;

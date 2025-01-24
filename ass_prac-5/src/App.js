import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HelloWorld from './HelloWorld';
import SignUpForm from './SignUpForm';
import Notes from './Notes';
import './App.css';

function App() {
  return (
    <Router>
            <div className="App">
                <nav>
                    <Link to="/">Hello Message</Link>
                    <Link to="/signup">Sign-Up Form</Link>
                    <Link to="/notes">Notes</Link>
                </nav>
                <Routes>
                    <Route exact path="/" element={<HelloWorld />} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;

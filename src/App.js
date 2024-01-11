import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Main from './pages/MainPage/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;

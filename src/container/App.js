// App.js
import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import MyTable from '../components/table/MyTable';
import Home from '../components/home/Home';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="center-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<MyTable />} />
        </Routes>
      </div>

      {location.pathname !== '/' && (
        <div className="home-button-container">
          <Link to="/" className="home-button">
            Go Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;

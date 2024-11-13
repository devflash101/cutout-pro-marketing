import logo from './logo.svg';
// import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import Home from './views/Home';
import LayoutDefault from './layouts/LayoutDefault';

function App() {
  return (
    <Router>
      <Routes>
        {/* <AppRoute exact path="/" component={Home} layout={LayoutDefault} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

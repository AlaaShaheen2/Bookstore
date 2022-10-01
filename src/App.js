import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="books-store">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/catagories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

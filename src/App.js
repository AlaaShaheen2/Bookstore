import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
   <Provider store={store}>
    <div className="books-store">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/catagories" element={<Categories />} />
      </Routes>
    </div>
   </Provider>
  );
}

export default App;

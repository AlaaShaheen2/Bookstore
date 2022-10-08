import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="books-store">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

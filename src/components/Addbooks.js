import './styles/addbooks.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoook } from '../redux/books/books';

const AddBooks = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    id: 0,
  });

  const disp = useDispatch();
  const confirm = (el) => {
    el.preventDefault();
    disp(addBoook(book));
    el.target.reset();
  };

  const swapTitle = (el) => {
    el.persist();
    const { value } = el.target;
    setBook((el) => ({
      ...el,
      title: value,
    }));
  };

  const swapAuth = (el) => {
    el.persist();
    const { value } = el.target;
    setBook((el) => ({
      ...el,
      author: value,
    }));
  };
  return (
    <div className="add-form" onSubmit={confirm}>
      <span className="add-title"> Add New Book</span>
      <div className="form-inp">
        <input placeholder="Book Title" className="title-inp" onChange={swapTitle} />
        <input placeholder="Author" className="author-inp" onChange={swapAuth} />
        <button type="button" className="addbook-btn">
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBooks;

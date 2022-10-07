import './styles/addbooks.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    item_id: 0,
  });

  const disp = useDispatch();
  const confirm = (el) => {
    el.preventDefault();
    disp(addBook(book));
    el.target.reset();
  };

  const swapTitle = (el) => {
    el.persist();
    const { value } = el.target;
    setBook((el) => ({
      ...el,
      item_id: uuid(),
      title: value,
    }));
  };

  const swapAuth = (el) => {
    el.persist();
    const { value } = el.target;
    setBook((el) => ({
      ...el,
      item_id: uuid(),
      author: value,
    }));
  };
  return (
    <div className="add-form" onSubmit={confirm}>
      <span className="add-title"> Add New Book</span>
      <form className="form-inp">
        <input placeholder="Book Title" className="title-inp" onChange={swapTitle} />
        <input placeholder="Author" className="author-inp" onChange={swapAuth} />
        <button type="submit" className="addbook-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;

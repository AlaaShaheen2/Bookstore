import './styles/books.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBooks from './Addbooks';
import { getBook } from '../redux/books/books';
import status from '../redux/status';

const Books = () => {
  const dispatch = useDispatch();
  const bookItems = useSelector((state) => state.books.books);
  const load = useSelector((state) => state.books.loading);
  useEffect(() => {
    if (load === status.normal) dispatch(getBook());
  }, [dispatch, load]);
  return (

    <div className="books">
      {bookItems.map((book) => (
        // eslint-disable-next-line react/jsx-key
        <div className="book">
          <Book
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        </div>

      ))}
      <hr className="separator" />
      <AddBooks />
    </div>
  );
};

export default Books;

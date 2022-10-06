import './styles/books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBooks from './Addbooks';

const Books = () => {
  const bookItems = useSelector((state) => state.books);
  return (

    <div className="books">
      {bookItems.map((a) => (
        // eslint-disable-next-line react/jsx-key
        <div className="book">
          <Book
            title={a.title}
            author={a.author}
            id={a.id}
          />
        </div>

      ))}
      <hr className="separator" />
      <AddBooks />
    </div>
  );
};

export default Books;

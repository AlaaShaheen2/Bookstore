import './styles/book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const disp = useDispatch();
  const dele = (e) => {
    const bookId = e.target.id;
    disp(deleteBook(bookId));
  };

  const { id, title, author } = props;
  return (
    <div className="book-card">
      <div className="book-info">
        <div className="book-category">
          <span>Computer Science</span>
        </div>
        <div className="book-title">
          <span>{title}</span>
        </div>
        <div className="book-author">
          <span>{author}</span>
        </div>
        <div className="action-btns">
          <ul className="actions-li">
            <li>
              <button type="button">
                Comments
              </button>
            </li>
            <li>
              <button type="button" id={id} onClick={dele}>Remove</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

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
    <div className="book-card d-flex ">
      <div className="book-info  d-flex flex-center">
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
          <ul className="actions-li  d-flex">
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
      <div className="progress-info  d-flex">
        <div className="progress-bar" />
        <div className="progress-percent  d-flex flex-center">
          <span className="percent">68%</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className='vertical'>
    

      </div>

      <div className="chapter-info  d-flex flex-center">
        <span className="current-chapter">current chapter</span>
        <span className="chapter">Chapter 14</span>
        <button type="button" className="update-btn">Update progress</button>
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

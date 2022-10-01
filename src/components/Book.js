import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-card">
      <div className="book-category">
        <span>Action</span>
      </div>
      <div className="book-title">
        <span>{title}</span>
      </div>
      <div className="book-author">
        <span>{author}</span>
      </div>
      <div className="action-btns">
        <ul className="actions-li">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
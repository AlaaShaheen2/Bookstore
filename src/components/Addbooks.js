import './styles/addbooks.css';

const AddBooks = () => (
  <div className="add-form">
    <span className="add-title"> Add New Book</span>
    <div className="form-inp">
      <input placeholder="Book Title" className="title-inp" />
      <input placeholder="Author" className="author-inp" />
      <button type="button" className="addbook-btn">
        Add Book
      </button>
    </div>
  </div>
);

export default AddBooks;

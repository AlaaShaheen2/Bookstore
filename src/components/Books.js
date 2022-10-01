import './styles/books.css';
import Book from './Book';
import AddBooks from './Addbooks';

const Books = () => (
  <div className="books">
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <hr className="separator" />
    <AddBooks />
  </div>
);

export default Books;

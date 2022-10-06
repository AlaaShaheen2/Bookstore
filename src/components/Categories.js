import './styles/categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const disp = useDispatch();
  const testingW = () => {
    disp(statusCheck());
  };
  const status = useSelector((state) => state.category);
  return (
    <div className="categories">
      <button type="submit" className="check-status" onClick={testingW}>
        Check Status
      </button>
      <h3>
        {status}
      </h3>
    </div>
  );
};

export default Categories;

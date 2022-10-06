import { v4 as uuid } from 'uuid';

const bookInfo = (info) => {
  const { title, author } = info;
  return {
    id: uuid(),
    title,
    author,
  };
};
export default bookInfo;

const bookInfo = (info) => {
  const { title, author } = info;
  return {
    bookID: title,
    title,
    authors: author,
  };
};
export default bookInfo;

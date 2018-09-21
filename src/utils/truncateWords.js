const truncateWords = (text, limit) => {
  limit = limit || 20;
  if (text) {
    return (
      text
        .split(' ')
        .splice(0, limit)
        .join(' ') + '...'
    );
  } else {
    return '';
  }
};

export default truncateWords;

const formatTitle = (title: string, numSpaces: number): string => {
  return title.split(' ').slice(0, numSpaces).join(' ');
};

export default formatTitle;
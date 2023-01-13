export const tagNameToUpperCase = (tagName) =>
  tagName &&
  tagName
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

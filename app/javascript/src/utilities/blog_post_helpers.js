export const tags = [
  { title: 'Video Prodution', value: 'videoProduction' },
  { title: 'Software', value: 'software' },
  { title: 'Coding', value: 'coding' },
  { title: 'Ruby on Rails', value: 'rubyOnRails' },
  { title: 'Business', value: 'business' },
  { title: 'Custom Software', value: 'customSoftware' },
  { title: 'React Native', value: 'reactNative' },
  { title: 'React', value: 'react' },
];

export const getTagList = (tagList) => {
  const updatedTagList = [];
  tagList.forEach((tag) => {
    const tagObject = tags.find((t) => t.value === tag);
    updatedTagList.push(tagObject);
  });
  return updatedTagList;
};

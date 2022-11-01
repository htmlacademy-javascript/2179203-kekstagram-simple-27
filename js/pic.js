import {similarProject} from './data.js';


const pictureTemplate = document.querySelector('#picture')
.content
.querySelector('.picture');

const projectsPicture = () => {
const pictureProject = similarProject();

const pictureListFragment = document.createDocumentFragment();

pictureProject.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureListFragment.append(pictureElement);
  });
  
  document.querySelector('.pictures').append(pictureListFragment);
};
  export {projectsPicture};
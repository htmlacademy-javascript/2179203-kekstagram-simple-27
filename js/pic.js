import {similarProject} from './data.js';


const projectsPicture = () => {
const pictureTemplate = document.querySelector('#picture')
.content
.querySelector('.picture');

const pictureProject = similarProject();

const picturesElement = document.querySelector('.pictures');
const pictureListFragment = document.createDocumentFragment();

pictureProject.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').getAttribute('src', url);
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureListFragment.appendChild(pictureElement);
  });
  
  picturesElement.appendChild(pictureListFragment);
};
  export {projectsPicture};
import {getRandomArrayElement} from './util.js';

const PICTURES__PHOTO = 25;

const likesCount = {
    min: 15,
    max: 200,
}

const commentLines = {
    min: 0,
    max: 200,
}

const description = [
    'Игра в футбол. #футбол',
    'Силовые виды спорта. #силовой экстрим',
    'Плавание на открытой воде. #плавание',
    'Бег на длинные дистанции. #атлетика',
    'Природа России. #горы',
    'Город России. #Пермь',
    'Лесные животные. #Лиса',
    'Пешие походы. #туризм',
    'Зимние виды. #снег',
    'Вид спорта на льду. #коньки',
]




  const createPic = (index) => ({
     id: index,
     url:`photos/${index}.jpg`,
     description:getRandomArrayElement(description),
     likes:getRandomArrayElement(likesCount),
     comments:getRandomArrayElement(commentLines),
  });

  const similarProject = Array.from({length: PICTURES__PHOTO}, createPic);

  export {similarProject};
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


function getRandomPositiveInteger (a, b) {
    if (a < 0 || b < 0) {
      return NaN;
    }
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }

  function checkStringLength (string, length) {
    return string.length <= length;
  }

  const createPic = (index) => ({
     id: index,
     url:,
     description:,
     likes:,
     comments:,
  });
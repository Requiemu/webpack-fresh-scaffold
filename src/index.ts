console.clear();
console.log('New Project');

import './style.css';

const testImg = require('./asset/img/test_img.png');

// import testImg2 from './asset/img/test_img.png';

// console.log(testImg, testImg2);

(document.querySelector('.test-img') as HTMLImageElement).src = testImg.default
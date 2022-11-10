import '../styles/main.scss';
import * as model from './model';
import secretBird from '../assets/img/bird.06a46938.jpg';
import birds from './birds';
import randomBirdView from './views/randomBirdView';
console.log(birds);

document.querySelector('.secret-bird__img').src = secretBird;
document.querySelector('.bird-card__img').src = secretBird;

const gerRandomBird = function(level) {
    const lengthArr = birds[level].length;
    const randomNum = Math.floor(Math.random() * (lengthArr - 1 + 1) + 1)
    return birds[level][randomNum - 1];
}


const init = function() {
    randomBirdView.render(gerRandomBird(0));
}
init();
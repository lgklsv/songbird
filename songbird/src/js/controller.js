import '../styles/main.scss';
import * as model from './model';
import secretBird from '../assets/img/bird.06a46938.jpg';
import randomBirdView from './views/randomBirdView';
import answersView from './views/answersView';
import birdCardView from './views/birdCardView';
import audioView from './views/audioView';
 
document.querySelector('.secret-bird__img').src = secretBird;
document.querySelector('.bird-card__img').src = secretBird;


const init = function() {
    randomBirdView.render(model.getRandomBird(0));
    answersView.render(model.getRandomBirdsArray(0));
    birdCardView.renderMessage('Послушайте плеер.\n Выберите птицу из списка');
    birdCardView.render(model.getRandomBird(0));
    model.setSongDurations();
}
init();
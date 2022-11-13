import '../styles/main.scss';
import * as model from './model';
import randomBirdView from './views/randomBirdView';
import answersView from './views/answersView';
import birdCardView from './views/birdCardView';
import audioView from './views/audioView';


const controlCheckAnswer = function(elem) {
    if(elem.id == model.state.hiddenBird) {
        elem.firstElementChild.classList.add('answers-options__status_right');
        model.state.answered = true;
        const rightAnswer = model.getAnsweredBird(model.state.level, elem.id);

        randomBirdView.render(rightAnswer);
        birdCardView.render(rightAnswer);
        model.setSongDurations();

        const scoreInd = document.querySelector('.header__score-amount');
        const nextLevelBtn = document.querySelector('.next-btn');

        model.state.score = model.state.score + 5 - model.state.missedAnsw;

        scoreInd.textContent = model.state.score;
        nextLevelBtn.classList.add('next-btn_active');
    } else {
        if(!model.state.answered == true) {
            elem.firstElementChild.classList.add('answers-options__status_wrong');
            model.state.missedAnsw++;
        }
        const answeredBird = model.getAnsweredBird(model.state.level, elem.id)
        birdCardView.render(answeredBird);
        model.setSongDurations();
    }
}

const initLevel = function() {
    model.state.answered = false;
    model.state.hiddenBird = null;
    model.state.missedAnsw = 0;

    randomBirdView.render(model.getRandomBird(model.state.level));
    answersView.render(model.getRandomBirdsArray(model.state.level));
    birdCardView.renderMessage('Послушайте плеер.\n Выберите птицу из списка');
    model.setSongDurations();
}

const init = function() {
    initLevel();
    
    answersView._addHandlerCheckAnswer(controlCheckAnswer);
}
init();
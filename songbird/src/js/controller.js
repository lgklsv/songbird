import '../styles/main.scss';
import * as model from './model';
import randomBirdView from './views/randomBirdView';
import answersView from './views/answersView';
import birdCardView from './views/birdCardView';
import audioView from './views/audioView';


const controlCheckAnswer = function(elem) {
    if(elem.id == model.state.hiddenBird) {
        const scoreInd = document.querySelector('.header__score-amount');
        const nextLevelBtn = document.querySelector('.next-btn');

        // Show that the answer is correct
        elem.firstElementChild.classList.add('answers-options__status_right');
        model.state.answered = true;
        const rightAnswer = model.getAnsweredBird(model.state.level, elem.id);

        // Render Answer
        randomBirdView.render(rightAnswer);
        birdCardView.render(rightAnswer);
        model.setSongDurations();

        // Set score
        model.state.score = model.state.score + 5 - model.state.missedAnsw;
        scoreInd.textContent = model.state.score;

        // Acivate Next level btn
        nextLevelBtn.classList.add('next-btn_active');
    } else {
        // Remenber if the answer was wrong 
        if(!model.state.answered == true) {
            elem.firstElementChild.classList.add('answers-options__status_wrong');
            model.state.missedAnsw++;
        }
        // Render Bird
        const answeredBird = model.getAnsweredBird(model.state.level, elem.id)
        birdCardView.render(answeredBird);
        model.setSongDurations();
    }
}

const initLevel = function(level) {
    model.state.answered = false;
    model.state.hiddenBird = null;
    model.state.missedAnsw = 0;

    randomBirdView.render(model.getRandomBird(level));
    answersView.render(model.getRandomBirdsArray(level));
    birdCardView.renderMessage('Послушайте плеер.\n Выберите птицу из списка');
    model.setSongDurations();
}

const init = function() {
    initLevel(model.state.level);

    answersView._addHandlerCheckAnswer(controlCheckAnswer);
}
init();
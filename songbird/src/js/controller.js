import '../styles/main.scss';
import * as model from './model';
import * as helpers from './helpers';

import welcomeScreenView from './views/welcomeScreenView';
import randomBirdView from './views/randomBirdView';
import answersView from './views/answersView';
import birdCardView from './views/birdCardView';
import audioView from './views/audioView';
import finishGameView from './views/finishGameView';

import rssLogo from '../assets/svg/rs_school_js.svg';

import rightSound from '../assets/sounds/win.a1e9e8b6.mp3';
import errorSound from '../assets/sounds/error.165166d5.mp3';

const controlCheckAnswer = function(elem) {
    if(elem.id == model.state.hiddenBird && !elem.firstElementChild.classList.contains('answers-options__status_right')) {
        const scoreInd = document.querySelector('.header__score-amount');
        const nextLevelBtn = document.querySelector('.next-btn');
        const rightAudio = new Audio(rightSound);
        rightAudio.volume = 0.4;
        rightAudio.play();

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
        if(model.state.lastLevel == model.state.level) {
            nextLevelBtn.classList.remove('next-btn_active');
            nextLevelBtn.classList.add('next-btn_finish');
        }
    } else {
        // Remember if the answer was wrong 
        if(!model.state.answered == true && !elem.firstElementChild.classList.contains('answers-options__status_wrong')) {
            elem.firstElementChild.classList.add('answers-options__status_wrong');
            model.state.missedAnsw++;
            const errAudio = new Audio(errorSound);
            errAudio.volume = 0.5
            errAudio.play();
        }
        // Render Bird
        const answeredBird = model.getAnsweredBird(model.state.level, elem.id)
        birdCardView.render(answeredBird);
        model.setSongDurations();
    }
}

const controlNextLevelOnTheLine = function(level) {
    const levelItems = document.querySelectorAll('.quiz-line__btn');

    levelItems.forEach(item => {
        item.classList.remove('quiz-line__btn_active');
    });

    levelItems[level].classList.add('quiz-line__btn_active');
}

const initLevel = function(level) {
    model.state.answered = false;
    model.state.hiddenBird = null;
    model.state.missedAnsw = 0;

    controlNextLevelOnTheLine(level);
    randomBirdView.render(model.getRandomBird(level));
    answersView.render(model.getRandomBirdsArray(level));
    birdCardView.renderMessage('Послушайте плеер.\n Выберите птицу из списка');
    model.setSongDurations();
}

const controlStartGame = function(btn) {
    btn.classList.remove('start-btn');
    btn.textContent = 'Следующий Уровень';
    helpers.toggleShowGame();
    initQize();
}

const controlNextLevel = function(btn) {
    btn.classList.remove('next-btn_active');
    model.state.level++;
    if(model.state.lastLevel == model.state.level) {
        btn.textContent = 'Завершить Игру';
    };
    initLevel(model.state.level);
}

const controlFinishGame = function(btn) {
    btn.classList.remove('next-btn_finish');
    btn.textContent = 'Попробовать еще раз!';

    finishGameView.render(model.state);
    setTimeout(() => btn.classList.add('next-btn_try-again'), 100);
}

const controlTryAgain = function(btn) {
    const scoreInd = document.querySelector('.header__score-amount');

    btn.classList.remove('next-btn_try-again');
    btn.textContent = 'Следующий Уровень';
    model.state.score = 0;
    model.state.level = 0;
    scoreInd.textContent = model.state.score;

    initQize();
}

function initQize() {
    welcomeScreenView._clear();
    initLevel(model.state.level);
}

function init() {
    const rssLogoPlace = document.querySelector('.rssLogo');
    rssLogoPlace.src = rssLogo;
    
    welcomeScreenView.render(model.state);
    helpers.toggleShowGame();

    answersView._addHandlerStartGame(controlStartGame);
    answersView._addHandlerCheckAnswer(controlCheckAnswer);
    answersView._addHandlerNextLevel(controlNextLevel);
    answersView._addHandlerFinishGame(controlFinishGame);
    answersView._addHandlerTryAgain(controlTryAgain);
}
init();
import View from "./View"; 
import { state as state } from '../model';

class FinishGameView extends View {
    _parentElement = document.querySelector('.screen-render');


    _generateMarkup() {
        return `
            <div class="finish-game">
                <h2 class="finish-game__header">${state.language == 'ru' ? 'Поздравляем ! 🎉' : 'Congratulations! 🎉'}</h2>
                <p class="finish-game__text">${state.language == 'ru' ? `Вы прошли викторину и набрали ${this._data.score} из 30 возможных баллов` : `You've passed the quiz and scored ${this._data.score} out of 30 possible points`}</p>
            </div>
        `;
    }
}

export default new FinishGameView();
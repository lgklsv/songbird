import View from "./View"; 

class FinishGameView extends View {
    _parentElement = document.querySelector('.screen-render');


    _generateMarkup() {
        return `
            <div class="finish-game">
                <h2 class="finish-game__header">Поздравляем ! 🎉</h2>
                <p class="finish-game__text">Вы прошли викторину и набрали ${this._data.score} из 30 возможных баллов</p>
            </div>
        `;
    }
}

export default new FinishGameView();
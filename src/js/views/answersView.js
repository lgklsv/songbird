import previewAnswersView from "./previewAnswersView";
import View from "./View";
import * as helpers from '../helpers';


class AnswersView extends View {
    _parentElement = document.querySelector('.answers-options');
    _nextBtn = document.querySelector('.next-btn');
    

    _addHandlerStartGame(handler) {
        this._nextBtn.addEventListener('click', function(e) {
            if (e.target.classList.contains('start-btn')) {
                handler(e.target);
            }
        })
    }

    _addHandlerNextLevel(handler) {
        this._nextBtn.addEventListener('click', function(e) {
            if (e.target.classList.contains('next-btn_active')) {
                handler(e.target);
            }
        })
    }

    _addHandlerFinishGame(handler) {
        this._nextBtn.addEventListener('click', function(e) {
            if(e.target.classList.contains('next-btn_finish')) {
                helpers.toggleShowGame();

                const allAudios = document.querySelectorAll('.audio__src');
                allAudios.forEach(audio => audio.pause());
        
                handler(e.target);
            }
        })
    }    

    _addHandlerTryAgain(handler) {
        this._nextBtn.addEventListener('click', function(e) {
            if(e.target.classList.contains('next-btn_try-again')){
                const finishScreen = document.querySelector('.finish-game');
                finishScreen.classList.add('hidden');
                helpers.toggleShowGame();
        
                handler(e.target);
            }
        })
    }

    _addHandlerCheckAnswer(handler) {
        this._parentElement.addEventListener('click', function(e) {
            handler(e.target);
        })
    }

    _generateMarkup() {
        return this._data.map(option => previewAnswersView.render(option, false)).join('');
    }
}

export default new AnswersView();
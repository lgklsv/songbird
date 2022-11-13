import previewAnswersView from "./previewAnswersView";
import View from "./View";

class AnswersView extends View {
    _parentElement = document.querySelector('.answers-options');
    _nextBtn = document.querySelector('.next-btn');
    

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
                const secretBirdCont = document.querySelector('.secret-bird');
                const answersCont = document.querySelector('.answers');  
                const answersOpt = document.querySelector('.answers-options');
                const birdCard = document.querySelector('.bird-card');
        
                secretBirdCont.classList.add('hidden');
                answersCont.classList.add('hidden');
                answersOpt.classList.add('hidden');
                birdCard.classList.add('hidden');
        
                e.target.textContent = 'Попробовать еще раз!';
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
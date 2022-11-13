import previewAnswersView from "./previewAnswersView";
import View from "./View";

class AnswersView extends View {
    _parentElement = document.querySelector('.answers-options');

    _addHandlerCheckAnswer(handler) {
        this._parentElement.addEventListener('click', function(e) {
            handler(e.target)
        })
    }

    _generateMarkup() {
        return this._data.map(option => previewAnswersView.render(option, false)).join('');
    }
}

export default new AnswersView();
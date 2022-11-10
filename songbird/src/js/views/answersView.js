import previewAnswersView from "./previewAnswersView";
import View from "./View";

class AnswersView extends View {
    _parentElement = document.querySelector('.answers-options');

    _generateMarkup() {
        console.log(this._data);
        return this._data.map(option => previewAnswersView.render(option, false)).join('');
    }
}

export default new AnswersView();
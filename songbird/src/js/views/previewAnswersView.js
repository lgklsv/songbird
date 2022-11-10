import View from "./View";

class PreviewAnswersView extends View {
    _parentElement = '';

    _generateMarkup() {
        return `
            <div class="answers-options__item">
                <div class="answers-options__status"></div>
                <div class="answers-options__title">
                    <p class="regtext">${this._data.name}</p>
                </div>
            </div>
        `;
    }
}

export default new PreviewAnswersView();
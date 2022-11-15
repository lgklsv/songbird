import View from "./View";

class HeaderView extends View {
    _parentElement = document.querySelector('.header');
    _galleryBtn = document.querySelector('.header__gallery');
    _quizBtn = document.querySelector('.header__quiz');


    _addHandlerOpenQuiz(handler) {
        this._quizBtn.addEventListener('click', function(e) {
            handler(e.target);
        })
    }

    _addHandlerOpenGallery(handler) {
        this._galleryBtn.addEventListener('click', function(e) {
            handler(e.target);
        })
    }
}

export default new HeaderView();
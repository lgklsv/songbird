import View from "./View";

class HeaderView extends View {
    _parentElement = document.querySelector('.header');
    _galleryBtn = document.querySelector('.header__gallery');


    _addHandlerOpenGallery(handler) {
        this._galleryBtn.addEventListener('click', function(e) {
            handler(e.target);
        })
    }
}

export default new HeaderView();
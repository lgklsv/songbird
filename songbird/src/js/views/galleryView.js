import View from "./View";
import previewBirdCardView from "./previewBirdCardView";

class GalleryView extends View {
    _parentElement = document.querySelector('.gallery-render');

    _generateMarkup() {
        return this._data.flat().map(birdCard => previewBirdCardView.render(birdCard, false)).join('');
    }
}

export default new GalleryView();
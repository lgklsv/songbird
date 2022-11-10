import View from "./View";

class RandomBirdView extends View {
    _parentElement = document.querySelector('.secret-bird');

    _generateMarkup() {
        return `
            <img class="secret-bird__img" src="${this._data.image}" alt="${this._data.name}">
            <div class="secret-bird__info">
                <h2 class="secret-bird__title">${this._data.name}</h2>
                <div class="secret-bird__audio">Audio HERE</div>
            </div>
        `;
    }
}

export default new RandomBirdView();
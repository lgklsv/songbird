import View from "./View";

class BirdCardView extends View {
    _parentElement = document.querySelector('.bird-card');

    _generateMarkup() {
        return `
            <div class="bird-card__header">
                <img class="bird-card__img" src="${this._data.image}" alt="${this._data.name}">
                <div class="bird-card__info">
                    <h2 class="bird-card__title">${this._data.name}</h2>
                    <h2 class="regtext bird-card__subtitle">${this._data.species}</h2>
                    <div class="bird-card__audio">Audio HERE</div>
                </div>
            </div>
            <div class="bird-card__description">
                <p class="bird-card__text regtext">${this._data.description}</p>
            </div>
        `;
    }
}

export default new BirdCardView();

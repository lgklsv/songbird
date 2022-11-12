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
                    <div class="bird-card__audio audio">
                        <audio class="audio__src">
                            <source src="${this._data.audio}" type="audio/mpeg">
                        </audio>
                        <div class="audio__btn-circle">
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div class="audio__input">
                            <input type="range" min="0" max="100" step="1" id="slider" value="0">
                            <div class="audio__time-info">
                                <div class="audio__time audio__time_left">0:00</div>
                                <div class="audio__time audio__time_right">1:30</div>
                            </div>
                        </div>
                        <div class="audio__volume"> 
                            <i class="fa-solid fa-volume-high"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bird-card__description">
                <p class="bird-card__text regtext">${this._data.description}</p>
            </div>
        `;
    }
}

export default new BirdCardView();

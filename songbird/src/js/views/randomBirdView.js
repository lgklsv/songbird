import View from "./View";

class RandomBirdView extends View {
    _parentElement = document.querySelector('.secret-bird');

    _generateMarkup() {
        return `
            <img class="secret-bird__img" src="${this._data.image}" alt="${this._data.name}">
            <div class="secret-bird__info">
                <h2 class="secret-bird__title">${this._data.name}</h2>
                <div class="secret-bird__audio audio">
                    <audio class="audio__src" preload="metadata">
                        <source src="${this._data.audio}" type="audio/mpeg">
                    </audio>
                    <div class="audio__btn-circle">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="audio__input">
                        <input type="range" min="0" max="100" step="1" id="slider" value="0">
                        <div class="audio__time-info">
                            <div class="audio__time audio__time_left">00:00</div>
                            <div class="audio__time audio__time_right">Loading...</div>
                        </div>
                    </div>
                    <div class="audio__volume"> 
                        <i class="fa-solid fa-volume-high"></i>
                    </div>
                </div>
            </div>
        `;
    }
}

export default new RandomBirdView();
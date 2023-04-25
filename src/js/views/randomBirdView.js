import View from './View';
import { state as state } from '../model';
import secretBird from '../../assets/img/bird.06a46938.jpg';

class RandomBirdView extends View {
  _parentElement = document.querySelector('.secret-bird');

  _generateMarkup() {
    return `
            <img class="secret-bird__img" src="${state.answered ? this._data.image : secretBird}" alt="${
      state.answered ? this._data.name : 'secretBird'
    }">
            <div class="secret-bird__info">
                <h2 class="secret-bird__title">${state.answered ? this._data.name : '******'}</h2>
                <div class="secret-bird__audio audio">
                    <audio class="audio__src" preload="metadata">
                        <source src="${this._data.audio}" type="audio/mpeg">
                    </audio>
                    <div class="audio__btn-circle">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="audio__input">
                        <input type="range" min="0" max="100" step="1" class="slider slider_birds" value="0">
                        <div class="audio__time-info">
                            <div class="audio__time audio__time_left">00:00</div>
                            <div class="audio__time audio__time_right">Loading...</div>
                        </div>
                    </div>
                    <div class="audio__volume"> 
                        <i class="fa-solid fa-volume-high"></i>
                        <div class="change-volume hidden">
                            <input type="range" min="0" max="100" step="1" class="slider slider_vertical" orient="vertical" value="0">
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

export default new RandomBirdView();

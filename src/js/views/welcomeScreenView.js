import View from "./View"; 
import { state as state } from '../model';

class WelcomeScreenView extends View {
    _parentElement = document.querySelector('.screen-render');


    _generateMarkup() {
        return `
            <div class="welcome-screen">
                <h2 class="welcome-screen__header">${state.language == 'ru' ? 'Добро пожаловать в Songbird! 🕊️' : 'Welcome to Songbird! 🕊️'}</h2>
                <p class="welcome-screen__text">${state.language == 'ru' ? 'Это игра-викторина, где вам нужно угадать питицу по ее голосу!' : 'This is the quiz game where you should guess the birds by its voice!'}</p>
                <p class="welcome-screen__text">${state.language == 'ru' ? 'Всех птиц можно посмотреть в галерее.' : 'You can find all birds in the gallery.'}</p>
                <p class="welcome-screen__text">${state.language == 'ru' ? 'Чтобы начать игру нажми на кнопку снизу!' : 'To start the game click the button below!'}</p>
            </div>
        `;
    }
}

export default new WelcomeScreenView();
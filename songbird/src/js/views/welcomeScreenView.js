import View from "./View"; 

class WelcomeScreenView extends View {
    _parentElement = document.querySelector('.screen-render');


    _generateMarkup() {
        return `
            <div class="welcome-screen">
                <h2 class="welcome-screen__header">Добро пожаловать в Songbird! 🕊️</h2>
                <p class="welcome-screen__text">Это игра-викторина, где вам нужно угадать питицу по ее голосу!</p>
                <p class="welcome-screen__text">Всех птиц можно посмотреть в галерее.</p>
                <p class="welcome-screen__text">Чтобы начать игру нажми на кнопку снизу!</p>
            </div>
        `;
    }
}

export default new WelcomeScreenView();
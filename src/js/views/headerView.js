import View from './View';

class HeaderView extends View {
  _parentElement = document.querySelector('.header');
  _galleryBtn = document.querySelector('.header__gallery');
  _quizBtn = document.querySelector('.header__quiz');
  _languageSwitch = document.getElementById('language-toggle');

  _addHandlerOpenQuiz(handler) {
    this._quizBtn.addEventListener('click', function (e) {
      handler(e.target);
    });
  }

  _addHandlerLanguageSwitch(handler) {
    this._languageSwitch.addEventListener('change', function (e) {
      const allAudios = document.querySelectorAll('.audio__src');
      allAudios.forEach((audio) => audio.pause());
      handler(e.target);
    });
  }

  _addHandlerOpenGallery(handler) {
    this._galleryBtn.addEventListener('click', function (e) {
      const allAudios = document.querySelectorAll('.audio__src');
      allAudios.forEach((audio) => audio.pause());

      handler(e.target);
    });
  }
}

export default new HeaderView();

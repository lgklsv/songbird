export const toggleShowGame = function () {
  const secretBirdCont = document.querySelector('.secret-bird');
  const answersCont = document.querySelector('.answers');
  const answersOpt = document.querySelector('.answers-options');
  const birdCard = document.querySelector('.bird-card');

  secretBirdCont.classList.toggle('hidden');
  answersCont.classList.toggle('hidden');
  answersOpt.classList.toggle('hidden');
  birdCard.classList.toggle('hidden');
};

export const hideGame = function () {
  const secretBirdCont = document.querySelector('.secret-bird');
  const answersCont = document.querySelector('.answers');
  const answersOpt = document.querySelector('.answers-options');
  const birdCard = document.querySelector('.bird-card');

  secretBirdCont.classList.add('hidden');
  answersCont.classList.add('hidden');
  answersOpt.classList.add('hidden');
  birdCard.classList.add('hidden');
};

export const hideQuizLine = function () {
  const quizLine = document.querySelector('.quiz-line');
  quizLine.classList.add('hidden');
};

export const revealFooter = function () {
  const footer = document.querySelector('.footer');

  footer.style.height = '80px';
  footer.style.paddingBottom = '1rem';
};

export const styleBackGallery = function () {
  const gallery = document.querySelector('.gallery');
  gallery.style.marginTop = '0rem';
  gallery.style.marginBottom = '0rem';
};

export const styleGallery = function () {
  const gallery = document.querySelector('.gallery');
  const footer = document.querySelector('.footer');

  footer.style.height = '0px';
  footer.style.paddingBottom = '2rem';
  gallery.style.marginTop = '0rem';
  gallery.style.marginBottom = '0.5rem';
};

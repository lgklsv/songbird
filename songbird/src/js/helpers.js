export const toggleShowGame = function() {
    const secretBirdCont = document.querySelector('.secret-bird');
    const answersCont = document.querySelector('.answers');  
    const answersOpt = document.querySelector('.answers-options');
    const birdCard = document.querySelector('.bird-card');

    secretBirdCont.classList.toggle('hidden');
    answersCont.classList.toggle('hidden');
    answersOpt.classList.toggle('hidden');
    birdCard.classList.toggle('hidden');
}

export const hideQuizLine = function() {
    const quizLine = document.querySelector('.quiz-line');
    quizLine.classList.add('hidden');
}
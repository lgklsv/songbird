import birds from './birds';

export const state = {
    score: 0,
}

export const getRandomBird = function(level) {
    const lengthArr = birds[level].length;
    const randomNum = Math.floor(Math.random() * (lengthArr - 1 + 1) + 1)
    return birds[level][randomNum - 1];
}

export const getRandomBirdsArray = function(level) {
    return birds[level].sort( () => Math.random() - 0.5);
}
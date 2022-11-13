import birds from './birds';

export const state = {
    score: 0,
    answered: false,
    hiddenBird: null,
    level: 0,
    missedAnsw: 0
}

export const getRandomBird = function(level) {
    const lengthArr = birds[level].length;
    const randomNum = Math.floor(Math.random() * (lengthArr - 1 + 1) + 1);

    const randomBird = birds[level][randomNum - 1];
    state.hiddenBird = randomBird.id;
    return randomBird;
}

export const getRandomBirdsArray = function(level) {
    return birds[level].sort( () => Math.random() - 0.5);
}

export const getAnsweredBird = function(level, id) {
    return birds[level].find(bird => bird.id == id);
}


export const setSongDurations = function() {
    const allAudios = document.querySelectorAll('.audio__src');

    allAudios.forEach(audio => {
        audio.addEventListener('loadedmetadata', function() {
            const duration = audio.duration;
            const durationEl = audio.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;

            const sec = parseInt(duration % 60);
            const min = parseInt((duration / 60) % 60);
            durationEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        });

        audio.addEventListener('timeupdate', function() {
            const duration = audio.duration;
            const curDuration = audio.currentTime;
            const durationCurEl = audio.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
            const progressBar = audio.nextElementSibling.nextElementSibling.firstElementChild;

            const sec = parseInt(curDuration % 60);
            const min = parseInt((curDuration / 60) % 60);
            durationCurEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

            const percentage = (curDuration/duration) * 100;
            progressBar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${percentage}%, rgb(115, 115, 115) ${percentage}%, rgb(115, 115, 115) 100%)`;
            progressBar.value = percentage;

        })
    })
}
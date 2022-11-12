import View from "./View";

class AudioView extends View {
    _overlay = document.querySelector('.overlay');

    constructor() {
        super();
        this._addHandlerControls();
        this._addHandlerProgressBar();
        this._addHandlerOverlay();
    }

    _addHandlerOverlay() {
        this._overlay.addEventListener('click', function(e) {
            const volumeInputs = document.querySelectorAll('.change-volume');

            volumeInputs.forEach(inp => inp.classList.add('hidden'));
            e.target.classList.add('hidden');
        })
    }
    
    _addHandlerControls() {
        document.body.addEventListener('click', function(e) {
            if(e.target.classList == 'audio__btn-circle') {
                const playIcon = e.target.firstElementChild;
                const audio = e.target.previousElementSibling;

                playIcon.classList.toggle('fa-play');
                playIcon.classList.toggle('fa-pause');

                if (playIcon.classList.contains('fa-play')) {
                    audio.pause();
                } 
                if (playIcon.classList.contains('fa-pause')) {
                    audio.play();
                }
            } 
            if(e.target.classList == 'audio__volume') {
                document.querySelector('.overlay').classList.remove('hidden');

                const volumeBtn = e.target;
                const volumeElement = volumeBtn.firstElementChild.nextElementSibling;
                const audio = volumeBtn.parentElement.firstElementChild;
                const volumeInput = volumeElement.firstElementChild.nextElementSibling;
                const volumeIndicator = volumeElement.firstElementChild;

                volumeIndicator.textContent = audio.volume * 100;
                volumeInput.value = audio.volume * 100;

                volumeElement.classList.toggle('hidden');
            } 
        })
    }

    _addHandlerProgressBar() {
        document.body.addEventListener('input', function(e) {
            if(e.target.classList.contains('slider_birds')) {
                const curPercentage = e.target.value;
                const audio = e.target.parentElement.previousElementSibling.previousElementSibling;
                const durationCurEl = audio.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
                const duration = audio.duration;

                const curSec = (duration/100) * curPercentage;
                const sec = parseInt(curSec % 60);
                const min = parseInt((curSec / 60) % 60);
                durationCurEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
                audio.currentTime = curSec;

                e.target.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${curPercentage}%, rgb(115, 115, 115) ${curPercentage}%, rgb(115, 115, 115) 100%)`;
                e.target.value = curPercentage;
            }

            if (e.target.classList.contains('slider_vertical')) {
                const volumeValue = e.target.value;
                const volumeIndicator = e.target.previousElementSibling;
                const audio = e.target.parentElement.parentElement.parentElement.firstElementChild; 
                const audioIcon = e.target.parentElement.previousElementSibling;

                if(volumeValue > 50 && !audioIcon.classList.contains('fa-volume-high')) {
                    audioIcon.className = '';
                    audioIcon.classList.add('fa-solid');
                    audioIcon.classList.add('fa-volume-high');
                }
                if(volumeValue <= 50 && !audioIcon.classList.contains('fa-volume-low')) {
                    audioIcon.className = '';
                    audioIcon.classList.add('fa-solid');
                    audioIcon.classList.add('fa-volume-low');
                }
                if(volumeValue == 0 && !audioIcon.classList.contains('fa-volume-xmark')) {
                    audioIcon.className = '';
                    audioIcon.classList.add('fa-solid');
                    audioIcon.classList.add('fa-volume-xmark');
                }
                audio.volume = volumeValue/100;
                volumeIndicator.textContent = volumeValue;
            }
        })
    }
}

export default new AudioView();
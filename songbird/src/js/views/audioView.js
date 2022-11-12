import View from "./View";

class AudioView extends View {

    constructor() {
        super();
        this._addHandlerControls();
        this._addHandlerProgressBar();
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
        })
    }

    _addHandlerProgressBar() {
        document.body.addEventListener('input', function(e) {
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
        })
    }
}

export default new AudioView();
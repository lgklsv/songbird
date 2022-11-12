import View from "./View";

class AudioView extends View {

    constructor() {
        super();
        this._addHandlerPlay();
    }
    
    _addHandlerPlay() {
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


}

export default new AudioView();
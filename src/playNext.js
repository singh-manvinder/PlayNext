class PlayNext{
    constructor(){
        this.videoTag = 'ytd-compact-video-renderer';
    }
    startProcess(){

    }
    renderButtons(){
        const list = document.getElementsByTagName(this.videoTag);
        const button = document.createElement('button');
        button.className = 'btn-play-next';
        button.innerHTML = 'Play Next';

        list.forEach(element => {
            element.appendChild(button);
        });
    }
}

function playAudio(){
    var audio = document.getElementById('bg-music');
    audio.play();
    document.getElementById('yy').innerHTML = `
    <a onclick="pauseAudio()">
     <img src="./imgtb/suspend.png" width="21.2px"/>
    </a>`;
}
function pauseAudio(){
    var audio = document.getElementById('bg-music');
    document.getElementById('yy').innerHTML = `
    <a onclick="playAudio()">
     <img src="./imgtb/play.png" width="23px"/>
    </a>`;
    
    audio.pause();
}
function finished(){
    document.getElementById('yy').innerHTML = `
    <a onclick="playAudio()">
     <img src="./imgtb/play.png" width="23px"/>
    </a>`;
    audio.pause();
}

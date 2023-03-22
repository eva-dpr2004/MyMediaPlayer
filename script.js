const div = document.createElement('div');
div.className = "container";
document.body.appendChild(div);

//Caméra 1♥
const cam2 = document.createElement('img');
cam2.className = "cam";
cam2.setAttribute('src','camera.png');
document.body.appendChild(cam2);
//Video♥
const videoo = document.createElement('video');
videoo.className = "night";
videoo.setAttribute('src','GiveMeTheNight.mp4');
document.body.appendChild(videoo);

//image de cadre de cimena à placer correctement

//const imagee = document.createElement('img');
//imagee.className = "nightime";
//imagee.setAttribute('src','ecrancine.png');
//document.body.appendChild(imagee);

//Caméra 2♥
const cam = document.createElement('img');
cam.className = "cam";
cam.setAttribute('src','camera.png');
document.body.appendChild(cam);



//Boutons♥
const b1 = document.createElement('button');
b1.className = "b1"
const b2 = document.createElement('button');
b2.className = "b2"
const b3 = document.createElement('button');
b3.className = "b3"

//input♥ (css à modifier)
const ninput = document.createElement('input');
ninput.id = 'progressbar'
ninput.setAttribute('type', 'range')
ninput.setAttribute('max', '100')
ninput.setAttribute('min', '0')
ninput.setAttribute('value', '0')

div.appendChild(b1)
div.appendChild(b2)
div.appendChild(b3)
div.appendChild(ninput)

b1.addEventListener("click", playbutton);

videoo.addEventListener("click", playbutton);

function playbutton(){
    if(videoo.paused){
    videoo.play();
    }
    else{
        videoo.pause();
    }
}
//progressbar♥
const progressBar = document.querySelector('#progressbar')
progressBar.addEventListener("input" , function(){
videoo.currentTime = videoo.duration * (progressBar.value / 100);
})
;progressBar.addEventListener('timeupdate', function(){
const progress = (videoo.currentTime / videoo.duration) * 100;
progressBar.value = progress;
});

//avant-après de 10sec♥
b2.onclick = function() {
    videoo.currentTime -= 10;
  };
  
b3.onclick = function() {
    videoo.currentTime += 10;
    if(videoo.currentTime >= videoo.duration || videoo.paused) {
      videoo.pause();
      videoo.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    }
  };

videoo.removeAttribute('controls');
const playpause = document.querySelector('.playpause');
playpause.addEventListener('click', () => {
  playpause.classList.toggle('playing');
});
// nav bar elements
// trending songs
let x1 = document.getElementById('ts');
let y1 = document.getElementById('trend');
x1.addEventListener('mouseover', () => {
    y1.style.display = 'block';
})
x1.addEventListener('mouseleave', () => {
    y1.style.display = 'none';
})

// classic songs
let x2 = document.getElementById('cs');
let y2 = document.getElementById('classic');
x2.addEventListener('mouseover', () => {
    y2.style.display = 'block';
})
x2.addEventListener('mouseleave', () => {
    y2.style.display = 'none';
})

// new songs
let x3 = document.getElementById('ns');
let y3 = document.getElementById('new');
x3.addEventListener('mouseover', () => {
    y3.style.display = 'block';
});
x3.addEventListener('mouseleave', () => {
    y3.style.display = 'none';
});

// variables used
let index = 0;
let audioeelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progress_bar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songname'));


let songs = [
    { filePath: "songs/1.mp3" },
    { filePath: "songs/2.mp3" },
    { filePath: "songs/3.mp3" },
    { filePath: "songs/4.mp3" },
    { filePath: "songs/5.mp3" },
    { filePath: "songs/6.mp3" },
    { filePath: "songs/7.mp3" },
    { filePath: "songs/8.mp3" },
    { filePath: "songs/9.mp3" },
    { filePath: "songs/10.mp3" },
    { filePath: "songs/11.mp3" },
    { filePath: "songs/12.mp3" },
    { filePath: "songs/13.mp3" },
    { filePath: "songs/14.mp3" },
    { filePath: "songs/15.mp3" },

]

// audioeelement.play(); //  to play audio 

// handle play/pause in bottom
masterplay.addEventListener('click', () => {
    if (audioeelement.paused || audioeelement.currentTime <= 0) {//play audio to start or resume
        audioeelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        masterplay.classList.add('fa-beat');
        gif.style.opacity = 1;
    }

    else {  // to pause audio
        audioeelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.remove('fa-beat');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        // allplay();
    }
})
// events 
audioeelement.addEventListener('timeupdate', () => {
    //seek bar
    progress = parseInt((audioeelement.currentTime / audioeelement.duration) * 100); //to get % of song that is played
    progressbar.value = progress;   // to update the progress bar
})
progressbar.addEventListener('change', () => {
    audioeelement.currentTime = progressbar.value * audioeelement.duration / 100;   //progressbar has % value of song that is played here we need exact duration for that we evaluate current time

})
//to make all icons as play icons
const allplay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause');
        //  e.target.classList.remove(' fa-beat-fade');
        element.classList.add('fa-play');
    })
}

//to play another song
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioeelement.paused || audioeelement.currentTime <= 0) {
            allplay();  //first make all icons as play icon
            e.target.classList.remove('fa-play');  // now remove play icon form target
            e.target.classList.add('fa-pause'); // now make the target icon as pause icon
            //  e.target.classList.add(' fa-beat-fade');
            index = parseInt(e.target.id);
            audioeelement.src = `songs/${index + 1}.mp3`;
            // audioeelement.currentTime = 0;
            audioeelement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        }

        else {
            e.target.classList.add('fa-play');
            e.target.classList.remove('fa-pause');
            audioeelement.pause();
            gif.style.opacity = 0;
            masterplay.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-circle-pause');
        }
    })
});

// next button
document.getElementById('next').addEventListener('click', () => {
    if (index >= 5) index = 0
    else {
        index += 1
    }
    audioeelement.src = `songs/${index + 1}.mp3`;
    audioeelement.currentTime = 0;
    audioeelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

//previous button
document.getElementById('previous').addEventListener('click', () => {
    if (index <= 0) index = 0
    else {
        index -= 1
    }
    audioeelement.src = `songs/${index + 1}.mp3`;
    audioeelement.currentTime = 0;
    audioeelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})


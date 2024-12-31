console.log("welcome to spotify");

//Initialize the variable
let songIndex =0;
let audioElement = new Audio("audios/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs =[
    {songName:"Ishq hai", filePath: "audios/1.mp3", coverPath: "images/cover pic.jpeg"},
    {songName:"Ishq di Baajiyaan", filePath: "audios/2.mp3", coverPath: "images/cover2.jpeg"},
    {songName:"Sahiba", filePath: "audios/3.mp3", coverPath: "images/cover3.jpeg"},
    {songName:"Haan ke Haan", filePath: "audios/4.mp3", coverPath: "images/cover4.jpeg"},
    {songName:"Dil tu Jaan tu", filePath: "audios/5.mp3", coverPath: "images/cover5.jpeg"},
    {songName:"Mera Mann", filePath: "audios/6.mp3", coverPath: "images/cover6.jpeg"},
    {songName:"Ve Kamleya", filePath: "audios/7.mp3", coverPath: "images/cover7.jpeg"},
]


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    }
)

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
    
})

myProgressbar.addEventListener('change' ,()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `audios/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `audios/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
let currentStart = document.getElementById(`currentStart`);
let currentEnd = document.getElementById(`currentEnd`);
let seek = document.getElementById(`seek`);
let bar2 = document.getElementById(`bar2`);
let dot = document.getElementsById(`dot`);

music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur =music.duration;
    console.log(music_dur);
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2<20){
        sec2 = `${sec2}`;
    }
    currentStart.innerText =`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon = document.getElementById(`vol_icon`);
let vol = document.getElementById(`vol`);
let vol_bar = document.getElementsById(`vol_bar`)[0];
let vol_dot = document.getElementById(`vol_dot`);

vol.addEventListener(`change`,()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
    }
    if(vol.value>0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }
    if(vol.value>50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
    }

    let vol_a =vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume =vol_a/100;
});


let back = document.getElementById(`back`);
let next = document.getElementById(`next`);

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem').length);
    }
    music.src=`music/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitle = songs.filter((els)=>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML=songName;
            
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName(`song-item`))[index=-1].style.background='rgb(105,105,105,.1)';
        makeAllplay();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');   
        
        
})
next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem').length)){
        index=1;
    }
    music.src=`music/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitle = songs.filter((els)=>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML=songName;
            
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName(`song-item`))[index=-1].style.background='rgb(105,105,105,.1)';
        makeAllplay();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');   
        
        
})




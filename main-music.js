// popular-song scroll
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});



// popular-artist scroll


let pa_left = document.getElementById('pa_left');
let pa_right = document.getElementById('pa_right');
let pa_items = document.getElementsByClassName('pa_items')[0];


pa_right.addEventListener('click',()=>{
    pa_items.scrollLeft +=330;
});
pa_left.addEventListener('click',()=>{
    pa_items.scrollLeft -=330;
});
const music = new Audio('music/1.mp3')
// music.play();
const songs=[
    {
        id: "1",
        songName: `jai ho`,
        poster: "img/1.jpg"
    },

    {
        id: "2",
        songName: `Maa Tujhe Salaam`,
        poster: "img/2.jpg"
    },
    {
        id: "3",
        songName: "Cartoon - On & On",
        poster: "img/3.jpg"
    },

    {
        id: "4",
        songName: "Warriyo - Mortals",
        poster: "img/4.jpg"
    },
    {
        id: "5",
        songName: "Ertugrul Gazi",
        poster: "img/5.jpg"
    },
    {
        id: "6",
        songName: "Electronic Music",
        poster: "img/6.jpgjpg"
    },
    {
        id: "7",
        songName: "Agar Tum Sath Ho",
        poster: "img/7.jpg"
    },
    {
        id: "8",
        songName: "Rang De Basanti",
        poster: "img/8.jpg"
    },
    {
        id: "9",
        songName: "Dilbar",
        poster: "img/9.jpg"
    },
    {
        id: "10",
        songName: "Duniya",
        poster: "img/10.jpg"
    },
    {
        id: "11",
        songName: "Lagdi Lahore Di",
        poster: "img/11.jpg"
    },
    {
        id: "12",
        songName: "Putt Jatt Da",
        poster: "img/12.jpg"
    },
    {
        id: "13",
        songName: "Baarishein",
        poster: "img/13.jpg"
    },
    {
        id: "14",
        songName: "Vaaste ",
        poster: "img/14.jpg"
    },
    {
        id: "15",
        songName: "lut gaye",
        poster: "img/15.jpg"
    },
    {
        id: "16",
        songName: "Tu Meri Jindgi Hai Tu",
        poster: "img/16.jpg"
    },
    
    {
        id: "17",
        songName: "Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha",
        poster: "img/17.jpg"
    },
    {
        id: "18",
        songName: "Mere Dhol Judaiyan",
        poster: "img/18.jpg"
    },
    {
        id: "19",
        songName: "Eh Munde Pagal Ne Saare",
        poster: "img/19.jpg"
    },
    {
        id: "20",
        songName: "Dunny 82K ",
        poster: "img/20.jpg"
    },
    {
        id: "21",
        songName: "Desh Mere",
        poster: "img/21.jpg"
    },
    {
        id: "22",
        songName: "Kasumbi",
        poster: "img/22.jpg"
    },
    {
        id: "23",
        songName: "Ek Saathi Aur Bhi Tha",
        poster: "img/23.jpg"
    },
    {
        id: "24",
        songName: "Tu Bhoola Jise",
        poster: "img/24.jpg"
    },
    {
        id: "25",
        songName: "Satyamev Jayate",
        poster: "img/25.jpg"
    },
    {
        id: "26",
        songName: "Aao Bachcho Tumhe Dikhaye",
        poster: "img/26.jpg"
    },
    {
        id: "27",
        songName: "Vijayi Vishwa Tiranga Pyara",
        poster: "img/27.jpg"
    },
    {
        id: "28",
        songName: "Bande Mein Tha Dum",
        poster: "img/28.jpg"
    },
    {
        id: "29",
        songName: "Azaadi Ke Liye",
        poster: "img/29.jpg"
    },
    {
        id: "30",
        songName: "Hindustan Meri Jaan",
        poster: "img/30.jpg"
    },
    {
        id: "31",
        songName: "Vatan",
        poster: "img/31.jpg"
    },
    {
        id: "32",
        songName: "Salaam India",
        poster: "img/32.jpg"
    },
    {
        id: "33",
        songName: "India Waale",
        poster: "img/33.jpg"
    },
    {
        id: "34",
        songName: "Aye Mere Pyare Watan",
        poster: "img/34.jpg"
    },
    {
        id: "35",
        songName: "Har Karam Apna Karenge",
        poster: "img/35..jpg"
    }
];



Array.from(document.getElementsByClassName('song_item')).forEach((e1,i)=>{
    e1.getElementsByTagName('img')[0].src=songs[i].poster;
    e1.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})
Array.from(document.getElementsByClassName('song-box')).forEach((e2,i)=>{
    e2.getElementsByTagName('img')[0].src=songs[i].poster;
    e2.getElementsByTagName('p')[1].innerHTML=songs[i].songName;
})
Array.from(document.getElementsByClassName('top-song-box')).forEach((e3,i)=>{
    e3.getElementsByTagName('img')[0].src=songs[i].poster;
    e3.getElementsByTagName('p')[1].innerHTML=songs[i].songName;
})


let masterPlay=document.getElementById('bb_play');
let bb_wave=document.getElementById('bb_wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        bb_wave.classList.add('active1');

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        music.pause();
        bb_wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
    }
})


let masterPlay1=document.getElementById('bb_play1');
// let bb_wave=document.getElementById('bb_wave');

masterPlay1.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        // bb_wave.classList.add('active1');

        masterPlay1.classList.remove('fa-play');
        masterPlay1.classList.add('fa-pause');
    }else{
        music.pause();
        // bb_wave.classList.remove('active1');
        masterPlay1.classList.add('fa-play');
        masterPlay1.classList.remove('fa-pause');
    }
})

const music1 = new Audio('music/2.mp3')

let masterPlay2=document.getElementById('bb_play2');
// let bb_wave=document.getElementById('bb_wave');

masterPlay2.addEventListener('click',()=>{
    if(music1.paused || music1.currentTime <= 0){
        music1.play();
        // bb_wave.classList.add('active1');

        masterPlay2.classList.remove('fa-play');
        masterPlay2.classList.add('fa-pause');
    }else{
        music1.pause();
        // bb_wave.classList.remove('active1');
        masterPlay2.classList.add('fa-play');
        masterPlay2.classList.remove('fa-pause');
    }
})
const music2 = new Audio('music/3.mp3')

let masterPlay3=document.getElementById('bb_play3');
// let bb_wave=document.getElementById('bb_wave');

masterPlay3.addEventListener('click',()=>{
    if(music2.paused || music1.currentTime <= 0){
        music2.play();
        // bb_wave.classList.add('active1');

        masterPlay3.classList.remove('fa-play');
        masterPlay3.classList.add('fa-pause');
    }else{
        music2.pause();
        // bb_wave.classList.remove('active1');
        masterPlay3.classList.add('fa-play');
        masterPlay3.classList.remove('fa-pause');
    }
})


const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName(`song_item`)).forEach((el)=>{
        el.style.background ='rgb(105,105,105,.0)';
    })
}
const makeAllplay =()=>{
    Array.from(document.getElementsByClassName(`playlistplay`)).forEach((el)=>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
}






let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName(`playlistplay`)).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index= el.target.id;
        // console.log(index);
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
        Array.from(document.getElementsByClassName(`song_item`))[index-=1].style.background="rgb(105,105,105,.3)";
        makeAllplay();
        el.target.classList.remove('fa-circle-play');
        el.target.classList.add('fa-circle-pause');
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})





seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});

// music.addEventListener('ended', ()=>{
//     masterPlay.classList.add('bi-play-fill');
//     masterPlay.classList.remove('bi-pause-fill');
//     wave.classList.remove('active2');
// })

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsById('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
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




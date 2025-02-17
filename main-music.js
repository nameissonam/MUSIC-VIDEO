const music = new Audio('music/1.mp3')
// music.play();
// const songs=[
//     {
//         id: 1,
//         songName: "Jai Ho",
//         poster: "img/1.jpg"
//     },
//     {
//         id: 2,
//         songName: "Maa Tujhe Salaam",
//         poster: "img/maatujhesalam.jpg"
//     },
//     {
//         id: 3,
//         songName: "Yeh Jo Des Hai Tera",
//         poster: "img/yehjodeshhaimera.jpg"
//     },
//     {
//         id: 4,
//         songName: "Bharat Humko Jaan Se Pyaara Hai",
//         poster: "img/bharathumkojaansepyaarahai.jpg"
//     },
//     {
//         id: 5,
//         songName: "Aye Watan",
//         poster: "img/ayewatan.jpg"
//     },
//     {
//         id: 6,
//         songName: "Teri Mitti",
//         poster: "img/terimitti.jpgjpg"
//     },
//     {
//         id: 7,
//         songName: "Sandese Aate Hain",
//         poster: "img/sandeseaatehainjpg"
//     },
//     {
//         id: 8,
//         songName: "Rang De Basanti",
//         poster: "img/rangdebasanti"
//     },
//     {
//         id: 9,
//         songName: "Des Mere Des",
//         poster: "img/desmeredes"
//     },
//     {
//         id: 10,
//         songName: "Ae Mere Watan Ke Logon",
//         poster: "img/aemerewatankelogon"
//     },
//     {
//         id: 11,
//         songName: "Chak De India",
//         poster: "img/chakdeindiajpg"
//     },
//     {
//         id: 12,
//         songName: "Kar Chale Hum Fida",
//         poster: "img/karchalehumfidajpg"
//     },
//     {
//         id: 13,
//         songName: "Hindustani",
//         poster: "img/hindustanijpg"
//     },
//     {
//         id: 14,
//         songName: "Kandhon Se Milte Hain Kandhe",
//         poster: "img/kandhonsemiltekandhejpg"
//     },
//     {
//         id: 15,
//         songName: "Vande Mataram",
//         poster: "img/vandemataramjpg"
//     },
//     {
//         id: 16,
//         songName: "Aisa Des Hai Mera",
//         poster: "img/aisadeshaimerajpg"
//     },
//     {
//         id: 17,
//         songName: "I Love My India",
//         poster: "img/ilovemyindiajpg"
//     },
//     {
//         id: 18,
//         songName: "Jai Hind Ki Sena",
//         poster: "img/jaihindkisenajpg"
//     },
//     {
//         id: 19,
//         songName: "Sarfaroshi Ki Tamanna",
//         poster: "img/sarfaroshikitamannajpg"
//     },
//     {
//         id: 20,
//         songName: "Jai Hind",
//         poster: "img/jaihindjpg"
//     },
//     {
//         id: 21,
//         songName: "Desh Mere",
//         poster: "img/deshmerejpg"
//     },
//     {
//         id: 22,
//         songName: "Kasumbi",
//         poster: "img/kasumbijpg"
//     },
//     {
//         id: 23,
//         songName: "Ek Saathi Aur Bhi Tha",
//         poster: "img/eksaathiaurbhithajpg"
//     },
//     {
//         id: 24,
//         songName: "Tu Bhoola Jise",
//         poster: "img/tubhoolajisejpg"
//     },
//     {
//         id: 25,
//         songName: "Satyamev Jayate",
//         poster: "img/satyamevjayatejpg"
//     },
//     {
//         id: 26,
//         songName: "Aao Bachcho Tumhe Dikhaye",
//         poster: "img/aaobachchotumehdikhayejpg"
//     },
//     {
//         id: 27,
//         songName: "Vijayi Vishwa Tiranga Pyara",
//         poster: "img/vijayivishwatirangapyarajpg"
//     },
//     {
//         id: 28,
//         songName: "Bande Mein Tha Dum",
//         poster: "img/bandemeinthadumjpg"
//     },
//     {
//         id: 29,
//         songName: "Azaadi Ke Liye",
//         poster: "img/azaadikeliejpg"
//     },
//     {
//         id: 30,
//         songName: "Hindustan Meri Jaan",
//         poster: "img/hindustanmerijaanjpg"
//     },
//     {
//         id: 31,
//         songName: "Vatan",
//         poster: "img/vatanjpg"
//     },
//     {
//         id: 32,
//         songName: "Salaam India",
//         poster: "img/salaamindiajpg"
//     },
//     {
//         id: 33,
//         songName: "India Waale",
//         poster: "img/indiawaalejpg"
//     },
//     {
//         id: 34,
//         songName: "Aye Mere Pyare Watan",
//         poster: "img/ayemerepyarewatanjpg"
//     },
//     {
//         id: 35,
//         songName: "Har Karam Apna Karenge",
//         poster: "img/harkaramapnakarengejpg"
//     }
// ];



// Array.from(document.getElementsByClassName('song-item')).forEach((e,i)=>{
//     e.getElementsByClassName('img-play')[0].src=songs[i].poster;
//     e.getElementsByClassName('pop_text')[0].innerHTML=songs[i].songName;
// })


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


const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName(`song-item`)).forEach((el)=>{
        el.computedStyleMap.background ='rgb(105,105,105,.0)';
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
        index = el.target.id;
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
    });
})

let currentStart = document.getElementById(`currentStart`);
let currentEnd = document.getElementById(`currentEnd`);

music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur =music.duration;
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    currentEnd.innerText=`${min1}:${sec1}`;
})



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



// popular-song scroll


let pa_left = document.getElementById('pa_left');
let pa_right = document.getElementById('pa_right');
let pa_items = document.getElementsByClassName('pa_items')[0];


pa_right.addEventListener('click',()=>{
    pa_items.scrollLeft +=330;
});
pa_left.addEventListener('click',()=>{
    pa_items.scrollLeft -=330;
});


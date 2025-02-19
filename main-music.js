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




// Vanillatilt code
var VanillaTilt = (function () {
    'use strict';
    
    /**
     * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
     * Original idea: https://github.com/gijsroge/tilt.js
     * MIT License.
     * Version 1.8.1
     */
    
    class VanillaTilt {
      constructor(element, settings = {}) {
        if (!(element instanceof Node)) {
          throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
        }
    
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
    
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
    
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
    
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
    
        this.element = element;
        this.settings = this.extendSettings(settings);
    
        this.reverse = this.settings.reverse ? -1 : 1;
        this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
        this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
    
        this.elementListener = this.getElementListener();
    
        if (this.glare) {
          this.prepareGlare();
        }
    
        if (this.fullPageListening) {
          this.updateClientSize();
        }
    
        this.addEventListeners();
        this.reset();
    
        if (this.resetToStart === false) {
          this.settings.startX = 0;
          this.settings.startY = 0;
        }
      }
    
      static isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
      }
    
      /**
       * Method returns element what will be listen mouse events
       * @return {Node}
       */
      getElementListener() {
        if (this.fullPageListening) {
          return window.document;
        }
    
        if (typeof this.settings["mouse-event-element"] === "string") {
          const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
    
          if (mouseEventElement) {
            return mouseEventElement;
          }
        }
    
        if (this.settings["mouse-event-element"] instanceof Node) {
          return this.settings["mouse-event-element"];
        }
    
        return this.element;
      }
    
      /**
       * Method set listen methods for this.elementListener
       * @return {Node}
       */
      addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
    
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
    
        if (this.glare || this.fullPageListening) {
          window.addEventListener("resize", this.onWindowResizeBind);
        }
    
        if (this.gyroscope) {
          window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
        }
      }
    
      /**
       * Method remove event listeners from current this.elementListener
       */
      removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
    
        if (this.gyroscope) {
          window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        }
    
        if (this.glare || this.fullPageListening) {
          window.removeEventListener("resize", this.onWindowResizeBind);
        }
      }
    
      destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.element.style.willChange = "";
        this.element.style.transition = "";
        this.element.style.transform = "";
        this.resetGlare();
    
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
    
        this.element = null;
      }
    
      onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) {
          return;
        }
    
        this.updateElementPosition();
    
        if (this.gyroscopeSamples > 0) {
          this.lastgammazero = this.gammazero;
          this.lastbetazero = this.betazero;
    
          if (this.gammazero === null) {
            this.gammazero = event.gamma;
            this.betazero = event.beta;
          } else {
            this.gammazero = (event.gamma + this.lastgammazero) / 2;
            this.betazero = (event.beta + this.lastbetazero) / 2;
          }
    
          this.gyroscopeSamples -= 1;
        }
    
        const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
    
        const degreesPerPixelX = totalAngleX / this.width;
        const degreesPerPixelY = totalAngleY / this.height;
    
        const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
    
        const posX = angleX / degreesPerPixelX;
        const posY = angleY / degreesPerPixelY;
    
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.event = {
          clientX: posX + this.left,
          clientY: posY + this.top,
        };
    
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    
      onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
      }
    
      onMouseMove(event) {
        if (this.updateCall !== null) {
          cancelAnimationFrame(this.updateCall);
        }
    
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
      }
    
      onMouseLeave() {
        this.setTransition();
    
        if (this.settings.reset) {
          requestAnimationFrame(this.resetBind);
        }
      }
    
      reset() {
        this.onMouseEnter();
    
        if (this.fullPageListening) {
          this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
          };
        } else {
          this.event = {
            clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
            clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
          };
        }
    
        let backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
      }
    
      resetGlare() {
        if (this.glare) {
          this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
          this.glareElement.style.opacity = "0";
        }
      }
    
      getValues() {
        let x, y;
    
        if (this.fullPageListening) {
          x = this.event.clientX / this.clientWidth;
          y = this.event.clientY / this.clientHeight;
        } else {
          x = (this.event.clientX - this.left) / this.width;
          y = (this.event.clientY - this.top) / this.height;
        }
    
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
    
        let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
    
        return {
          tiltX: tiltX,
          tiltY: tiltY,
          percentageX: x * 100,
          percentageY: y * 100,
          angle: angle
        };
      }
    
      updateElementPosition() {
        let rect = this.element.getBoundingClientRect();
    
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
      }
    
      update() {
        let values = this.getValues();
    
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
          "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " +
          "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " +
          "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
    
        if (this.glare) {
          this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
          this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
        }
    
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
          "detail": values
        }));
    
        this.updateCall = null;
      }
    
      /**
       * Appends the glare element (if glarePrerender equals false)
       * and sets the default style
       */
      prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
          // Create glare element
          const jsTiltGlare = document.createElement("div");
          jsTiltGlare.classList.add("js-tilt-glare");
    
          const jsTiltGlareInner = document.createElement("div");
          jsTiltGlareInner.classList.add("js-tilt-glare-inner");
    
          jsTiltGlare.appendChild(jsTiltGlareInner);
          this.element.appendChild(jsTiltGlare);
        }
    
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
    
        if (this.glarePrerender) {
          return;
        }
    
        Object.assign(this.glareElementWrapper.style, {
          "position": "absolute",
          "top": "0",
          "left": "0",
          "width": "100%",
          "height": "100%",
          "overflow": "hidden",
          "pointer-events": "none",
          "border-radius": "inherit"
        });
    
        Object.assign(this.glareElement.style, {
          "position": "absolute",
          "top": "50%",
          "left": "50%",
          "pointer-events": "none",
          "background-image": `linear-gradient(0deg, rgba(90, 255, 84, 0.49) 0%, rgba(22, 1, 251, 0.29) 100%)`,
          "transform": "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          "opacity": "0"
        });
    
        this.updateGlareSize();
      }
    
      updateGlareSize() {
        if (this.glare) {
          const glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
    
          Object.assign(this.glareElement.style, {
            "width": `${glareSize}px`,
            "height": `${glareSize}px`,
          });
        }
      }
    
      updateClientSize() {
        this.clientWidth = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
    
        this.clientHeight = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
      }
    
      onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
      }
    
      setTransition() {
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;
    
        this.transitionTimeout = setTimeout(() => {
          this.element.style.transition = "";
          if (this.glare) {
            this.glareElement.style.transition = "";
          }
        }, this.settings.speed);
    
      }
    
      /**
       * Method return patched settings of instance
       * @param {boolean} settings.reverse - reverse the tilt direction
       * @param {number} settings.max - max tilt rotation (degrees)
       * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
       * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
       * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
       * @param {string} settings.easing - Easing on enter/exit
       * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
       * @param {number} settings.speed - Speed of the enter/exit transition
       * @param {boolean} settings.transition - Set a transition on enter/exit
       * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
       * @param {boolean} settings.glare - if it should have a "glare" effect
       * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
       * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
       * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
       * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
       * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
       * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
       * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
       * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
       * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
       */
      extendSettings(settings) {
        let defaultSettings = {
          reverse: false,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: true,
          axis: null,
          glare: false,
          "max-glare": 1,
          "glare-prerender": false,
          "full-page-listening": false,
          "mouse-event-element": null,
          reset: true,
          "reset-to-start": true,
          gyroscope: true,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10
        };
    
        let newSettings = {};
        for (var property in defaultSettings) {
          if (property in settings) {
            newSettings[property] = settings[property];
          } else if (this.element.hasAttribute("data-tilt-" + property)) {
            let attribute = this.element.getAttribute("data-tilt-" + property);
            try {
              newSettings[property] = JSON.parse(attribute);
            } catch (e) {
              newSettings[property] = attribute;
            }
    
          } else {
            newSettings[property] = defaultSettings[property];
          }
        }
    
        return newSettings;
      }
    
      static init(elements, settings) {
        if (elements instanceof Node) {
          elements = [elements];
        }
    
        if (elements instanceof NodeList) {
          elements = [].slice.call(elements);
        }
    
        if (!(elements instanceof Array)) {
          return;
        }
    
        elements.forEach((element) => {
          if (!("vanillaTilt" in element)) {
            element.vanillaTilt = new VanillaTilt(element, settings);
          }
        });
      }
    }
    
    if (typeof document !== "undefined") {
      /* expose the class to window */
      window.VanillaTilt = VanillaTilt;
    
      /**
       * Auto load
       */
      VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }
    
    return VanillaTilt;
    
    }());


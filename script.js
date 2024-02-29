



// Almacena los elementos en variables para evitar selecciones repetitivas
const playlist = document.getElementById("PlayLIST");
const imagenes = document.getElementById("Imagenes");
const inicio = document.getElementById("Inicio");
const btn = document.getElementById("btn");
const galeriaPlaylist = document.getElementById("GaleriaPlaylist");
const galeria = document.querySelector(".Galeria");
const playlistImagenes = document.querySelector(".plyListImagenes");

// Función para ocultar todos los elementos excepto uno
function mostrarElemento(elemento) {
   // Ocultar todas las secciones primero
   imagenes.style.display = 'none';
   inicio.style.display = 'none';
   playlist.style.display = 'none';

   // Mostrar la sección correspondiente
   if (elemento === playlist) {
       playlist.style.display = 'block';
   } else if (elemento === imagenes) {
       imagenes.style.display = 'block';
   } else {
       inicio.style.display = 'block';
   }

   // Inicializar el plugin BlocksIt después de mostrar el div Imagenes
   if (elemento === imagenes) {
       $('#container2').BlocksIt({
           numOfCol: 5,
           offsetX: 8,
           offsetY: 8
       });
   }
}

// Mostrar el elemento "Inicio" por defecto
mostrarElemento(inicio);

// Agregar eventos
btn.addEventListener("click", function() {
   mostrarElemento(playlist);
});

document.querySelectorAll(".regresarInicio").forEach(item => {
   item.addEventListener("click", function() {
       mostrarElemento(inicio);
   });
});

galeriaPlaylist.addEventListener("click", function() {
   mostrarElemento(imagenes);
});

galeria.addEventListener("click", function() {
   mostrarElemento(imagenes);
});

playlistImagenes.addEventListener("click", function() {
   mostrarElemento(playlist);
});

var swiper = new Swiper(".mySwiper", {
   effect: "coverflow", 
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   loop: true,
   coverflowEffect: { 
       depth: 500,
       modifier: 1,
       slidesShadows:true,
       rotate: 0,
       stretch: 0
   }
});
let songs = [
    /*Agregar mas canciones 
                {
        title: "",
        image: "",
        audio: ""
    },
    
    */
    {
        title: "Radio",
        image: "images/lana-radio.jpg",
        audio: "musica/Radio.mp3"
    },
    {
        title: "Yes To Heaven",
        image: "images/yes to heaven.jpeg",
        audio: "musica/yes to heaven  lana del rey.mp3"
    },
    {
        title: "Unconditionally",
        image: "images/Katy Perry - Unconditionally.jpg",
        audio: "musica/Katy Perry - Unconditionally (Traducida al Español).mp3"
    },
    {
        title: "What Makes You Beautiful",
        image: "images/What Makes You Beautiful.jpg",
        audio: "musica/One Direction - What Makes You Beautiful (Audio).mp3"
    },
    {
        title: "Like you Do",
        image: "images/likeyoudo.jpeg",
        audio: "musica/Joji - Like You Do (Español).mp3"
    },
    {
        title: "Por Ti",
        image: "images/por ti.jpg",
        audio: "musica/Belanova - Por Ti.mp3"
    },
    {
        title: "Eres",
        image: "images/Eres.jpeg",
        audio: "musica/Café Tacvba - Eres (Video Oficial).mp3"
    },
    {
        title: "Ojitos De Miel",
        image: "images/ojitos de miel.jpeg",
        audio: "musica/Ojitos de Miel - (Video Con Letras) - T3R Elemento - DEL Records 2020.mp3"
    },
    {
        title: "All Of The Stars",
        image: "images/Ed Sheeran - All Of The Star.jpg",
        audio: "musica/Ed Sheeran - All Of The Stars (Traducida Ingles - Español).mp3"
    },
    {
        title: "Everything Has Changed",
        image: "images/Everything Has Changed.jpg",
        audio: "musica/Taylor Swift - Everything Has Changed ft. Ed Sheeran  Lyrics + Español  Video Official.mp3"
    },
    {
        title: "One And Only",
        image: "images/One And Only.jpg",
        audio: "musica/One And Only.mp3"
    },
    {
        title: "Is This Love",
        image: "images/Is this love.jpg",
        audio: "musica/Bob Marley - Is This Love (Official Music Video).mp3"
    },
    {
     title: "Chemical",
     image: "images/Post Malone - Chemical.jpg",
     audio: "musica/Post Malone - Chemical (Video Oficial + Sub. Español).mp3"
   },
   {
     title: "Labios Rotos",
     image: "images/Zoé - Labios Rotos.jpg",
     audio: "musica/labios rotos ; zoé  letra.mp3"
   },
   {
     title: "Nothing On You",
     image: "images/Nothing On You.jpg",
     audio: "musica/Nothing On You.- Bruno Mars  SUBTITULADA EN ESPAÑOL.mp3"
   },
   {
     title: "Locked Out Of Heaven",
     image: "images/locked out of heaven.jpg",
     audio: "musica/Bruno Mars - Locked Out Of Heaven (Sub. Español).mp3"
   },
   
   ];
   
   let songsList = document.getElementById('songsList');
   
   songs.forEach((song, index) => {
    let songDiv = document.createElement('div');
    songDiv.classList.add('swiper-slide');
    songDiv.innerHTML = `
        <nav>
            <div class="circle">
                <i class="fas fa-circle-arrow-left"></i>
            </div>
            <h1>${song.title}</h1>
            <div class="circle">
                <i class="far fa-heart"></i>
            </div>
        </nav>    
        <img src="${song.image}" class="song-img">
        <span id="current-time${index + 1}" class="current-time">00:00</span>
        <span id="song-duration${index + 1}" class="song-duration-time">00:00</span>
        <audio id="song${index + 1}">
            <source src="${song.audio}" type="audio/mp3">
        </audio>
        <input type="range" value="0" id="progress${index + 1}" class="progress">
        <div class="controls">
            <div onclick="playPause('song${index + 1}', 'ctrlIcon${index + 1}')"><i class="fas fa-play" id="ctrlIcon${index + 1}"></i></div>
        </div>
    `;
    songsList.appendChild(songDiv);
   });
   
   let audioPlayers = songs.map((song, index) => document.getElementById(`song${index + 1}`));
   
   function playPause(playerId, ctrlIconId) {
    audioPlayers.forEach((player, index) => {
        let ctrlIcon = document.getElementById(ctrlIconId);
        if (player.id === playerId) {
            if (player.paused) {
                player.play();
                ctrlIcon.classList.remove("fa-play");
                ctrlIcon.classList.add("fa-pause");
            } else {
                player.pause();
                ctrlIcon.classList.remove("fa-pause");
                ctrlIcon.classList.add("fa-play");
            }
        } else {
            player.pause();
            player.currentTime = 0;
            let otherCtrlIcon = document.getElementById(`ctrlIcon${index + 1}`);
            otherCtrlIcon.classList.remove("fa-pause");
            otherCtrlIcon.classList.add("fa-play");
        }
    });
   }
   
   function progreso(cancion, currentTimeId, durationId, progressId) {
    let music = document.getElementById(cancion);
    let seekBar = document.getElementById(progressId);
    let currentTime = document.getElementById(currentTimeId);
    let songDuration = document.getElementById(durationId);
    currentTime.innerHTML = '00:00';
   
    setInterval(() => {
        seekBar.max = music.duration;
        songDuration.innerHTML = formatTime(music.duration);
    }, 300);
   
    setInterval(() => {
        seekBar.value = music.currentTime;
        currentTime.innerHTML = formatTime(music.currentTime);
    }, 500);
   
    seekBar.addEventListener('input', () => {
        music.currentTime = seekBar.value;
    });
   }
   
   audioPlayers.forEach((player, index) => {
    progreso(`song${index + 1}`, `current-time${index + 1}`, `song-duration${index + 1}`, `progress${index + 1}`);
   });
   
   const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
   }

// Fotos
$(document).ready(function() {
   var $container = $('#container2');

   var imageFiles = [
       // Lista de imágenes
       "foto-1.jpg",
       "foto-2.jpg",
       "foto-29.jpeg",
       "foto-4.jpg",
       "foto-5.jpg",
       "foto-6.jpg",
       "foto-25.jpeg",
       "foto-8.jpg",
       "foto-9.jpg",
       "foto-10.jpg",
       "foto-11.jpg",
       "foto-23.jpeg",
       "foto-13.jpg",
       "foto-26.jpeg",
       "foto-15.jpg",
       "foto-16.jpg",
       "foto-17.jpg",
       "foto-19.jpg",
       "foto-20.jpg",
       "foto-21.jpg",
       "foto-22.jpg",
       "foto-24.jpeg",
       "foto-7.jpg",
       "foto-14.jpg",
       "foto-18.jpg",
       "foto-28.jpeg",
       "foto-3.jpg",
       "foto-30.jpeg",
       
       
   ];

   var container = $('#container2');

   imageFiles.forEach(function(image) {
       var gridItem = $('<div class="grid">');
       var imgHolder = $('<div class="imgholder">');
       var img = $('<img>').attr('src', 'fotos/' + image);
       imgHolder.append(img);
       gridItem.append(imgHolder);
       container.append(gridItem);


       img.click(function() {
           if (!gridItem.hasClass('selected')) {
               $('.grid').removeClass('selected');
               $('.grid img').css('transform', 'scale(1)');
               gridItem.addClass('selected');
               img.css('transform', 'scale(0.8)');
           } else {
               gridItem.removeClass('selected');
               img.css('transform', 'scale(1)');
           }
       });
});

   $('#Imagenes').hide(); // Ocultar el div al cargar la página

   $(window).on("load", function() {
       $('#container2').BlocksIt({
           numOfCol: 5,
           offsetX: 8,
           offsetY: 8
       });
   });

   var currentWidth = 1100;
   $(window).resize(function() {
       var winWidth = $(window).width();
       var conWidth;
       if (winWidth < 660) {
           conWidth = 440;
           col = 2
       } else if (winWidth < 880) {
           conWidth = 660;
           col = 3
       } else if (winWidth < 1100) {
           conWidth = 880;
           col = 4;
       } else {
           conWidth = 1100;
           col = 5;
       }

       if (conWidth != currentWidth) {
           currentWidth = conWidth;
           $('#container2').width(conWidth);
           $('#container2').BlocksIt({
               numOfCol: col,
               offsetX: 8,
               offsetY: 8
           });
       }
   });

});


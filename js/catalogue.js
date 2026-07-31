/*
Author: Vimesh
Desc: handles writing to the song grid in the catalogue html file
    handles the search bar and sort by functions
    handles the audio player
 */




const bottomPlayer = document.getElementById('bottom-player');
const closeButton = document.getElementById('close-player-button');
const audioPlayer = document.getElementById('main-audio');

const songNameDisplay = document.getElementById('song-name');
const songGrid = document.getElementById('song-list');

const searchBox = document.getElementById('search-box');
const genreSelect = document.getElementById('genre-select');
const sortBy = document.getElementById('sort-by');


function applyFiltersAndSort() {

    const searchTerm = searchBox.value.toLowerCase().trim();
    const selectedGenre = genreSelect.value;
    const selectedSortBy = sortBy.value;

    let result = [...songs]; // equal to new ArrayList<>(songs) in java


    // this handles the searchbox logic
    if (searchTerm !== '') {
        result = result.filter(song =>
            song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm)
        );
    } // only return songs or artists with the search query


    // this handles the genre select logic
    if (selectedGenre !== 'all') {
        result = result.filter(song =>
            song.genre === selectedGenre
        );
    } // if selected isnt all, then return only selected genre

    result.sort((a, b) => {
        if (selectedSortBy === 'duration') {
            return durationToSeconds(a.duration) -
                durationToSeconds(b.duration);
        } // if negative result, print song a, if not, print song b.

        if (selectedSortBy === 'year') {
            return a.year - b.year;
        } // this is the same as the duration thing


        //this code down here is literal magic
        // it does title, artist, genre, and language all at once
        // what it does is compare the alphabetical order of the selection in song
        return a[selectedSortBy].localeCompare(b[selectedSortBy]);
    })


    // render the result once it ends
    renderCatalogue(result);

}


function renderCatalogue(songsToDisplay = songs) {
    songGrid.innerHTML = ''; // clear the grid before doing anything

    songsToDisplay.forEach(song => { // prints to the grid for every song it has
        let cardHTML = `
                <article class="song-card">

                    <div class="album-art">
                        <img src="${song.img}" alt="Album Art">

                        <button class="play-button" onclick="playSong('${song.title}', '${song.artist}', '${song.audio}')">Play</button>
                    </div>

                    <h3> ${song.title} </h3>
                    <p> ${song.artist} </p>

                    <div class="hidden-details">
                        <p>Language: ${song.language}</p>
                        <p>Year: ${song.year}</p>
                        <p>Duration: ${song.duration}</p>
                        <p>Genre: ${song.genre}</p>
                    </div>

                </article>`;


        songGrid.innerHTML += cardHTML;
    })
}


function playSong(songTitle, songArtist, audioPath) { // this plays the song

    songNameDisplay.innerText = `${songArtist} - ${songTitle}`; // shows "name - song"

    audioPlayer.src = `${audioPath}`;
    bottomPlayer.classList.add('show-player');

    audioPlayer.play();
}

// close the bottom player when closed
closeButton.addEventListener('click', () => {
    audioPlayer.pause();
    bottomPlayer.classList.remove('show-player');
});


// this smartly returns the timestamp in a song to raw seconds
// this is equal to python's  `minutes, seconds = map(int, time_string.split(':'))`
function durationToSeconds(timestring) {
    const [min, sec] = timestring.split(':').map(Number);
    return (min * 60 + sec);
}


const songs = [
    {
        id: 1,
        title: "Gimme a Big Beat",
        artist: "kors k",
        genre: "EDM",
        duration: "2:05",
        year: 2014,
        language: "English",
        img: "images/gimme-a-big-beat.webp",
        audio: "audio/gimme-a-big-beat.mp3"
    },
    {
        id: 2,
        title: "more more more",
        artist: "capsule",
        genre: "Electropop",
        duration: "4:12",
        year: 2008,
        language: "Japanese",
        img: "images/more-more-more.webp",
        audio: "audio/more-more-more.mp3"
    },
    {
        id: 3,
        title: "only my railgun",
        artist: "fripSide",
        genre: "Electropop",
        duration: "1:41",
        year: 2009,
        language: "Japanese",
        img: "images/only-my-railgun.webp",
        audio: "audio/only-my-railgun.mp3"
    },
    {
        id: 4,
        title: "Votum stellarum",
        artist: "iconoclasm",
        genre: "Trance",
        duration: "2:43",
        year: 2004,
        language: "Instrumental",
        img: "images/votum-stellarum.webp",
        audio: "audio/votum-stellarum.mp3"
    },
    {
        id: 5,
        title: "Electric Dance System Music",
        artist: "U1 overground",
        genre: "EDM",
        duration: "1:51",
        year: 2013,
        language: "English",
        img: "images/electric-dance-system-music.webp",
        audio: "audio/electric-dance-system-music.mp3"
    },
    {
        id: 6,
        title: "Astrogazer",
        artist: "DJ TOTTO",
        genre: "EDM",
        duration: "1:50",
        year: 2014,
        language: "Instrumental",
        img: "images/astrogazer.webp",
        audio: "audio/astrogazer.mp3"
    },
    {
        id: 7,
        title: "Squall",
        artist: "Srav3R",
        genre: "Hardcore",
        duration: "3:34",
        year: 2017,
        language: "Instrumental",
        img: "images/squall.webp",
        audio: "audio/squall.mp3"
    },
    {
        id: 8,
        title: "Alive in my Soul",
        artist: "aran",
        genre: "House",
        duration: "2:03",
        year: 2017,
        language: "English",
        img: "images/alive-in-my-soul.webp",
        audio: "audio/alive-in-my-soul.mp3"
    },
    {
        id: 9,
        title: "Daisuke",
        artist: "Y&Co.",
        genre: "House",
        duration: "2:11",
        year: 2004,
        language: "Japanese",
        img: "images/daisuke.webp",
        audio: "audio/daisuke.mp3"
    },
    {
        id: 10,
        title: "Butterfly Twist",
        artist: "Yooh",
        genre: "House",
        duration: "2:06",
        year: 2017,
        language: "Instrumental",
        img: "images/butterfly-twist.webp",
        audio: "audio/butterfly-twist.mp3"
    },
    {
        id: 11,
        title: "HIGH VOLTAGE",
        artist: "Yuta Imai",
        genre: "Hardstyle",
        duration: "2:07",
        year: 2020,
        language: "Instrumental",
        img: "images/high-voltage.webp",
        audio: "audio/high-voltage.mp3"
    },
    {
        id: 12,
        title: "MIRACLE MEETS",
        artist: "Lucky Vacuum",
        genre: "Trance",
        duration: "2:07",
        year: 2011,
        language: "Instrumental",
        img: "images/miracle-meets.webp",
        audio: "audio/miracle-meets.mp3"
    },
    {
        id: 13,
        title: "VELVET",
        artist: "Massive New Krew",
        genre: "Hardstyle",
        duration: "2:05",
        year: 2016,
        language: "Instrumental",
        img: "images/velvet.webp",
        audio: "audio/velvet.mp3"
    },
    {
        id: 14,
        title: "TECHNOPOLIS 2085",
        artist: "PRASTIK DANCEFLOOR",
        genre: "EDM",
        duration: "2:17",
        year: 2015,
        language: "Instrumental",
        img: "images/technopolis-2085.webp",
        audio: "audio/technopolis-2085.mp3"
    },
    {
        id: 15,
        title: "Schwarzschild",
        artist: "Tsukasa",
        genre: "Artcore",
        duration: "2:03",
        year: 2010,
        language: "Instrumental",
        img: "images/schwarzschild.webp",
        audio: "audio/schwarzschild.mp3"
    },
    {
        id: 16,
        title: "PUT YOUR HANDS UP",
        artist: "RiRaN",
        genre: "Hardcore",
        duration: "2:19",
        year: 2018,
        language: "English",
        img: "images/put-your-hands-up.webp",
        audio: "audio/put-your-hands-up.mp3"
    },
    {
        id: 17,
        title: "Corruption",
        artist: "3R2",
        genre: "Hardcore",
        duration: "2:26",
        year: 2018,
        language: "Instrumental",
        img: "images/corruption.webp",
        audio: "audio/corruption.mp3"
    },
    {
        id: 18,
        title: "Caramel Mocha",
        artist: "KO3",
        genre: "Hardcore",
        duration: "2:04",
        year: 2019,
        language: "Instrumental",
        img: "images/caramel-mocha.webp",
        audio: "audio/caramel-mocha.mp3"
    },
    {
        id: 19,
        title: "FLOWER",
        artist: "DJ YOSHITAKA",
        genre: "Trance",
        duration: "2:04",
        year: 2011,
        language: "Instrumental",
        img: "images/flower.webp",
        audio: "audio/flower.mp3"
    },
    {
        id: 20,
        title: "freaky freak",
        artist: "kamome sano",
        genre: "House",
        duration: "1:58",
        year: 2016,
        language: "Instrumental",
        img: "images/freaky-freak.webp",
        audio: "audio/freaky-freak.mp3"
    },
    {
        id: 21,
        title: "Valanga",
        artist: "DJ TOTTO",
        genre: "Artcore",
        duration: "1:56",
        year: 2013,
        language: "Instrumental",
        img: "images/valanga.webp",
        audio: "audio/valanga.mp3"
    },
    {
        id: 22,
        title: "Loneliness of spring",
        artist: "inabakumori",
        genre: "Indie Pop",
        duration: "3:08",
        year: 2021,
        language: "Japanese",
        img: "images/loneliness-of-spring.webp",
        audio: "audio/loneliness-of-spring.mp3"
    },
    {
        id: 23,
        title: "shoujo rei",
        artist: "mikitoP",
        genre: "Indie Pop",
        duration: "4:49",
        year: 2018,
        language: "Japanese",
        img: "images/shoujo-rei.webp",
        audio: "audio/shoujo-rei.mp3"
    },
    {
        id: 24,
        title: "goodbye chainsaw",
        artist: "WADAKATEAKI",
        genre: "Indie Pop",
        duration: "4:10",
        year: 2012,
        language: "Japanese",
        img: "images/goodbye-chainsaw.webp",
        audio: "audio/goodbye-chainsaw.mp3"
    },
    {
        id: 25,
        title: "mosi mosi?",
        artist: "sasane",
        genre: "Indie Pop",
        duration: "2:43",
        year: 2026,
        language: "Korean",
        img: "images/mosi-mosi.webp",
        audio: "audio/mosi-mosi.mp3"
    },
    {
        id: 26,
        title: "Yoiyoi Kokon",
        artist: "Reol",
        genre: "Electropop",
        duration: "4:17",
        year: 2016,
        language: "Japanese",
        img: "images/yoiyoi-kokon.webp",
        audio: "audio/yoiyoi-kokon.mp3"
    },
    {
        id: 27,
        title: "Proi Proi",
        artist: "HOYO-MiX",
        genre: "Artcore",
        duration: "3:58",
        year: 2025,
        language: "English",
        img: "images/proi-proi.webp",
        audio: "audio/proi-proi.mp3"
    },
    {
        id: 28,
        title: "NENTEN",
        artist: "Mili",
        genre: "Artcore",
        duration: "3:12",
        year: 2016,
        language: "Chinese",
        img: "images/nenten.webp",
        audio: "audio/nenten.mp3"
    },
    {
        id: 29,
        title: "Super Idol",
        artist: "Tian Yiming",
        genre: "Indie Pop",
        duration: "3:13",
        year: 2021,
        language: "Chinese",
        img: "images/super-idol.webp",
        audio: "audio/super-idol.mp3"
    },
    {
        id: 30,
        title: "Shadow",
        artist: "Lexie Liu",
        genre: "Electropop",
        duration: "3:56",
        year: 2021,
        language: "Chinese",
        img: "images/shadow.webp",
        audio: "audio/shadow.mp3"
    },
    {
        id: 31,
        title: "KILL THIS LOVE",
        artist: "BLACKPINK",
        genre: "EDM",
        duration: "3:13",
        year: 2019,
        language: "Korean",
        img: "images/kill-this-love.webp",
        audio: "audio/kill-this-love.mp3"
    }
];

searchBox.addEventListener('input', applyFiltersAndSort);
genreSelect.addEventListener('change', applyFiltersAndSort);
sortBy.addEventListener('change', applyFiltersAndSort);

applyFiltersAndSort(); // this makes everything WORK

/*
Author: Vimesh
Description: uses DOM manipulation to add 32 different unique song cards
search bar to search for song titles and artists based updated live
function to only show specific genres
function to sort by title, artist, genre, duration, release year, and language
helper function that parses a duration string into raw seconds
audio player state handling to dynamically start or end a song
 */


// all constant declarations for easy use

const bottomPlayer = document.getElementById('bottom-player');
const closeButton = document.getElementById('close-player-button');
const audioPlayer = document.getElementById('main-audio');

const songNameDisplay = document.getElementById('song-name');
const songGrid = document.getElementById('song-list');

const searchBox = document.getElementById('search-box');
const genreSelect = document.getElementById('genre-select');
const sortBy = document.getElementById('sort-by');


// filters and sorts songs
function applyFiltersAndSort() {

    const searchTerm = searchBox.value.toLowerCase().trim();
    const selectedGenre = genreSelect.value;
    const selectedSortBy = sortBy.value;

    // shallow copy to avoid corrupting the original global arraylist
    // https://www.w3schools.com/react/react_es6_spread.asp
    let result = [...songs]; // java equivalent is `new ArrayList<>(songs);`


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
        // converts timestamp to raw seconds, then compares
        if (selectedSortBy === 'duration') {
            return durationToSeconds(a.duration) -
                durationToSeconds(b.duration);
        } // if negative result, print song a, if not, print song b.

        if (selectedSortBy === 'year') {
            return a.year - b.year;
        } // this is the same as the duration thing


        //this code down here does 4 things at once
        // it sorts by title, artist, genre, and language all at once
        // what it does is compare the alphabetical order of the selection in song title
        // https://www.w3schools.com/Jsref/jsref_localecompare.asp
        return a[selectedSortBy].localeCompare(b[selectedSortBy]);
    })


    // render the result once it ends
    renderCatalogue(result);

}

// clears current grid, then inject new song card html data into the DOM
// it runs every single update, it will run multiple times when using the search bar
function renderCatalogue(songsToDisplay = songs) {
    songGrid.innerHTML = ''; // clear the grid before doing anything


    songsToDisplay.forEach(song => { // prints to the grid for every song it has
        // each song card uses the appropriate <article> header and fully complies with
        // WCAG accessibility standards for screen readers
        let cardHTML = `
                <article class="song-card">

                    <div class="album-art">
                        <img src="${song.img}" alt="${song.title} by ${song.artist} album cover">

                        <button class="play-button" onclick="playSong('${song.title}', '${song.artist}', '${song.audio}')"
                        aria-label="Play ${song.title} by ${song.artist}">▶</button>
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

// this function displays the selected song title and artist, and plays the selected song
// it also shows the bottom player so the user can easily pause, seek, change volume, or close
// the player entirely, which also ends the song.
//
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
// this is equal to python's `minutes, seconds = map(int, time_string.split(':'))`
function durationToSeconds(timestring) {
    const [min, sec] = timestring.split(':').map(Number);
    return (min * 60 + sec);
}

// this is a huge array that stores all the song data as a dictionary, something like JSON
// as per JS, this is an array of object literals
// as per python, this is a list of dictionary
// as per java, this is an arraylist of hashmaps
// the id is for tracking purposes and is not used
// the titles are all standard characters with foreign titles translated into english
// same for the artist and language
// the genre is mostly accurate with some specific genres broadened to fit a general spectrum
// the duration is visual and is also pulled to be converted into raw seconds
// the year is stored as an integer
// the img and audio files are stored locally

// 32 songs were chosen even though the minimum was 8 because the list dynamically expands
// and many songs helps illustrate that the system works well with no issues
// there is more code at the very bottom of this
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
        audio: "audio/gimme-a-big-beat.opus"
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
        audio: "audio/more-more-more.opus"
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
        audio: "audio/only-my-railgun.opus"
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
        audio: "audio/votum-stellarum.opus"
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
        audio: "audio/electric-dance-system-music.opus"
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
        audio: "audio/astrogazer.opus"
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
        audio: "audio/squall.opus"
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
        audio: "audio/alive-in-my-soul.opus"
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
        audio: "audio/daisuke.opus"
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
        audio: "audio/butterfly-twist.opus"
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
        audio: "audio/high-voltage.opus"
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
        audio: "audio/miracle-meets.opus"
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
        audio: "audio/velvet.opus"
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
        audio: "audio/technopolis-2085.opus"
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
        audio: "audio/schwarzschild.opus"
    },
    {
        id: 16,
        title: "PUT YOUR HANDS UP",
        artist: "RiraN",
        genre: "Hardcore",
        duration: "2:19",
        year: 2018,
        language: "English",
        img: "images/put-your-hands-up.webp",
        audio: "audio/put-your-hands-up.opus"
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
        audio: "audio/corruption.opus"
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
        audio: "audio/caramel-mocha.opus"
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
        audio: "audio/flower.opus"
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
        audio: "audio/freaky-freak.opus"
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
        audio: "audio/valanga.opus"
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
        audio: "audio/loneliness-of-spring.opus"
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
        audio: "audio/shoujo-rei.opus"
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
        audio: "audio/goodbye-chainsaw.opus"
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
        audio: "audio/mosi-mosi.opus"
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
        audio: "audio/yoiyoi-kokon.opus"
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
        audio: "audio/proi-proi.opus"
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
        audio: "audio/nenten.opus"
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
        audio: "audio/super-idol.opus"
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
        audio: "audio/shadow.opus"
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
        audio: "audio/kill-this-love.opus"
    },
    {
        id: 32,
        title: "Gangnam Style",
        artist: "PSY",
        genre: "Electropop",
        duration: "3:39",
        year: 2012,
        language: "Korean",
        img: "images/gangnam-style.webp",
        audio: "audio/gangnam-style.opus"
    }
];


// reruns filters and sort-by functions when an input is detected
searchBox.addEventListener('input', applyFiltersAndSort);
genreSelect.addEventListener('change', applyFiltersAndSort);
sortBy.addEventListener('change', applyFiltersAndSort);

// finally, this line makes everything display
applyFiltersAndSort();

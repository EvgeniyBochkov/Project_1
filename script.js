"use strict";

let numberOfFilms;

function start() {
    
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
    }
}

start();

const personalmovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов', ' '),
              b = prompt ('На сколько оцените его?', ' ');
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalmovieDB.movies[a] = b;
             console.log('Done');
             } else {
             console.log('error');
            num--;
             }
    }
}

// rememberMyFilms ();

function detectPersonalLevel (){
    if (personalmovieDB.count <10) {
        console.log("Просмотрено довольно мало фильмов");
        
        } else if (personalmovieDB.count >= 10 && personalmovieDB.count < 30) {
        
        console.log ('Вы классический зритель');
        
        } else if (personalmovieDB.count >= 30) {
        
        console.log('Вы киноман');
        } else {
        console.log('Ошибка');
        
        }
}

// detectPersonalLevel ();

function showMyDB (hidden) {
        if (!hidden) {
            console.log(personalmovieDB);

        }
}

showMyDB(personalmovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++ ) {
                personalmovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}
    writeYourGenres ();
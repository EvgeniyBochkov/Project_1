"use strict";

const personalmovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
    
        personalmovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalmovieDB.count == '' || personalmovieDB.count == null || isNaN(numberOfFilms)) {
            personalmovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function () {
        if (personalmovieDB.count <10) {
            console.log("Просмотрено довольно мало фильмов");
            
            } else if (personalmovieDB.count >= 10 && personalmovieDB.count < 30) {
            
            console.log ('Вы классический зритель');
            
            } else if (personalmovieDB.count >= 30) {
            
            console.log('Вы киноман');
            } else {
            console.log('Ошибка');
            
            }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalmovieDB);

        }
},
toggleVisibleMyDB: function () {
    if (personalmovieDB.privat) {
        personalmovieDB.privat = false; 
    } else { 
        personalmovieDB.privat = true;
    }
},
writeYourGenres: function () {
    for (let i = 1; i < 2; i++ ) {
        // let genre = prompt (`Ваш любимый жанр под номером ${i}`);

        // if(genre === ''||genre == null) {
        //     console.log('Вы ввелди некорректные данные или не ввели их вообще')
        //     i--;
        // } else {
        //     personalmovieDB.genres[i-1] = genre;
        let genres = prompt (`Введите ваши любимые жанры через запятую`);

        if (genres === ''||genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще')
                i--;
            } else {
                personalmovieDB.genres = genres.split (', ');
                personalmovieDB.genres.sort();

        }
       
              personalmovieDB.genres.forEach((item, i)=> {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
              });
    }
}
   
};










 
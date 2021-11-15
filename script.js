const numberofFilms = +prompt('Сколько фильмов мы посмотрели?', ' ');

const personalmovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов'),
    b = prompt('На сколько оцените его?'),
    c = prompt('Один из последних просмотренных фильмов'),
    d = prompt('На сколько оцените его?');

personalmovieDB.movies[a] = b;   
personalmovieDB.movies[c] = d; 

console.log(personalmovieDB);
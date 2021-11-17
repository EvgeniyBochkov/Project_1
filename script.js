"use strict";

const numberofFilms = +prompt('Сколько фильмов мы посмотрели?', ' ');

const personalmovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов'),
//     b = prompt('На сколько оцените его?'),
//     c = prompt('Один из последних просмотренных фильмов'),
//     d = prompt('На сколько оцените его?');

// personalmovieDB.movies[a] = b;   
// personalmovieDB.movies[c] = d; 


 let num = 0;
 do  {
         const a = prompt ('Один из последних просмотренных фильмов', ' '),
              b = prompt ('На сколько оцените его?', ' ');
    

 if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalmovieDB[a] = b;
         console.log('Done')
         num++;
     } else {
         console.log('error');
        num--;
    }
}
while (num < 2);

if (personalmovieDB.count <10) {
console.log("Просмотрено довольно мало фильмов");

} else if (personalmovieDB.count >= 10 && personalmovieDB.count < 30) {

console.log ('Вы классический зритель');

} else if (personalmovieDB.count >= 30) {

console.log('Вы киноман');
} else {
console.log('Ошибка');

}
console.log(personalmovieDB);

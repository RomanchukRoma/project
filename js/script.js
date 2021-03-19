/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
},
    rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один із останніх переглянутих фільмів?', ''),
              b = prompt('На скільки оціните його?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
},

detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто надто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви звичайний переглядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else {
        console.log("Помилка");
    }
},

showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
},

toggleVisibleMyDB: function() {
    if(personalMovieDB.privat){
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
},

writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
        let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

        if (genre === '' || genre == null) {
            console.log('Ви ввели некоректні дані або не ввели їх зовсім');
            i--;
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
    }

    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};

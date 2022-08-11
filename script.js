const numberOfFilms = +prompt('кіко?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt('який?', ''),
      b = prompt('Файний?', ''),
      c = prompt('який?', ''),
      d = prompt('Файний?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
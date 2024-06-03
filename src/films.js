// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((movies) => {
    return movies.director;
  });
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movies) => {
    return movies.director == director;
  });
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // go to director
    // make sum of scores and   
    // count movies 
  // calculate the average
  let moviesOfDirector = array.filter((movies) => {
    return movies.director == director;
  });
  console.log(moviesOfDirector);
  let numMovies = moviesOfDirector.length;
  
  let scoreSum = 0;
   
  moviesOfDirector.forEach((movie) => {
      scoreSum += movie.score;
    });

  let result = Number(scoreSum / numMovies);
  return parseFloat(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let abc = array.map(movie => movie.title).sort().slice(0,20);
  return abc;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arr = [...array];
  let pelis = arr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return pelis;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let pelis = array.filter(movies => {
    return movies.genre.includes = genre;
  });
  
  console.log(pelis);
  let numMovies = pelis.length;
  
  let scoreSum = 0;
   
  pelis.forEach((movie) => {
      scoreSum += movie.score;
    });

  let resultado = parseFloat(scoreSum / numMovies);
  
  return resultado;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(item => ({
    ...item,
    duration: convertHours(item.duration)
  }));

  let convertHours = (str, index, arr) => {
    let [hours, minutesmin] = str.split('');
    let [minutes] = minutesmin.split('m');
    // cut the minutes from the minutes
    return (parseFloat(hours) * 60) + (parseFloat(minutes));
  }
  console.log(result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

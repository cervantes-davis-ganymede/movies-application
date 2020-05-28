// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('Augustine');
//
// /**
//  * require style imports
//  */



// $( document ).ajaxStart(function() {
//     $( "#loading" ).show();
// });

const {getMovies, addMovies, editMovies, deleteMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
addMovies().then((movies) => {
  console.log('here is an added movie');
  movies.forEach(({title, rating, id}) => {
    console.log('id${id} - ${title} - rating: ${rating}');
  })
})
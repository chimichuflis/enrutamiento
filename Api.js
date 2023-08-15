const movies = [
  {
    id: 1,
    year: 2021,
    title: "Rápido y Furioso 20",
    released: "2021-08-01",
    genre: "Acción",
    director: "Pepe",
  },
  {
    id: 2,
    year: 2019,
    title: "Scary Movie 6",
    released: "2019-05-15",
    genre: "Comedia",
    director: "Lolo",
  },
  {
    id: 3,
    year: 2020,
    title: "Bajo la tormenta",
    released: "2020-11-30",
    genre: "Drama",
    director: "Titi",
  },
];

export const API = {
  getMovies: () => {
    return movies;
  },
  getMovie: (id) => {
    const movie = movies.filter((x) => x.id === id)[0];
    console.log(movie);
    return movie;
  },
};

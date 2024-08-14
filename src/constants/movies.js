const suggestedMovies = [
  {
    Title: "The Theory of Everything",
    Year: "2014",
    imdbID: "tt2980516",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg",
  },
  {
    Title: "Scent of a Woman",
    Year: "1992",
    imdbID: "tt0105323",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTM3ZjA3NTctZThkYy00ODYyLTk2ZjItZmE0MmZlMTk3YjQwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
  {
    Title: "The Green Mile",
    Year: "1999",
    imdbID: "tt0120689",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
  },
  {
    Title: "Vikings",
    Year: "2013–2020",
    imdbID: "tt2306299",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
  },
  {
    Title: "A Man Called Otto",
    Year: "2022",
    imdbID: "tt7405458",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
  },
  {
    Title: "Se7en",
    Year: "1995",
    imdbID: "tt0114369",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "Saving Private Ryan",
    Year: "1998",
    imdbID: "tt0120815",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
  },
  {
    Title: "Home Alone",
    Year: "1990",
    imdbID: "tt0099785",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "The Devil's Advocate",
    Year: "1997",
    imdbID: "tt0118971",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2M2MDJhMDgtMmJkYy00MTgzLTkyZTktODM5NzE1MWUyNDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
  {
    Title: "Home Alone 2: Lost in New York",
    Year: "1992",
    imdbID: "tt0104431",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Dumb and Dumber",
    Year: "1994",
    imdbID: "tt0109686",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Rambo: Last Blood",
    Year: "2019",
    imdbID: "tt1206885",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTAxZWM2OTgtOTQzOC00ZTI5LTgyYjktZTRhYWM4YWQxNWI0XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg",
  },
  {
    Title: "The Expendables",
    Year: "2010",
    imdbID: "tt1320253",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SX300.jpg",
  },
  {
    Title: "The Danish Girl",
    Year: "2015",
    imdbID: "tt0810819",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA0NjA4NjE2Nl5BMl5BanBnXkFtZTgwNzIxNTY2NjE@._V1_SX300.jpg",
  },
  {
    Title: "The Expendables 2",
    Year: "2012",
    imdbID: "tt1764651",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZThhYjgzYTMtMjdjOC00ZmM4LTg0OWYtNmE3NWNhNDAxYzk4XkEyXkFqcGdeQXVyMzQ4OTY2ODg@._V1_SX300.jpg",
  },
  {
    Title: "John Wick: Chapter 2",
    Year: "2017",
    imdbID: "tt4425200",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg",
  },
  {
    Title: "John Wick: Chapter 3 - Parabellum",
    Year: "2019",
    imdbID: "tt6146586",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
  },
  {
    Title: "The Expendables 3",
    Year: "2014",
    imdbID: "tt2333784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODU5ODMyMzg2MV5BMl5BanBnXkFtZTgwMTA2MTcxMjE@._V1_SX300.jpg",
  },
  {
    Title: "Atonement",
    Year: "2007",
    imdbID: "tt0783233",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGRiYjE0YzItMzk3Zi00ZmYwLWJjNDktYTAwYjIwMjIxYzM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Dumb and Dumber To",
    Year: "2014",
    imdbID: "tt2096672",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYxMzA0MzAyMF5BMl5BanBnXkFtZTgwMjMyNjcwMjE@._V1_SX300.jpg",
  },
  {
    Title: "The Salesman",
    Year: "2016",
    imdbID: "tt5186714",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg2MTc0ODEwOV5BMl5BanBnXkFtZTgwNDAyOTY1MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Magnificent Seven",
    Year: "2016",
    imdbID: "tt2404435",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SX300.jpg",
  },
  {
    Title: "The Mechanic",
    Year: "2011",
    imdbID: "tt0472399",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzJhYjE3NjctMGUzMC00YjVhLTkzYzAtNzhmMWU0ZDBlYzJmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_SX300.jpg",
  },
  {
    Title:
      "The Voice of Iran: Mohammad Reza Shajarian - The Copenhagen Concert 2002",
    Year: "2003",
    imdbID: "tt0458199",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGU0NzdlODEtY2ViYS00MWY1LTk2ZTUtYTE0MTU1NjA5NGYyXkEyXkFqcGdeQXVyMTk0ODE3Mzc@._V1_SX300.jpg",
  },
  {
    Title: "Squid Game",
    Year: "2021–",
    imdbID: "tt10919420",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
  },
  {
    Title: "John Wick",
    Year: "2014",
    imdbID: "tt2911666",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  },
  {
    Title: "Peaky Blinders",
    Year: "2013–2022",
    imdbID: "tt2442560",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: No Way Home",
    Year: "2021",
    imdbID: "tt10872600",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  },
  {
    Title: "Law of Tehran",
    Year: "2019",
    imdbID: "tt9817070",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGM1ZWQzOTgtMjNmMC00MDIxLWE3MmQtZDg1NWI0NzQ4NDZlXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_SX300.jpg",
  },
  {
    Title: "Breaking Bad",
    Year: "2008–2013",
    imdbID: "tt0903747",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
  },
];

export { suggestedMovies };

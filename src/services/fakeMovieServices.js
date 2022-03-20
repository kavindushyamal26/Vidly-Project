import * as genersAPI from "./fakeGenreServices";

const movies = [
  {
    _id: "5b21ca001",
    title: "AAA",
    genre: { _id: "6b21ca001", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "Sun Mar 20 2022 12:31:13 GMT+0530",
    liked: true,
  },
  {
    _id: "5b21ca002",
    title: "BBB",
    genre: { _id: "6b21ca002", name: "Comedy" },
    numberInStock: 3,
    dailyRentalRate: 2.2,
    publishDate: "Sun Mar 20 2022 12:31:13 GMT+0530",
  },
  {
    _id: "5b21ca003",
    title: "CCC",
    genre: { _id: "6b21ca003", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 1.5,
    publishDate: "Sun Mar 20 2022 12:31:13 GMT+0530",
  },
];

export function getMovies() {
  return movies;
}

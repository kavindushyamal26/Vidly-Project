export const genres = [
  { _id: "6b21ca001", name: "Action" },
  { _id: "6b21ca002", name: "Comedy" },
  { _id: "6b21ca003", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}

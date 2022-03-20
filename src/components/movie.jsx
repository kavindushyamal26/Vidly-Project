import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieServices";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <>
        <h2 className="my-3">Movies</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <th scope="row">{m.title}</th>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    //   onClick={() => this.handleUpdate(p)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;

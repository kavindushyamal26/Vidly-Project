import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieServices";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  //   likeeffectt() {
  //     let likeclass = "mr-2 fa fa-heart";
  //     if (!this.props.counter.like) likeclass += "-o";
  //     return likeclass;
  //   }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    //console.log("like clicked", counter);
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0)
      return (
        <h5 style={{ color: "GrayText" }} className="my-4">
          There are NO movies in the DB
        </h5>
      );

    return (
      <>
        <h3 className="mt-3">Movies</h3>
        <h6 style={{ color: "GrayText" }} className="mb-4">
          Showing {this.state.movies.length} movies in the DB
        </h6>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col"></th>
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
                  <Like liked={m.liked} onClick={() => this.handleLike(m)} />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(m)}
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

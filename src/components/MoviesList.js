import React, { Component } from 'react';
import { Movie } from './Movie';
import PropTypes from 'prop-types';

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props
        return (
            <div className="MovieList">
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className="MovieList-item">
                                <Movie
                                    id={movie.imdbID}
                                    year={movie.Year}
                                    title={movie.Title}
                                    poster={movie.Poster}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
} 

import React, { Component } from 'react';

const API_KEY = 'bde13a73';

export class SearchForm extends Component {
    state = { inputMovie: '' }

    _handlerChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handlerSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = '0' } = results;
                this.props.onResults(Search);
            })
    }

    render() {
        return (
            <form onSubmit={this._handlerSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            onChange={this._handlerChange}
                            className="input"
                            type="text"
                            placeholder="Unesite naziv filma..."
                        />
                    </div>
                    <div class="control">
                        <button class="button">
                            Traži
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
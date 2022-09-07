import React from "react";

class SearchBar extends React.Component {
    state = { term: '' }
    onInputChange = (e) => {
        this.setState({ term: e.target.value })

    }
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term)

    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><h1> Video  Search  App  by  Abhishek </h1> </label><br />
                        <input
                            value={this.state.term}
                            onChange={this.onInputChange}
                            type="text" />
                    </div>
                </form>

            </div>
        )
    }

}

export default SearchBar
import React, { Component } from 'react'

class Searchbar extends Component {

  render() {
    return (
      <div>
        <input type="text" onChange={this.props.change} name="searchBar" className="input" placeholder="Search..." value={this.props.searchBar}/>  
        <button type="submit" className="btn btn-primary" onClick={this.props.search}>Search</button>
        <button onClick={this.props.reset} className="btn btn-warning">reset search</button>
      </div>
    )
  }
}

export default Searchbar;

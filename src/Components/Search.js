import React, { Component } from 'react';

class Search extends Component {

  removeDuplicates = ( arr, prop ) => {
    let obj = {};
    return Object.keys(arr.reduce((prev, next) => {
      if(!obj[next[prop]]) obj[next[prop]] = next; 
      return obj;
    }, obj)).map((i) => obj[i]);
  }

  render() {
    const { name, list, searchTerm, handleChangeText } = this.props;
    const results = [];
    let searchForm;
    const placeholder = `Search by ${name}`;
    const searchClass = 'search__form ' + name.split(' ').join('_');
   
    if(list){
      const newList = this.removeDuplicates(list, name.toLowerCase());
      const listValues = Object.values(newList)
      this.listCount = Object.keys(listValues).length;
      
      Object.keys(listValues).forEach((k) => {
        const { song, artist, album } =  listValues[k];
        let target;
        if ( name.toLowerCase() === 'artist' ) {
          target = artist;
        } else if ( name.toLowerCase() === 'song' ) {
          target = song;
        } else if ( name.toLowerCase() === 'album' ) {
          target = album;
        }
        if(target !== ''){
          results.push(<li key={target}>{target}</li>);
        }
      });
    }

    return (
        <section className="search">
        <header>
          <h3>{name}</h3>
          <form className={searchClass} onSubmit={this.props.submitSearch}>
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleChangeText}
            />
            <button type="submit" className="btn-search">Search</button>
          </form>
        </header>
          <div className="search__results">
            <ul className="search__results--list">
              {results}
            </ul>
          </div>
      </section>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import Search from './Components/Search';
import NowPlaying from './Components/NowPlaying';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: null,
      artists: null,
      albums: null,
      searchTerm: undefined
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    fetch('./UITestData.json')
    .then(res => res.json())
    .then(data => {
      const songs = Object.keys(data.songs).map(i => data.songs[i])
      const songsAlpha = [...songs].sort((a, b) => {
        if (a.song.toLowerCase() < b.song.toLowerCase()) return -1;
        if (a.song.toLowerCase() > b.song.toLowerCase()) return 1;
        return 0;
      });
      const artistsAlpha = [...songs].sort((a, b) => {
        if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
        if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
        return 0;
      });
      const albumsAlpha = [...songs].sort((a, b) => {
        if (a.album.toLowerCase() < b.album.toLowerCase()) return -1;
        if (a.album.toLowerCase() > b.album.toLowerCase()) return 1;
        return 0;
      });

      this.setState(() => ({
        songs: songsAlpha,
        artists: artistsAlpha,
        albums: albumsAlpha
      })); 
    })
  }

  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name.toLowerCase()] = e.target.value;
    this.setState(newState);
  }

  submitSearch = (e) => {
    e.preventDefault();
    console.log("I'm A Search")
    console.log(e.target.name)
  }

  render() {  
    
    return (
      <React.Fragment>
        <Header />
        <main>
          <Search
            name='Artist'
            searchTerm={this.state.searchTerm}
            list={this.state.artists}
            handleChangeText={this.onChangeText}
            submitSearch={this.submitSearch}
            />
          <Search
            name='Song'
            searchTerm={this.state.searchTerm}
            list={this.state.songs}
            handleChangeText={this.onChangeText}
            submitSearch={this.submitSearch}
          />
          <Search
            name='Album'
            searchTerm={this.state.searchTerm}
            list={this.state.albums}
            handleChangeText={this.onChangeText}
            submitSearch={this.submitSearch}
          />
          <NowPlaying
            name='Now Playing'
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

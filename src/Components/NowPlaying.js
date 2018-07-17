import React, { Component } from 'react';

class NowPlaying extends Component {
  render() {
    return (
        <section className="search">
        <header>
          <h3>{this.props.name}</h3>
        </header>
          <div className="now-playing">
         
            <img className="cover" src="images/PYT_album_cover.jpg" />
            <div>
                <img className="ad" src="images/ad_window.png" />
                <img className="controls" src="images/music_controls.png" />
            </div>
            </div>
         
      </section>
    );
  }
}

export default NowPlaying;
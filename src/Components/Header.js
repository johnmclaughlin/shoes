import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {     
    return (
        <header>
        <img className="logo" src="images/logo.png" />
        <img className="logo__st" src="images/shoetunes_logo.png" />
        <div className="header__buttons">
            <button type="submit" className="btn-top">Clear Searches</button>
            <button type="submit" className="btn-top">About</button>
        </div>
      </header>
    );
  }
}

export default Header;
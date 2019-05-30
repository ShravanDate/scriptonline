import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <div className="headerSection">
      <a href="javascript:;" className="logo"></a>
      <div className="share">
        <ul>
          <li>Share it on</li>
          <li><a href="javascript:;" className="icons facebook"></a></li>
          <li><a href="javascript:;" className="icons twitter"></a></li>
          <li><a href="javascript:;" className="icons whatsApp"></a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Header;

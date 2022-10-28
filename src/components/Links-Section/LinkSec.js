import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/linksec.scss';

const LinkSec = () => {
  return (
    <>
      <section className="links_section">
        <ul>
          <li id="twitter_link"><Link to={{pathname:}} Twitter Link</li>
          <li id="btn_zuri">Zuri Team</li>
          <li id="books">Zuri Books</li>
          <li id="book_python">Python Books</li>
          <li id="pitch">Background Check for Coders</li>
          <li id="book_design">Design Books</li>
        </ul>
      </section>
    </>
  );
}

export default LinkSec
import React from "react";
import "../Styles/linksec.scss";

const LinkSec = () => {
  return (
    <>
      <section className="links_section">
        <ul>
          <li id="twitter_link">
            <a
              href="https://twitter.com/OpusunjuMoses"
              target="_blank"
              rel="noreferrer"
            >
              Twitter Link
            </a>
          </li>
          <li>
            <a
              id="btn_zuri"
              href="https://training.zuri.team/"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Team
            </a>
          </li>
          <li>
            <a
              id="books"
              href="https://books.zuri.team/"
              target="_blank"
              rel="noreferrer"
            >
              Zuri Books
            </a>
          </li>
          <li>
            <a
              href="https://books.zuri.team/"
              id="book_python"
              target="_blank"
              rel="noreferrer"
            >
              Python Books
            </a>
          </li>
          <li>
            <a
              href="https://background.zuri.team/"
              id="pitch"
              target="_blank"
              rel="noreferrer"
            >
              Background Check for Coders
            </a>
          </li>
          <li>
            <a
              href="https://books.zuri.team/design-rules"
              id="book_design"
              target="_blank"
              rel="noreferrer"
            >
              Design Books
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default LinkSec;

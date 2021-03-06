import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Link } from "react-router-dom";
import clientFetch from '../../util/fetch'
import { connect } from "react-redux";
import businessImg from "../../assets/home/business.jpg"
import Mp3 from "../../assets/starSky.mp3";
import "./index.less";

function ListPageContainer(props) {

  return (
    <div className="page-list">
      <header>
        <ul className="navbar">
          <Link to={`/list`}>Home</Link>
          <Link to={`/posts`}>Posts</Link>
        </ul>
      </header>
      <article>
        <h1>News</h1>
        <section>
          <div className="img-container left column">
            <img src={businessImg} alt="A person reading the business section of a newspaper" />
          </div>
          <div className="right column">
            <h2 className="headline">Headline</h2>
            <p className="content">
              I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
              feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
              everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
              fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
              st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
            </p>
          </div>
        </section>
      </article>
      <div className="list">
        <h2>引入其他种类的资源</h2>
        <div className="mp3-container">
          <audio src={Mp3} controls />
        </div>
      </div>

      <footer>
        <a href="#" className="footer-link">Twitter</a>
        <a href="#" className="footer-link">Facebook</a>
        <a href="#" className="footer-link">Google+</a>
        <a href="#" className="footer-link">Digg</a>
      </footer>

    </div>
  );
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    actions: {},
  })
)(ListPageContainer);


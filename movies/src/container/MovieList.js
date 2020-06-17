import React, { Component } from "react";
import axios from "axios";
import "./MovieList.css";

export default class MovieList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      tab1: true,
      tab2: false,
      movieList: [],
    };
  }

  search(e) {
    console.log("e", this.state);
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.movieName}&y=${this.state.movieYear}&apikey=5ca2103`
      )
      .then((res) => {
        this.setState({ movieList: res.data.Search });
        console.log("res", res);
      });
  }

  render() {
    console.log("data", this.state.movieList);
    return (
      <div>
        <div className="tabBox">
          <div className="tabRow">
            <div
              className="tab"
              onClick={() => {
                this.setState({ tab1: true, tab2: false });
              }}
            >
              Movies List
            </div>
            <div
              className="tab"
              onClick={() => {
                this.setState({ tab1: false, tab2: true });
              }}
            >
              Movies Posters
            </div>
          </div>
        </div>
        {this.state.tab1 && (
          <div>
            <div className="tabRow">
              <input
                className="search"
                placeholder="Enter movie name"
                onChange={(e) => {
                  this.setState({ movieName: e.target.value });
                }}
              />
              <input
                className="search"
                placeholder="Enter movie name"
                onChange={(e) => {
                  this.setState({ movieYear: e.target.value });
                }}
              />
              <input
                type="button"
                value="search"
                placeholder="Enter movie name"
                onClick={() => {
                  this.search();
                }}
              />
            </div>
            {this.state.movieList.map((item, i) => {
              return (
                <div>
                  <div className="title">
                    <h4>Title: {item.Title}</h4>
                  </div>
                  <div className="title">
                    Year:
                    {item.Year}
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
        {this.state.tab2 && <div>manu</div>}
      </div>
    );
  }
}

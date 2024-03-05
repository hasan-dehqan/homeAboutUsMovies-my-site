import React, { Component } from 'react';
import style from "../styles/style.module.css";

class NotFound extends Component {
  render() {
    return (
        <h1 className={style["not-found"]}>The page can`t be found.</h1>

    )
  }
}
export default NotFound;

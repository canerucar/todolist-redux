import React, { useState } from "react";
import Style from "./styles.module.scss";
import { connect } from "react-redux";
import { addToList, mark, clean } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div className={Style.wrapper}>
      <h1>To do list</h1>
      <div className={Style.add_form}>
        <input
          type="text"
          placeholder="Add to do list"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.addToList(text);
          }}
        >
          Add
        </button>
      </div>
      <div className={Style.list}>
        {props.list.map((item, index) => (
          <div
            onClick={() => props.mark(item.id)}
            className={item.completed ? Style["done"] : ""}
            key={index}
          >
            {item.title}
          </div>
        ))}
      </div>

      <button className={Style.clean} onClick={() => props.clean()}>
        Clear Completed
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

export default connect(mapStateToProps, { addToList, mark, clean })(App);

import React, { useState, useContext } from "react";

import GithubContext from "../context/github/GithubContext";
import AlertContext from '../context/alert/alertContext'

const Search = () => {
  const [text, setText] = useState("");

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { clearUsers , users} = githubContext;
  const { setAlert } = alertContext;
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something ", "light");
    } else {
      githubContext.searchUsers(text);
      setText(" ");
    }
  };

  return (
    <div>
      <form className="Form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Any user"
          value={text}
          onChange={onChange}
        />
        <input type="Submit" className="btn btn-dark btn-block" />
      </form>
      {users.length >0 && (
        <button className=" btn btn-light btn-block" onClick={clearUsers}>
          {" "}
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

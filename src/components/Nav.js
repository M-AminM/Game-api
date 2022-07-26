import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchSearch } from "../actions/gameAction";

const Nav = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(input));
    setInput("");
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  return (
    <NavStyle>
      <h1 onClick={clearSearch}>Games</h1>
      <form>
        <input value={input} onChange={inputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  text-align: center;
  color: #ff7676;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  h1 {
    cursor: pointer;
  }
`;
export default Nav;

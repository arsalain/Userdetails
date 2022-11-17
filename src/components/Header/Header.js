import React,{useState} from 'react';
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/movies/movieslice"

const Header = () => {
  const [term,setTerm] = useState("")
  const dispatch=useDispatch();
  const submitHandler=(e) =>{
      e.preventDefault();
      if(term==="") return alert("Please enter search term!")
      console.log(term);
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
  }
    return (
        <div className="header">
        <Link  style={{textDecoration: 'none'}} to="/">
          <div className="logo">Movie App</div>
        </Link>
        <div classname="search-bar">
          <form onSubmit={submitHandler}>
            <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e)=> setTerm(e.target.value)}></input>
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </div>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    )
};

export default Header;
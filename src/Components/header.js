import React, { useRef, useState } from "react";
import logo from "../resources/header/logo.png";
import styles from "./header.module.css";
import booksImg from "../resources/header/KeazoNBOOKS.png";
import heart from "../resources/header/bx_bx-book-heart.png";
import bell from "../resources/header/Vector.png";
import diamond from "../resources/header/fluent_premium-person-20-regular.png";
import profile from "../resources/header/IMG20210528181544.png";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../store/bookSlice";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const searchRef = useRef();

  const getSearchBooks = async (query) => {
    // console.log(object)
    // console.log("query ->", query)
    if (query === "") {
      const fetchData = async () => {
        try {
          const response1 = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
          );
          const response2 = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
          );

          // Combine the items from both responses
          const combinedItems = [
            ...response1.data.items,
            ...response2.data.items,
          ];
          dispatch(addBook(combinedItems));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
      return;
    }
    try {
      const response1 = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      //   console.log(response1);
      dispatch(addBook(response1.data.items));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const searchHandler = (ev) => {
    ev.preventDefault();
    getSearchBooks(searchRef.current.value);
    // console.log(searchRef.current.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.headerLogo}>
          <img src={logo} />
          <img src={booksImg} />
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="search" ref={searchRef} />
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.rightIcons}>
          <img src={heart} />
          <img src={bell} />
          <img src={diamond} />
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default Header;

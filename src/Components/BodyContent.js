import React, { useEffect, useState } from "react";
import styles from "./bodyContent.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../store/bookSlice";

const BodyContent = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [SecondApi, setSecondApi] = useState([]);

  useEffect(() => {
    // console.log(books);
    if (books.length === 0) {
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
          setBookData(combinedItems);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
      //   console.log(bookData);
    }
  }, []);

  useEffect(() => {
    console.log("from redux data ->", books);
    if (books.length > 0) {
      setBookData(books);
    }
  }, [books]);

  return (
    <div className={styles.bodyContent}>
      <div className={styles.bookHeading}>More Books</div>
      <div className={styles.booksDiv}>
        {loading && <div>Loading...</div>}
        {bookData.length > 0 &&
          bookData.map((val, i) => {
            console.log("from insdie bodyContent -> ", val);
            if (val.volumeInfo.imageLinks) {
              return <img src={val.volumeInfo.imageLinks.thumbnail} />;
            }
          })}
      </div>
    </div>
  );
};

export default BodyContent;

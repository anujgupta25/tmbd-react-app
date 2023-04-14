import React, { useEffect, useRef, useState } from "react";
import MovieTile from "../MovieTile/MovieTile";
import getConfig from "next/config";
import axios from "axios";
import * as style from "./list.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function List() {
  const [data, setData] = useState([]);
  const searchInputRef = useRef("");
  const router = useRouter()
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
          headers: {
            "Access-Control-Allow-Headers":
              "Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    console.log(process.env.NEXT_PUBLIC_BASE_URL);
  }, [router]);

  const handleSearch = () => {
    let searchTerm = searchInputRef.current.value.trim().split(" ").join("+");

    if (searchTerm === "" || searchTerm === undefined) {
      console.log("not valid");
      return;
    }
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}`;
    const data = axios
      .get(encodeURI(url), {
        headers: {
          "Access-Control-Allow-Headers":
            "Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (isLoading) {
    return <p className={style.loading}>Loading ...</p>;
  }
  return (
    <div className={style.listContainer}>
      <div className={style.inputContainer}>
        <input
          ref={searchInputRef}
          placeholder="search movie"
          className={style.input}
          type="text"
          name="search"
        />
        <button type="button" className={style.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.length > 0 &&
          data.map((el, i) => {
            return (
              <Link key={i} href={`/movie/${el.id}`}>
                <MovieTile
                  releaseDate={el.release_date}
                  image={el.poster_path}
                  title={el.title}
                />
              </Link>
            );
          })}

        {!isLoading && data.length === 0 && (
          <p className={style.loading}> No result for this Keyword !</p>
        )}
      </div>
    </div>
  );
}

export default List;

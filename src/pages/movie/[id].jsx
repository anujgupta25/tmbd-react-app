import Movie from "@/components/MovieLandingPage/Movie";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function Movies() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    fetchData();
  }, [router, data]);

  const fetchData = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    const data = axios
      .get(encodeURI(url), {
        headers: {
          "Access-Control-Allow-Headers":
            "Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Methods",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {data && (
        <Movie
          backdrop_path={data.backdrop_path}
          title={data.title}
          overview={data.overview}
          release_date={data.release_date}
        />
      )}
    </>
  );
}

export default Movies;

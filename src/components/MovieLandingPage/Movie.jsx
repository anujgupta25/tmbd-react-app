import React, { useEffect } from "react";
import * as style from "./movie.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Movie = ({ backdrop_path, title, overview, release_date }) => {

  const router = useRouter()
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        width="240"
        height="300"
        style={{ width: "100%", height: "100vh", objectFit : "cover" }}
        alt={title}
      />
      <div className={style.overlay}>
              <button className={style.backBtn} style={{zIndex: -1}} onClick={()=>router.back()}></button>

        <div className={style.overlayContent}>
          <p className={style.title}>{title}</p>
          <span className={style.release}>Release Date : {release_date}</span>
          <p className={style.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

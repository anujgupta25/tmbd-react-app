import React, { useEffect } from "react";
import Image from "next/image";
import * as style from "./movieTile.module.css";

function MovieTile({ title, image, releaseDate }) {

  return (
    <div className={style.card}>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w500${image}`}
          width="240"
          height="300"
          alt={title}
        />
      </div>
      <div className={style.hovercard}>
        <span className={style.hovertitle}>{title}</span>
        <span>
          <b>Release Date: </b>
          {releaseDate}
        </span>
      </div>
    </div>
  );
}

export default MovieTile;

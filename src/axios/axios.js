import axios from "axios";

export const api = async(url) =>{
    const data = await axios
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
        return res;
      })
      .catch((err) => console.log(err));
}
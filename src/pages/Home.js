import React, { useState, useEffect } from "react";
import Makanan from "../component/Makanan";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";
import Button from "@material-ui/core/Button";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    getData();
  }, []);
  useEffect(() => {
    // Update the document title using the browser API
    //getData();
  }, [isLoading]);
  async function getData() {
    setLoading(true);
    const response = await fetch(
      "https://golden-fuchsia-coaster.glitch.me/fruits"
    );
    const data = await response.json();
    setData(data);
    console.log(data);
    setLoading(false);
  }
  return (
    <React.Fragment>
      <button onClick={getData}>
        {/* {isLoading === false ? "getData" : "Loading"} */}
        {isLoading === false && "getData"}
        {isLoading === true && "Loading"}
      </button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      {isLoading === true && <Loading />}
      {data.length === 0 && "Tidak ada data"}
      {data.map((fruit) => {
        return <Makanan name={fruit.nama} price={fruit.harga} />;
      })}

      <Link to="/about">About</Link>
    </React.Fragment>
  );
}

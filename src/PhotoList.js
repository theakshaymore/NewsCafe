import React from "react";
import { useState } from "react";
import axios from "axios";
import Photo from "./Photo";

function PhotoList() {
  //
  let textInput = React.createRef();
  //
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  //
  const getPhotos = async (e) => {
    e.preventDefault();
    const query = textInput.current.value;
    const res = await axios.get(
      `https://pixabay.com/api/?key=21975336-28c05fa5ba9296023c87b9feb&q=${query}`
    );
    setPhotos(res.data.hits);
    setLoading(false);
  };
  //
  return (
    <div className="PhotoList">
      <br />
      <br />

      <form className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Enter Search"
            ref={textInput}
          />
        </div>
        <div className="col-auto">
          <button type="submit" class="btn btn-dark mb-3" onClick={getPhotos}>
            Get Photos
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <div className="container res">
        {photos.map((item) => {
          return <Photo item={item} loading={loading} />;
        })}
      </div>
    </div>
  );
}

export default PhotoList;

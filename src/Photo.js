import React from "react";

function Photo({ item, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="Photo">
      <div className="text-center">
        <img src={item.webformatURL} className="rounded" alt="img" />
      </div>
      <p className="text-muted">
        <img src={item.userImageURL} className="photo-img" alt="img" />
        {item.user}
      </p>
    </div>
  );
}

export default Photo;

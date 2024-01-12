import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, url, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge bg-danger"> {source} </span>
        </div>
        <img
          src={
            !urlToImage
              ? "https://th.bing.com/th/id/OIP.tLYk4tRItXVvCqMaKasRvAHaHa?w=610&h=610&rs=1&pid=ImgDetMain"
              : urlToImage
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Heading from "./Heading";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResult, settotalResult] = useState(40);
  const [isDissabled, setisDissabled] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const handlePrev = async () => {
    const newPage = parseInt(page) - 1;
    fetchData(newPage);
    setisDissabled(false);
  };
  const handleNext = async () => {
    const newPage = parseInt(page) + 1;
    
    if (newPage > Math.ceil(totalResult / props.pageSize)) {
      setisDissabled(true);
    } else {
      fetchData(newPage);
      setisDissabled(false);
    }
  };
  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchData = async (newPage) => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${newPage}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(parseData.articles);
      setLoading(false);
      setPage(newPage);
      document.title = `NewseMon-${capitalizeFirstLetter(props.category)}`;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      {loading && <Spinner />}
      <Heading titleCat={props.category} />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {!loading &&
          articles.map((elem, index) => (
            <div className="card m-2" style={{ width: "18rem" }} key={index}>
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ left: "50%", zIndex: "1" }}
              >
                {elem.source.name}
              </span>
              <img
                src={
                  !elem.urlToImage
                    ? "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725040-stock-illustration-image-available-icon-flat-vector.jpg"
                    : elem.urlToImage
                }
                className="card-img-top"
                alt={elem.title}
              />
              <div className="card-body">
                <h5 className="card-title">{elem.title ? elem.title : ""}</h5>
                <p className="card-text">
                  {elem.description ? elem.description : "..."}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    BY - {!elem.author ? "..." : elem.author} on{" "}
                    {new Date(elem.publishedAt).toUTCString()}
                  </small>
                </p>
                <button className="btn btn-link btn-sm ">
                  <a
                    href={elem.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="container d-flex align-items-center justify-content-center gap-5 mb-3">
        {!loading && (
          <button
            type="button"
            disabled={page <= 1}
            onClick={handlePrev}
            className="btn btn-outline-info"
          >
            &larr; Previous
          </button>
        )}
        {!loading && (
          <button
            type="button"
            disabled={isDissabled}
            onClick={handleNext}
            className="btn btn-outline-info"
          >
            Next &rarr;
          </button>
        )}
      </div>
    </>
  );
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  titleCat: PropTypes.string,
};
export default News;

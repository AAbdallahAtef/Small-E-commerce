import React from "react";

const Slider = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              className="d-block mx-auto w-90 height-500"
              alt="products"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              className="d-block mx-auto w-90 height-500"
              alt="products"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              className="d-block mx-auto w-90 height-500"
              alt="products"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;

import React from 'react'

function Slider() {
    return (
        <>
           


        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
    <img src={"../img/free-photo-of-happy-woman-in-christmas-red-sweater.jpeg"} className="d-block w-100" alt="..." style={{ width: "100%", height: "500px" }} />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
    <img src={"../img/free-photo-of-woman-in-black-coat-standing-on-snow-covered-ground.jpeg"} className="d-block w-100" alt="..." style={{ width: "100%", height: "500px" }} />
    </div>
    <div className="carousel-item">
    <img src={"../img/free-photo-of-woman-in-winter-clothes-enjoying-snowy-forest.jpeg"} className="d-block w-100" alt="..." style={{ width: "100%", height: "500px" }} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}

export default Slider
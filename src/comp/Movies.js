import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IoListCircleSharp } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const api_image = "https://image.tmdb.org/t/p/w500";
const api_genre =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=7d23723555b26e1b06ddce00f0769e34&language=en-US";

const Movies = ({
  title,
  runtime,
  poster_path,
  overview,
  vote_average,
  release_date,
  background,
  country,
}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  return (
    <div className="general">
      <div className="movies">
        <div className="text-center" onClick={handleShow}>
          <img src={api_image + poster_path} alt={title} />
        </div>
        <div className="info">
          <CircularProgressbar
            className="canvas"
            value={vote_average * 10}
            text={`${vote_average * 10}%`}
            background
            backgroundPadding={3}
            styles={buildStyles({
              textSize: "2em",
              backgroundColor: "#081c22",
              textColor: "#fff",
              pathColor:
                vote_average < 4
                  ? "#db2360"
                  : vote_average < 7
                  ? "#d2d531"
                  : "#21d07a",
              trailColor: "#17323a",
            })}
          />
          <span className="title" onClick={handleShow}>
            {title}
          </span>

          <p>
            {release_date &&
              new Date(release_date).toUTCString().split(",")[1].split("00")[0]}
          </p>
        </div>
      </div>
      <Modal
        size="xl"
        className="modal"
        show={show}
        onHide={handleClose}
        centered
        static
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "Source Sans Pro, Arial, sans-serif",
              fontWeight: "700",
            }}
          >
            <span>{title}</span>
            <span>({release_date && release_date.split("-")[0]})</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundImage: `url(${api_image + background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <div className=" content row">
            <div className="col-5">
              <img
                alt="suza"
                src={api_image + poster_path}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-7">
              <div classname="col row" style={{ display: "flex" }}>
                <div
                  className="col-1"
                  style={{
                    color: "white",
                    Right: "10px",
                    marginTop: "60px",
                  }}
                >
                  <span>
                    {release_date &&
                      release_date.replace("-", "/").replace("-", "/")}
                  </span>
                </div>
                <div
                  className="col-1"
                  style={{
                    color: "white",
                    paddingLeft: "40px",
                    marginTop: "60px",
                  }}
                >
                  <span>({country})</span>
                </div>
                <div
                  className="col-1"
                  style={{
                    color: "white",
                    paddingLeft: "40px",
                    marginTop: "60px",
                  }}
                >
                  <span>•</span>
                </div>
                <div
                  className="col-3"
                  style={{
                    color: "white",
                    paddingLeft: "20px",
                    marginTop: "60px",
                  }}
                >
                  <span>Action, Drama</span>
                </div>
              </div>
              <div classname="col row" style={{ display: "flex" }}>
                <div classname="col-2">
                  <CircularProgressbar
                    className="canvas-2"
                    value={vote_average * 10}
                    text={`${vote_average * 10}%`}
                    background
                    backgroundPadding={3}
                    styles={buildStyles({
                      textSize: "2em",
                      backgroundColor: "#081c22",
                      textColor: "#fff",
                      pathColor:
                        vote_average < 4
                          ? "#db2360"
                          : vote_average < 7
                          ? "#d2d531"
                          : "#21d07a",
                      trailColor: "#17323a",
                    })}
                  />
                </div>
                <div
                  classname="col1 col-1"
                  style={{
                    marginTop: "50px",
                    paddingLeft: "48px",
                    fontWeight: "700",
                    width: "20%",
                    display: "flex",
                  }}
                >
                  <span>User Score</span>
                </div>
                <div
                  className="col-1"
                  style={{
                    marginTop: "50px",
                    color: "#032541",
                  }}
                >
                  <IoListCircleSharp
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                </div>
                <div
                  className="col-1"
                  style={{
                    marginTop: "50px",
                    color: "#032541",
                  }}
                >
                  <IoHeartCircleSharp
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                </div>
                <div
                  className="col-1"
                  style={{
                    marginTop: "50px",
                    color: "#032541",
                  }}
                >
                  <MdWatchLater
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                </div>
                <div
                  className="col-1"
                  style={{
                    marginTop: "50px",
                    color: "#032541",
                  }}
                >
                  <MdStars
                    style={{
                      width: "46px",
                      height: "46px",
                    }}
                  />
                </div>
                <div
                  className="col-1"
                  style={{
                    marginTop: "58px",
                    marginLeft: "20px",
                    color: "white",
                  }}
                >
                  <FaPlay
                    style={{
                      width: "23px",
                      height: "23px",
                    }}
                  />
                </div>
                <div
                  className="col-2"
                  style={{
                    color: "white",
                    Right: "10px",
                    marginTop: "60px",
                    fontWeight: "700",
                  }}
                >
                  <span>Play Trailer</span>
                </div>
              </div>
              <div
                style={{
                  paddingTop: "30px",
                }}
              >
                <h3>Overview</h3>
              </div>
              <div
                classname="col"
                style={{
                  paddingTop: "0px",
                }}
              >
                <span> {overview} </span>
              </div>
              <div>{}</div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Movies;

import { useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

function NewsData() {
  const result = useQuery(
    ["todos"],
    async () =>
      await axios
        .get(
          `https://newsapi.org/v2/everything?q=Health&from=2022-08-01&to=2022-08-26&sortBy=popularity&apiKey=${process.env.REACT_APP_newsDataAPIKEY}`
        )
        .then((a) => {
          return a.data;
        })
  );

  return (
    <div>
      <ControlledCarousel result={result}></ControlledCarousel>
    </div>
  );
}

function ControlledCarousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <a href={props.result.data.articles[1]["url"]}>
          <img
            className="d-block w-100 "
            src={props.result.data.articles[1]["urlToImage"]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "#fff",
                letterSpacing: "-1px",
                fontSize: "23px",
                fontWeight: 700,
                textShadow: "1px 1px 3px #222",
              }}
            >
              {" "}
              {props.result.data.articles[1]["title"]}{" "}
            </h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href={props.result.data.articles[2]["url"]}>
          <img
            className="d-block w-100"
            src={props.result.data.articles[2]["urlToImage"]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "#fff",
                letterSpacing: "-1px",
                fontSize: "23px",
                fontWeight: 700,
                textShadow: "1px 1px 3px #222",
              }}
            >
              {" "}
              {props.result.data.articles[2]["title"]}{" "}
            </h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href={props.result.data.articles[3]["url"]}>
          <img
            className="d-block w-100"
            src={props.result.data.articles[3]["urlToImage"]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "#fff",
                letterSpacing: "-1px",
                fontSize: "23px",
                fontWeight: 700,
                textShadow: "1px 1px 3px #222",
              }}
            >
              {" "}
              {props.result.data.articles[3]["title"]}{" "}
            </h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}
export default NewsData;

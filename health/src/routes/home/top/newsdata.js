import { React } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

// 굳이 이렇게 관리를 해야하는 건가 ?
function NewsData() {
  return <ControlledCarousel></ControlledCarousel>;
}

function ControlledCarousel() {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const url =
    "https://newsapi.org/v2/everything?" +
    "q=health&" +
    `from=${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}` +
    "sortBy=popularity&" +
    `apiKey=${process.env.REACT_APP_newsDataAPIKEY}`;

  let result = useQuery(["todos"], () =>
    axios.get(url).then((response) => {
      return response.data;
    })
  );
  
  return (
    <div>
      {result.isLoading && "로딩중입니다. 잠시만 기다려주세요."}
      {result.error && "데이터 불러오기가 실패하였습니다."}
      {result.data && (
        <div>
          <Carousel>
            <Carousel.Item>
              <a href={result.data.articles[1]["url"]}>
                <img
                  className="d-block w-100 "
                  src={result.data.articles[1]["urlToImage"]}
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
                    {result.data.articles[1]["title"]}{" "}
                  </h3>
                </Carousel.Caption>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href={result.data.articles[2]["url"]}>
                <img
                  className="d-block w-100"
                  src={result.data.articles[2]["urlToImage"]}
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
                    {result.data.articles[2]["title"]}{" "}
                  </h3>
                </Carousel.Caption>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href={result.data.articles[3]["url"]}>
                <img
                  className="d-block w-100"
                  src={result.data.articles[3]["urlToImage"]}
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
                    {result.data.articles[3]["title"]}{" "}
                  </h3>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default NewsData;

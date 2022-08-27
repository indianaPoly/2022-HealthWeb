import { useState } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";

function NewsData() {
  return (
    <div>
      <ControlledCarousel></ControlledCarousel>
    </div>
  );
}

function ControlledCarousel() {

  /**
   *  @todo api 가져올 때 최상의 결과를 가지고 올 수 있도록 URL 주소 만지기
   */

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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
    >

      {/* map 함수 이용해서 이 아이템을 여러개 만들도록 하기 */}
      <Carousel.Item>
        <a href={result.data && result.data.articles[0]["url"]}>
          <div>
            <img
              style={{
                position:"relative",
                top: 0,
                width: "100%",
                height: "100%",
                margin: 0
              }}
              src={result.data && result.data.articles[0]["urlToImage"]}
              alt=""
            />

            {/* text box 임. 이것을 realtive로 만들어서 이미지 위에 올라오도록 해야 함. */}
            <div
              style={{
                position: "relative",
                top:"-100px",
                right: "100px",
                width: "1200px",
                height: "100%",
                margin: "auto",
                color: "#fff",
                overflow: "hidden",
              }}
            >
              <h4> {result.data && result.data.articles[0]["title"]}</h4>
            </div>
          </div>
        </a>
        <Carousel.Caption>
          <h3>{}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default NewsData;

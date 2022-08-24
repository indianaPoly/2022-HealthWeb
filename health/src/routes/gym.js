import axios from "axios";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";

function Gym() {

  return (
    <>
      <SelectedLocation></SelectedLocation>
    </>
  );
}

function SelectedLocation() {

  const result = useQuery(
    ["todos"],
    async () =>
      await axios
        .get(
          `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_GYM_API_KEY}/json/LOCALDATA_104201/1/1000/`
        )
        .then((a) => {
          return a.data;
        })
  );

  const [location, setLocation] = useState(null);

  let onoffArray = [];
  let guonoffArray = [];
  const [onoff, setOnoff] = useState(onoffArray);
  const [guonoff, setGuOnoff] = useState(guonoffArray);

  const handleSelect = (e) => {
    setLocation(e);
    var i;

    // 버튼이 클릭되면 기존에 가지고 있는 배열을 초기화 시켜줘야 함.
    onoffArray = [];
    guonoffArray = [];
    setOnoff(onoffArray);
    setGuOnoff(guonoffArray);

    /**
     * @memo 서울시에서 가져온 공공데이터 중에서 영업중인 곳에 대한 데이터를 openGymData에 저장하고 이를 Onoff 배열에 밀어넣는 식으로 저장
     */
    for (i = 0 ; i < 1000 ; i++){
      if (result.data.LOCALDATA_104201.row[i]["DTLSTATENM"] === "영업중"){
        let openGymData = result.data.LOCALDATA_104201.row[i];
        setOnoff((onoffArray) => [...onoffArray, openGymData]);
      }
    }

    for (i = 0 ; i < onoff.length ; i ++){
      if ((onoff[i]["RDNWHLADDR"]).indexOf(e) !== -1) {
        let GuOpenGymData = result.data.LOCALDATA_104201.row[i];
        setGuOnoff((guonoffArray) => [...guonoffArray, GuOpenGymData]);
      }
    }

    console.log(guonoff);
  }

  return (
    <>
      <ButtonGroup
        style={{
          marginTop: "30px",
        }}
      >
        <Button>서울에 살아요.</Button>
        {/* <Button>2</Button> */}

        <DropdownButton
          as={ButtonGroup}
          title="사는 동네를 설정해주세요."
          id="bg-nested-dropdown"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="강남구">강남구</Dropdown.Item>
          <Dropdown.Item eventKey="강동구">강동구</Dropdown.Item>
          <Dropdown.Item eventKey="강북구">강북구</Dropdown.Item>
          <Dropdown.Item eventKey="강서구">강서구</Dropdown.Item>
          <Dropdown.Item eventKey="관악구">관악구</Dropdown.Item>
          <Dropdown.Item eventKey="광진구">광진구</Dropdown.Item>
          <Dropdown.Item eventKey="구로구">구로구</Dropdown.Item>
          <Dropdown.Item eventKey="금천구">금천구</Dropdown.Item>
          <Dropdown.Item eventKey="노원구">노원구</Dropdown.Item>
          <Dropdown.Item eventKey="도봉구">도봉구</Dropdown.Item>
          <Dropdown.Item eventKey="동대문구">동대문구</Dropdown.Item>
          <Dropdown.Item eventKey="동작구">동작구</Dropdown.Item>
          <Dropdown.Item eventKey="마포구">마포구</Dropdown.Item>
          <Dropdown.Item eventKey="서대문구">서대문구</Dropdown.Item>
          <Dropdown.Item eventKey="서초구">서초구</Dropdown.Item>
          <Dropdown.Item eventKey="성동구">성동구</Dropdown.Item>
          <Dropdown.Item eventKey="성북구">성북구</Dropdown.Item>
          <Dropdown.Item eventKey="송파구">송파구</Dropdown.Item>
          <Dropdown.Item eventKey="양천구">양천구</Dropdown.Item>
          <Dropdown.Item eventKey="영등포구">영등포구</Dropdown.Item>
          <Dropdown.Item eventKey="용산구">용산구</Dropdown.Item>
          <Dropdown.Item eventKey="은평구">은평구</Dropdown.Item>
          <Dropdown.Item eventKey="종로구">종로구</Dropdown.Item>
          <Dropdown.Item eventKey="중구">중구</Dropdown.Item>
          <Dropdown.Item eventKey="중량구">중량구</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <div> {location} </div>
    </>
  );
}
export default Gym;

// 헬스장 정보에 관해서 현재 위치 가져오기
// Geolocation API 통해서 현재 위치 가져오고
// 동 단위로 끊어서 보여주기
// 위에는 추가적으로 동네 설정하면 헬스장 보여주는 식으로 하면 될 듯함요.
// 디자인도 해야겠네요

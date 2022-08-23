import axios from "axios";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

// 서버에서 데이터를 가지고 오기 전에 array를 비웠으면 좋겠음.
// 그 때 배운거 쓰면 될 듯?

function Gym() {

  let nameArray,
    loactionArray = [];
  let [name, setName] = useState(nameArray);
  let [location, setLocation] = useState(loactionArray);
  let [gudata, setGudata] = useState(null);
  var i, j;

  useEffect(() => {
    setName([]);
  },[gudata]);
  // 버튼을 누르면 값을 바로 가져와야 하는데 값을 가져오고 array를 초기화 함.
  // 처음에는 무조건 빈 배열을 넣는건가..?

  const onClick = async () => {
    try {
      const response = await axios.get(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_GYM_API_KEY}/json/LOCALDATA_104201/1/1000/`
      );
      // 추후에는 response.data.LOCALDATA_104201["list_total_count"] 이 값을 반복문에 넣을예정
      for (i = 0; i < 1000; i++) {
        // 영업중인 헬스장을 1차로 분류함.
        let opengymNameData =
          response.data.LOCALDATA_104201["row"][i].DTLSTATENM === "영업중"
            ? response.data.LOCALDATA_104201["row"][i]
            : null;

        // 여기서 데이터를 처리하기 위해서는 useEffect를 제대로 이해하고 넘아가야 할 것 같음.
        // for (j = 0 ; j < 1000 ; j++) {
        //   let gymNameData = (opengymNameData[j].RDNWHLADDR).indexOf(gudata) === gudata ? response.data.LOCALDATA_104201["row"][i] : null;
        //   setName((nameArray) => [...nameArray, gymNameData]);
        // }
       setName((nameArray) => [...nameArray, opengymNameData]);
        // setLocation((loactionArray) => [...loactionArray, gymLocationData]);
      }
      console.log(name);
      console.log(name[3].RDNWHLADDR);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SelectedLocation onClick={onClick} setGudata={setGudata}></SelectedLocation>
      {/* <SelectedGU></SelectedGU> */}
    </>
  );
}

function SelectedLocation(props) {
  return (
    <>
      <ButtonGroup
        style={{
          marginTop: "30px",
        }}
      >
        <Button onClick={() => props.onClick()}>서울에 살아요.</Button>
        {/* <Button>2</Button> */}

        <DropdownButton
          as={ButtonGroup}
          title="사는 동네를 설정해주세요."
          id="bg-nested-dropdown"
          onSelect={(eventKey) => {props.setGudata(eventKey)}}
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
    </>
  );
}

// function SelectedGU(eventKey){
//   return(
//   <>
//   <div> {eventKey}에 있는 헬스장을 보여드릴께요.</div>
//   </>);
// }

export default Gym;

// 헬스장 정보에 관해서 현재 위치 가져오기
// Geolocation API 통해서 현재 위치 가져오고
// 동 단위로 끊어서 보여주기
// 위에는 추가적으로 동네 설정하면 헬스장 보여주는 식으로 하면 될 듯함요.
// 디자인도 해야겠네요

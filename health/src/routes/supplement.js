import axios from "axios";
import { useState } from "react";
import { Nav } from "react-bootstrap";

function Supplement() {
  // tab창 관리하는 state
  const [tab, setTab] = useState(null);

  // 호출한 api data 관리하는 state ( 이게 맞노 ? )
  const [carboInfo, setCarboInfo] = useState([]);
  const [proteinInfo, setProteinInfo] = useState([]);
  const [fatInfo, setFatInfo] = useState([]);

  // api 비동기로 처리하기
  const carbohydrateAPI = async () => {
    try {
      const carbohydrateGetAPI = await axios.get(
        "https://api.ods.od.nih.gov/dsld/v8/factsheet/?q=Protein"
      );
      // setCarboInfo(carbohydrateGetAPI);
      console.log(carbohydrateGetAPI.data.hits[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const proteinAPI = async () => {
    try {
      const proteinGetApi = await axios.get(
        "https://api.ods.od.nih.gov/dsld/v8/factsheet/?q=Protein"
      );
      setProteinInfo(proteinGetApi);
    } catch (e) {
      console.log(e);
    }
  };

  const fatAPI = async () => {
    try {
      const fatGetAPI = await axios.get(
        "https://api.ods.od.nih.gov/dsld/v8/factsheet/?q=Carbohydrate"
      );
      setFatInfo(fatGetAPI);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Nav
        activeKey="/home"
        style={{
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginRight: "120px",
          marginLeft: "120px",
        }}
      >
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              // carbohydrateAPI();
              setTab(0);
            }}
            eventKey="carbohydrate"
          >
            탄수화물
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              // proteinAPI();
              setTab(1);
            }}
            eventKey="protein"
          >
            단백질
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              // fatAPI();
              setTab(2);
            }}
            eventKey="fat"
          >
            지방
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(3)} eventKey="vitamin">
            비타민
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(4)} eventKey="mineral">
            무기염류
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(5)} eventKey="water">
            물
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent
        tab={tab}
        carboInfo={carboInfo}
        proteinInfo={proteinInfo}
        fatInfo={fatInfo}
      ></TabContent>
    </>
  );
}

function TabContent(props) {
  
  if (props.tab === 0) {
    return <Carbohydrate></Carbohydrate>;
  } else if (props.tab === 1) {
    return <div> 준비중 </div>;
  } else if (props.tab === 2) {
    return <div> 준비중</div>;
  } else if (props.tab === 3) {
    return <div>비타민 내용 넣는 칸임</div>;
  } else if (props.tab === 4) {
    return <div>무기염류 내용 넣는 칸임</div>;
  } else if (props.tab === 5) {
    return <div>물 내용 넣는 칸임</div>;
  }
}

function Carbohydrate(){
  return (
    <>
    <div style={{marginTop:"30px", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "30px"}}>
      {/* 이렇게 하다가 DB를 그냥 만드는게 나을 거 같은뎁 ? */}
      <p>탄수화물이란?</p>
      <p>탄수화물은 우리 식단의 주요 영양소 중 하나입니다. 탄수화물은 우리 몸에 에너지를 제공하는데 도움이 됩니다.</p>
      <p>식품에서 발견되는 탄수화물에는 설탕, 전분 및 섬유 3가지 유형이 있습니다.</p><br/>
      <p>신체가 제대로 기능하기 위해서는 세 가지 형태의 탄수화물이 모두 필요합니다.</p>
      <p>설탕과 대부분의 전분은 체내에서 포도당(혈당)으로 분해되어 에너지로 사용됩니다.</p>
      <p>섬유질은 신체에서 분해되지 않는 음식의 일부입니다. 섬유에는 두 가지 유형이 있습니다. <br/>불용성 섬유질은 대변에 부피를 더향 규칙적인 상태를 유지합니다. <br/>수용성 섬유소는 콜레스테롤 수치를 낮추고 혈당 조잘을 개선하는 데 도움이 됩니다.</p>
      <a href="https://medlineplus.gov/ency/article/002469.htm">참조</a>
    </div>

    <div style={{marginTop:"30px", borderBottom: "1px solid black"}}>
      <p> ㅎㅇ </p>
    </div>
    </>
  );
}
export default Supplement;

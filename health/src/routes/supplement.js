import axios from "axios";
import { useState } from "react";
import { Nav } from "react-bootstrap";

function Supplement() {
  // tab창 관리하는 state
  const [tab, setTab] = useState(null);

  const [carboInfo, setCarboInfo] = useState([]);
  const [proteinInfo, setProteinInfo] = useState([]);
  const [fatInfo, setFatInfo] = useState([]);

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
    return <div> 준비중 </div>;
  } else if (props.tab === 1) {
    return <div> 준비중 </div>;
  } else if (props.tab === 2) {
    return <div> 준비중</div>;
  } else if (props.tab === 3) {
    return <div> 준비중 </div>;
  } else if (props.tab === 4) {
    return <div> 준비중 </div>;
  } else if (props.tab === 5) {
    return <div> 준비중 </div>;
  }
}
export default Supplement;

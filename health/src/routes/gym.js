import axios from "axios";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useTable } from "react-table";
import './gym.css';

function Gym() {
  // 데이터가 총 5000개 가 넘게 있는거 생각해야 됨.
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

    setOnoff([]);
    setGuOnoff([]);

    for (i = 0; i < 1000; i++) {
      if (result.data.LOCALDATA_104201.row[i]["DTLSTATENM"] === "영업중") {
        let openGymData = result.data.LOCALDATA_104201.row[i];
        setOnoff((onoffArray) => [...onoffArray, openGymData]);
      }
    }

    for (i = 0; i < onoff.length; i++) {
      let guOpenGymlData = onoff[i];
      if (guOpenGymlData["RDNWHLADDR"].indexOf(e) !== -1) {
        setGuOnoff((guonoffArray) => [...guonoffArray, guOpenGymlData]);
      }
    }
    console.log(guonoff);
  };
  
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
      <GymDataTable guonoff={guonoff}></GymDataTable>
    </>
  );
}

function GymDataTable(props) {
  const columnData = [
    {
      Header: "헬스장 이름",
      accessor: "BPLCNM",
    }, 
    {
      Header: "헬스장 위치",
      accessor: "RDNWHLADDR",
    },
    {
      Header: "헬스장 영업여부",
      accessor: "TRDSTATENM",
    },
  ];

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => props.guonoff, [props.guonoff]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroups) => (
          <tr {...headerGroups.getHeaderGroupProps()}>
            {headerGroups.headers.map((columns) => (
              <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Gym;
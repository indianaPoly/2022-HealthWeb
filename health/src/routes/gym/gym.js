import axios from "axios";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useTable } from "react-table";
import "./gym.css";
import { seoulLocation } from "../../data/data";

function Gym() {
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

  let seoulLocation_ = seoulLocation;
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
  };

  return (
    <>
      <ButtonGroup
        style={{
          marginTop: "30px",
        }}
      >
        <Button>서울에 살아요.</Button>

        <DropdownButton
          as={ButtonGroup}
          title="사는 동네를 설정해주세요."
          id="bg-nested-dropdown"
          onSelect={handleSelect}
        >
          {seoulLocation_.map((a, i) => {
            return (
              <Dropdown.Item key={i} eventKey={a}>
                {a}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </ButtonGroup>
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

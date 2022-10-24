import { useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Notice() {
  const [show, setShow] = useState(false);

  const handleOn = () => setShow(true);
  const handleOff = () => setShow(false);

  return (
    <>
      <Col>
        <section>
          <div
            className="top"
            style={{
              position: "relative",
              margin: "0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid rgb(233,233,233)",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                display: "inline-block",
                margin: "15px",
              }}
            >
              운동일지
            </p>
            <button
              onClick={handleOn}
              style={{
                width: "20px",
                height: "20px",
                margin: "15px",
                backgroundColor: "wheat",
              }}
            ></button>
            {show === true ? (
              <FormModal
                show={show}
                setShow={setShow}
                handleOff={handleOff}
              ></FormModal>
            ) : null}
          </div>
        </section>
        <section>
          <div
            className="list"
            style={{
              marginTop: "10px",
            }}
          >
            <ListGroup as="ul">
              {JSON.parse(localStorage.getItem("workList")).map((a, i) => {
                return (<ListGroup.Item as="li" key={i}>{a}</ListGroup.Item>);
              })}
            </ListGroup>
          </div>
        </section>
      </Col>
    </>
  );
}

function FormModal(props) {
  const [workData, setWorkData] = useState();

  const onChangeInfo = (e) => {
    const { value, name } = e.target;
    setWorkData(value);
  };

  const onClickClose = () => {
    setWorkData();
    props.setShow(false);
  };

  const onClickSave = () => {
    let workList = localStorage.getItem("workList");
    workList = JSON.parse(workList);
    workList.push(workData);
    localStorage.setItem("workList", JSON.stringify(workList));
    setWorkData();
    props.setShow(false);
  };

  return (
    <Modal show={props.show} onHide={props.handleOff} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>운동일지 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="#" acceptCharset="utf-8" name="infoForm">
          <input
            name="workData"
            type="text"
            required
            placeholder="운동이름을 입력하세요."
            value={workData}
            onChange={onChangeInfo}
          ></input>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClickClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClickSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Notice;

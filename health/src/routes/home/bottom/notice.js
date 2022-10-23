import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
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
            }}
          >
            <p
              style={{
                display: "inline-block",
                position: "absolute",
                marginLeft: "0",
              }}
            >
              공지사항
            </p>
            <button
              onClick={handleOn}
              style={{
                position: "absolute",
                marginRight: "0",
              }}
            >
              ✚
            </button>
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
          <div className="list">
            <ul></ul>
          </div>
        </section>
      </Col>
    </>
  );
}

function FormModal(props) {
  // 리액트에서 html 값에 접근을 하기 위해서는 state와 함수를 통해서 접근해야 함.
  const [info, setInfo] = useState({
    titleContext: "",
    valueContext: "",
    time: "",
  });

  // 비구조화를 통한 값 추출
  const { titleContext, valueContext } = info;

  const onChangeInfo = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(info);
  };

  const onClickClose = () => {
    setInfo({
      titleContext: "",
      valueContext: "",
    });
    props.setShow(false);
  };

  const onClickSave = () => {
    localStorage.setItem(info.titleContext, JSON.stringify(info));
    setInfo({
      titleContext: "",
      valueContext: "",
    });
    props.setShow(false);
  };

  return (
    <Modal show={props.show} onHide={props.handleOff} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>공지사항 작성</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="#" acceptCharset="utf-8" name="infoForm">
          <input
            name="titleContext"
            type="text"
            required
            placeholder="공지사항 제목을 입력하세요."
            value={titleContext}
            onChange={onChangeInfo}
          ></input>
          <input
            name="valueContext"
            type="text"
            required
            placeholder="공지사항 내용을 입력하세요."
            value={valueContext}
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

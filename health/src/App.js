import "./App.css";
import { Navbar, Container, Nav, Row, Col, Accordion } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import NewsData from "./newsdata.js";
import Gym from "./routes/gym.js";
import Supplement from "./routes/supplement";
import Signup from "./routes/signup";
import Signin from "./routes/signin";

function App() {
  return (
    
    <div className="App">
      <Navbar_></Navbar_>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewsData>
              </NewsData>
              <EnquiryAndNotice></EnquiryAndNotice>
            </>
          }
        ></Route>
        <Route path="/gym" element={<Gym></Gym>}></Route>
        <Route path="/supplement" element={<Supplement></Supplement>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
      </Routes>
    </div>
  );
}


/**
 * @todo 이미지 안에 navbar가 보이도록 설계할 것 
 * @returns 
 */  

function Navbar_() {
  let navigate = useNavigate();
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
          style={{
            color: "#fff",
            letterSpacing: "-1px",
            fontSize: "30px",
            fontWeight: 700,
            textShadow: "1px 1px 3px #222"
          }}
        >
          SIGN
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/gym");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222"
            }}
          >
            헬스장 정보
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/supplement");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222"
            }}
          >
            보충제 정보
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/signup");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222"
            }}
          >
            회원가입 하기
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/signin");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222"
            }}
          >
            로그인 하기
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function EnquiryAndNotice() {
  return (
    <>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            height: 300,
            marginTop: 40,
            padding: 15,
          }}
        >
          <Col>
            {" "}
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>전화하기</Accordion.Header>
                <Accordion.Body>
                  대표자 번호: xxx-xxxx-xxxx
                  <br />
                  고객센터: xx-xxxx-xxxx
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>이메일 주소</Accordion.Header>
                <Accordion.Body>
                  대표자 이메일: xxx@health.com
                  <br />
                  회사 이메일: xxx@health.com
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col
            style={{
              backgroundColor: "blue",
            }}
          >
            공지사항 넣는 곳
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;

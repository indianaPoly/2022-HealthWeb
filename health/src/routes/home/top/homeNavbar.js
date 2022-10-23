import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { corpName } from "../../../data/data.js";

function HomeNavbar() {
  let navigate = useNavigate();
  const corpName_ = corpName;

  return (
    <>
      <Navbar style={{ backgroundColor: "black" }}>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate();
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "30px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222",
            }}
          >
            {corpName_}
          </Navbar.Brand>
          <Nav.Link
            onClick={() => {
              navigate("/gym");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222",
            }}
          >
            헬스장 정보
          </Nav.Link>
          ;
          <Nav.Link
            onClick={() => {
              navigate("/signup");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222",
            }}
          >
            회원가입
          </Nav.Link>
          ;
          <Nav.Link
            onClick={() => {
              navigate("/signin");
            }}
            style={{
              color: "#fff",
              letterSpacing: "-1px",
              fontSize: "13px",
              fontWeight: 700,
              textShadow: "1px 1px 3px #222",
            }}
          >
            로그인
          </Nav.Link>
          ;
        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;

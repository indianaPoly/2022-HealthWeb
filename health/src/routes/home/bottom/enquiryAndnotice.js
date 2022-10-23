import { Container, Row } from "react-bootstrap";
import Enquiry from "./enquiry";
import Notice from "./notice";

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
          <Enquiry></Enquiry>
          <Notice></Notice>
        </Row>
      </Container>
    </>
  );
}

export default EnquiryAndNotice;

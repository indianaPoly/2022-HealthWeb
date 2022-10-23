import { enquiryEmailData, enquiryNumberData } from "../../../data/data";
import { Col, Accordion } from "react-bootstrap";

function Enquiry() {
  const enquiryEmailData_ = enquiryEmailData;
  const enquiryNumberData_ = enquiryNumberData;
  return (
    <Col>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>전화하기</Accordion.Header>
          <Accordion.Body>
            {enquiryNumberData_.ceoCallnumber}
            <br />
            {enquiryNumberData_.corpCallNumber}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>이메일 주소</Accordion.Header>
          <Accordion.Body>
            {enquiryEmailData_.ceoEmail}
            <br />
            {enquiryEmailData_.corpEmail}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}

export default Enquiry;

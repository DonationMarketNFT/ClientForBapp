import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalImage = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

function NewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Campaign Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <ModalImage src="" /> */}
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/sub">
          <Button>자세히보기</Button>
        </Link>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal;

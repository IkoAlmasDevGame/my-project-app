import {Modal, Button, Container, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';

function Intro () {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow1} style={{marginTop : "2px"}}>List CD Baru</Button>
            <Button variant="primary" onClick={handleShow2} style={{marginLeft : "5px", marginTop : "2px"}}>List CD Lama</Button>

            <Modal show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize : "18px", fontFamily : "normal"}}>List CD PLAYSTATION BARU</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    1. GTA SAN ANDREAS,<br />
                    2. THE WALKING DEAD,<br />
                    3. Belum Ada CD Baru
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize : "18px", fontFamily : "normal"}}>List CD PLAYSTATION LAMA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    1. GTA SAN ANDREAS,<br />
                    2. THE WALKING DEAD,<br />
                    3. Belum Ada CD Lama
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div>
                <Container className="text-white d-flex justify-content-center align-items-center mt-3">
                    <Row>
                        <Col>
                            <div className='title'>PUSAT INFORMASI GAME</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Intro
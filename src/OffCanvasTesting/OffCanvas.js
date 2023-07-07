import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.css'

function OffCanvasExample({show, setShow}) {


  const handleClose = () => setShow(false);

  return (
    <>
     
      <Offcanvas show={show} placement="bottom"className="offCanvasMain" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default OffCanvasExample
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import OffCanvas from './OffCanvas'

const Parent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div>
          <Button variant="primary" onClick={handleShow} className="me-2">
        ok
      </Button>
        <OffCanvas show={show} setShow = {setShow} />
    </div>
  )
}

export default Parent

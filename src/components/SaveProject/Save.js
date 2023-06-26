
import {useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Save.css'
import { useEffect, useState } from 'react';

const Save = () => {

    // const save = useSelector(state => state.save.value)
    const savedProject= useSelector(state=> state.save.projects)
    const [savedData,setSavedData] = useState(savedProject.length > 0)

    useEffect(()=>{
        setSavedData(savedProject.length > 0)
    },[savedProject])
   
  return (
    <div>

        {console.log("SetSavedData",savedProject)}

        {
            savedData > 0 ? (
                <Row>
                  {savedProject.map((data, index) => (
                    <Col key={index} className="saveCol">
                      <Card style={{ width: '18rem' }} className="saveCard">
                      
                        <Card.Body className="saveBody">
                          <Card.Title className="saveTitle">{data.title}</Card.Title>
                          {/* <Card.Text>{data.description}</Card.Text> */}
                          <Card.Img variant="top" src={data.img} className="saveImg" />
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <h2>Projects are not saved Yet.</h2>
              )
        }
        
   </div>
  )
}

export default Save
import React from 'react'
import { Button,Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Medium = ({level,data}) => {
  const value= level.toString()
  return (
    <div>
  

  <h2>medium</h2>
      
         {
          data.flatMap(level => {
            return(
                <>     
                <Row>                         
                   {
                    level.rounds.filter(item=> item.level === value)
                    .map(data=>{
                      
                        return(
                          
                            <>
                            <Col>
                            <Card style={{ width: '18rem',border:"2px solid red" }} className="designCC" >                
                            <Card.Body>                                                        
                              <Button className="desMedium" >{data.level}</Button>                                                                                               
                            </Card.Body>
                             </Card>
                             </Col>
                            </>
                        )
                    })
                   }
                </Row> 
                
                </>
                
            )          
        })
        }
      

    </div>
  )
}

export default Medium
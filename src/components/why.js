import React from 'react'
import{Container,Row,Col} from  'react-bootstrap'
import Badge from './../assets/images/badge.png'
import Games from './../assets/images/games.png'
import Xbox from './../assets/images/xbox.png'
import './why.css'
function why() {
  return (
    <div>
        <Container className='why--div'>
            <h1 className='head--h1why'><b>Why eXStore?</b></h1>
            <h5 className='header--why5'><b>We are the official Xbox partner in Indonesia that provides official video games.</b></h5>
            <Container className='div--g'>
               
                <Row>
                    <Col>
                        <div className='col--div'>
                            <img src={Games} alt="" srcset="" />
                            <br/>
                            <b> 5000+ video games available</b>
                           

                        </div>

                    </Col>
                    <Col>
                        <div className='col--div'>
                        <img src={Badge} alt="" srcset="" />
                        <br/>
                        <b>Trusted by 100.000+ customers</b>
                        

                        </div>
                    
                    </Col>
                    <Col>
                        <div className='col--div'>
                        <img src={Xbox}alt="" srcset="" />
                        <br/>
                        <b> Available for all Xbox consoles</b>
                       
                        </div>
                   
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default why
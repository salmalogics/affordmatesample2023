import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmsIcon from '@mui/icons-material/Sms';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Logo from './../assets/images/logo.png'
import './Footer.css'
function footer() {
  return (
    <div className='footer--div'>
            <Container className='footer--container'>
                <Row>
                    <Col>
                    <img src={Logo.png} alt="" srcset="" />

                        <h2 className='logo'><b><span className='blue-text'>eX</span><span className='white--text'>Store</span></b></h2>
                    </Col>
                    <Col>
                        <h6 className='footer--heading'>Menu</h6>
                        <ul className='footer-links'>
                            <li className='footer--links'><a href="?">Order tracking</a></li>
                            <li className='footer--links'><a href="?">Store location</a></li>
                            <li className='footer--links'><a href="?">Return policy</a></li>
                            <li className='footer--links'><a href="?">Support</a></li>
                        
                        </ul>
                
                    </Col>
                    <Col>
                        <h6 className='footer--heading'>Resources</h6>
                        <ul className='footer-links'>
                            <li className='footer--links'><a href="?">Blog</a></li>
                            <li className='footer--links'><a href="?">Help center</a></li>
                            <li className='footer--links'><a href="?">Documentation</a></li>
                            <li className='footer--links'><a href="?">Guidlines</a></li>
                        
                        </ul>
                
                    </Col>
                    <Col>
                        <h6 className='footer--heading'>Follow us on:</h6>
                        <ul className='footer-links'>
                        <li className='footer--links'><a href="?"><InstagramIcon style={{marginRight:"2px",width:'20px'}}/></a>
                            <a href="?"><YouTubeIcon  style={{marginRight:"2px",width:'24px'}}/></a>
                            <a href="?">< SmsIcon  style={{marginRight:"2px",width:'18px'}}/></a>
                            <a href="?"><TwitterIcon  style={{marginRight:"2px",width:'20px'}}/></a></li>
                        
                        </ul>
                
                    </Col>
                </Row>
                    
            </Container>
            <div className='copyright--div'>
                <a href="?" ><CopyrightIcon style={{width:'15px'}}/>2022 Exstore</a>
                
            </div>
                
    </div>
  )
}

export default footer
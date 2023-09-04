import CarouselFadeExample from "./CarouselComponent"
import "../CSS/HomeStyle.css"
import { Button, Container } from "react-bootstrap"
import { Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter,BsFillTelephoneFill} from "react-icons/bs";
import {BiCopyright} from "react-icons/bi"
import {SiGmail} from "react-icons/si"
import happy from "../Images/footerimage.png"
import { icons } from "react-icons";

export default function FooterComponent() {
    return (
        <div>
            <Container fluid className="c-footermainclass">
                <Row  >
                    <Col xs={6} md={4} >
                        <div className="c-footerdiv">
                            <div >
                                <h1>TrekSync</h1>
                                <p>
                                    This website will help to arrange a trek with appropriate packages
                                    so that tourists can plan a trek easily with the trek guide.

                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col xs={6} md={4}>
                        <div className="c-footerdiv">
                            <div className="c-footerdivhappycust" >
                              {/* <h5>वसुधैव कुटुम्बकम्</h5> */}
                              <img src={happy} height="250px" width="400px"/>
                            </div>
                        </div>


                    </Col>

                    <Col xs={6} md={4}>
                        
                        <div className="c-footerdivthird">
                            <div>
                            <h4><b>Contact us</b></h4>
                            <br></br>
                            <br></br>
                            <h5><span><BsFillTelephoneFill/></span>&ensp;&ensp;&ensp;8888888888</h5>
                            <h5><span><SiGmail/></span>&ensp;&ensp;&ensp;treksync26@gmail.com</h5>
                            <br></br>
                            <div className="c-footericon">
                            < BsFacebook size="25px"/> 
                              <BsInstagram size="25px"/> 
                              <BsLinkedin size="25px"/> 
                             <BsTwitter size="25px"/>  
                              
                            
                           
                            </div>
                            </div>
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col xs={12}>
                       <div className="c-footecopyright">
                        <div>
                        <p>  <BiCopyright/> 2023 T</p>
                        </div>
                       
                       </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}














// <Form>
// <Form.Group className="mb-3" controlId="formBasicEmail">
 
//     <Form.Control type="text" placeholder="Enter Name" />
//     <Form.Text className="text-muted">
//     </Form.Text>
// </Form.Group>

// <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="number" placeholder="Contact Number" />
// </Form.Group>
// <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
// </Form.Group>
// <Button id="c-dispimgbtn" type="submit">
//     Submit
// </Button>
// </Form>
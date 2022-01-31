import React from 'react';
import { Col, Row } from 'reactstrap';
import {FacebookOutlined,InstagramOutlined,TwitterOutlined,YoutubeOutlined} from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'})

function Footer(props) {
    return (
        <div>
            <Row style={{ display: "flex", justifyContent: "center",marginTop:"9rem"}}>
                <Col>
                <img style={{width:"84rem"}} src='https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/luminosity/1640692667539-86c95c.jpeg'></img>
                </Col>
            </Row>

            <Row style={{backgroundColor:"black",marginTop:"2rem"}}>
            <hr/>
            <Col style={{display:"flex",justifyContent:"space-evenly",color:"white",fontSize:"1rem",fontFamily: "cursive",marginTop:"1%",
    fontWeight: "lighter"}}>
            <p>About us</p>
            <p>UC Impact</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Anti Discrimination Policy</p>
            <p>Blog</p>
            <p>Reviews</p>
            <p>Near Me</p>
            <p>Careers</p>
            <p>Gift Cards</p>
            <p>Contact Us</p>
            
            </Col>
            <hr style={{color:"white"}}></hr>
            <Row style={{marginLeft: "3%",
    fontSize: "initial"}}>
            <Row style={{color:"white",fontSize:"bold",marginLeft:"-2%"}}>
              <u>Serving in</u>
            </Row>
            <Row style={{color:"grey",fontSize:"bold"}}>
                Aus
            </Row>
            <Row style={{color:"white",padding:"10px"}}>
                Melbourne ,
                Sydney ,
            </Row>
            <Row style={{color:"grey",fontSize:"bold"}}>
                Ind
            </Row>
            <Row>
                <Col style={{color:"white",marginLeft:"-1%",display: "flex",
    
    flexWrap: "wrap",padding:"10px"}}>
                Agra , 
                Ahmedabad , 
                Amritsar , 
                Aurangabad , 
                Bangalore , 
                Bhopal , 
                Bhubaneswar , 
                Chandigarh Tricity , 
                Chennai , 
                Coimbatore , 
                Dehradun , 
                Delhi NCR , 
                Guwahati , 
                Gwalior , 
                Hyderabad , 
                Indore , 
                Jabalpur , 
                Jaipur , 
                Jamshedpur , 
                Kanpur , 
                Kochi , 
                Kolkata , 
                Kota , 
                Lucknow , 
                Ludhiana , 
                Meerut , 
                Mumbai , 
                Mysore , 
                Nagpur , 
                Nashik , 
                Patna , 
                Prayagraj , 
                Pune , 
                Raipur , 
                Ranchi , 
                Surat , 
                Thiruvananthapuram ,
                Vadodara , 
                Varanasi , 
                VijayaWada , 
                Visakhapatnam ,
                </Col>
            </Row>
            <Row style={{color:"grey",fontSize:"bold"}}>
                Ksa 
            </Row>
            <Row style={{color:"white",padding:"10px"}}>
                    Jeddah , 
                    Riyadh ,
                </Row>
                <Row style={{color:"grey",fontSize:"bold"}}>
                    SGP
                </Row>
                <Row style={{color:"white",padding:"10px"}}>
                Singapore
                </Row >
                <Row style={{color:"grey",fontSize:"bold"}}>
                    UAE
                </Row>
                <Row style={{color:"white",padding:"10px"}}>
                    Abu dhabi ,  
                    Dubai , 
                    Sharjah
                </Row>
                
                </Row>
                <hr style={{color:"white"}}></hr>
                <Row>
                    <Row>
                  <Col lg={2}></Col>
                  <Col lg={3} style={{color:"white"}}>© 2014-20 UrbanClap Technologies India Pvt. Ltd.</Col>
                  <Col lg={3} style={{color:"white",display:"flex",justifyContent:"space-evenly"}}>
                  <IconFont type="icon-facebook" />
                  <InstagramOutlined  />
                  <IconFont type="icon-twitter" />
                  <YoutubeOutlined/>
                  </Col>
                  <Col lg={2}> <img style={{width:"150px",height:"48px",marginTop:"-2%"}} src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"/></Col>
                  <Col lg={2}>
                      <img style={{width:"150px",height:"48px"}} src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"/>
                  </Col>
                  </Row>

                </Row>
         </Row>
        

           
        </div>
    );
}

export default Footer;
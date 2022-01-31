import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from '@ant-design/icons';
import { Row, Col } from 'reactstrap'
const { Meta } = Card;




function CardFile({ jobFromData, priceFromData, ratingFromData, descriptionFormData }) {
  return (
    <Card
      style={{ width: 350, height: "fit-content" }}
      cover={
        <div className='carding' style={{ display: "flex" }}>
          <>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="250"
            />
          </>
        </div>
      }

    >

      <Row>
        <Col>
          <h6>
            <b>{jobFromData}</b></h6>

        </Col>
        <Col lg={12}>
          <Row>{priceFromData}</Row>
          <Col>

            <Row>
              <div className='rating' style={{ color: "green" }}><StarOutlined /><b>{ratingFromData
              }</b>

              </div>
            </Row></Col>
          <Row><p><h6><b>Description</b></h6></p>{descriptionFormData}</Row>
        </Col>
        <Col style={{ marginLeft: "10rem", display: "flex", justifyContent: "space-around" }}>
          <Button 
            style={{ display: "inline" }} type='primary'>
            -
          </Button>
          <Button
           
            style={{

              height: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "-webkit-fill-available"
            }}

            type='primary' ghost >



            Add

          </Button>
          <Button 
            style={{ display: "inline" }} type='primary'>
            +
          </Button>
        </Col>



      </Row>


    </Card>
  );
}

export default CardFile;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Avatar, Image, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
function Categories() {
    const [dataCategory, setDataCategory] = useState([]);
    const [categoriesWithoutDups, setCategoriesWithoutDups] = useState([])
    useEffect(() => {
        let getCategoryData = async () => {
            let data = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            setDataCategory(await data.data);
            let colWithoudDup = [];
            let cateWithoutDuplicate = await data.data.map(e => {
                if (!colWithoudDup.includes(e.mainCategory)) {
                    if (e.mainCategory != undefined) {
                        colWithoudDup.push(e.mainCategory)
                    }
                }
            });
            setCategoriesWithoutDups(colWithoudDup)
        };
        getCategoryData();
    }, [])
    let icons = {
        "Saloon for women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
        "Hair Service For Women": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png",
        "Women's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
        "Salon for Men": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
        "Men's Therapies": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
        "Home Painting": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
        "Cleaning & pest Control": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        "Electrician": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        "AC/Appliance Repair": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
        "Plumbers & Carpenters": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"

    }
    return (

        <Row style={{ display: "flex", justifyContent: "center", height: "10rem", marginTop: "10rem" }}>
            <Col lg={9}>
                <Row style={{ backgroundColor: "white", position: "relative", top: "-6rem", padding: "10px", color: "black" }}>
                    {categoriesWithoutDups.length ? (categoriesWithoutDups.map(e => (
                        <Col lg={3}>
                            <Link to={`details/${e}`}>

                                <Avatar size={50} src={icons[e]} />

                                <p >{e}</p>
                            </Link>
                        </Col>
                    ))) : (<Spin />)}
                </Row>
            </Col>
        </Row>

    )
}

export default Categories;
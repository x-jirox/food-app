import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { menuSectionMocks } from '../../mocks/menuSectionMocks'
import { renderRatingIcons } from '../../utils/renderRating'
import Cards from '../../components/Layouts/Cards'
import { Link } from 'react-router-dom'

function Section3() {
    return (
        <section className='menu_section'>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
                        <h2>OUR CRAZY BURGERS</h2>
                        <p className='para'>
                            Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                            sodales sapien undo pretium a purus mauris
                        </p>
                    </Col>
                </Row>
                <Row>
                    {menuSectionMocks.map((cardData, index) => (
                        <Cards
                            key={index}
                            image={cardData.image}
                            rating={cardData.rating}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            price={cardData.price}
                            renderRatingIcons={renderRatingIcons}

                        />
                    ))}
                </Row>
                <Row className='pt-5'>
                    <Col sm={6} lg={5}>
                        <div className='ads_box ads_img1 mb-5 mb-md-0'>
                            <h4 className='mb-0'>GET YOUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6} lg={7}>
                        <div className='ads_box ads_img2 '>
                            <h4 className='mb-0'>GET YoUR FREE</h4>
                            <h5>CHEESE FRIES</h5>
                            <Link to="/" className='btn btn_red px-4 rounded-0'>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section3

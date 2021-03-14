import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import IndividualCard from './individualCard'
import { Col, Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Card from './card'

//fetch from db for different panels
import { topGrid } from '../data'

const PanelContainer = ({data}) => {
    return (
        <Container style={{ 'backgroundColor': 'blue', 'padding': '10px' }}>
            
            {data.map((value,i) => {
                const eventName = 'world';
                const body = 'body';
                const footer = 'footer';
                
                <Row>
                    <Col xl={3} className={'mt-4 card-container'}>
                        <Card data={data} />
                    </Col>
                </Row>
            })}
            
        </Container>
    )
}

PanelContainer.propTypes = {
    data: PropTypes.object
}


// const PanelContent = ({value}) => {
//     return (
//         <div></div>
//     )
// }

export default PanelContainer;
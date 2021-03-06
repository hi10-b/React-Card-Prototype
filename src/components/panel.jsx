import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import CardBlock from './card'
import { Col, Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types';

//fetch from db for different panels
import { topGrid } from '../data'
import { propTypes } from 'react-bootstrap/esm/Image';

const PanelContainer = ({data}) => {
    return (
        <Container style={{ 'backgroundColor': 'blue', 'padding': '10px' }}>
            data.forEach(item => {
            const bye = 'world';
                const obj = { bye }
                const { hello } = item;
            })
            <Row>
               <Col xl={3} className={'mt-4 card-container'}>
                    <CardBlock header={eventName} body={body} footer={footer} />
                </Col>
            </Row>
        </Container>
    )
}

PanelContainer.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string
}

// const PanelContent = ({value}) => {
//     return (
//         <div></div>
//     )
// }

export default PanelContainer;
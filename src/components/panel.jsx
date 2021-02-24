import React from 'react'
import CardBlock from './card'
import {Col,Container,Row} from 'react-bootstrap'

const Panel = ({name}) => {
    return (
        <Container>

            <Row>
                <Col xl={4} className={'mt-4 card-container'}>
                    <CardBlock body='body' footer='footer' header='title' />               
                </Col>
                <Col xl={4} className={'mt-4 card-container'}>
                    <CardBlock body='body2' footer='footer2' header='title2'/>
                </Col>
                <Col xl={4} className={'mt-4 card-container'}>
                    <CardBlock body='body3' footer='footer3' header='title3' />
                </Col>
            </Row>
        </Container>
    )
}

export default Panel;
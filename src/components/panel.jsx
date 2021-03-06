import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import CardBlock from './card'
import { Col, Container, Row } from 'react-bootstrap'

//fetch from db for different panels
import { topGrid } from '../data'

const PanelContainer = () => {
    return (
        <Container style={{'backgroundColor':'blue', 'padding':'10px'}}>
            <Row>
                {
                topGrid.map((value, key) => {
                    return (
                        //panel with top grid info
                        <PanelContent value={value}/>
                    )
                })}
            </Row>
        </Container>
    )
}

const PanelContent = ({value}) => {
    return (
        <Col xl={3} className={'mt-4 card-container'}>
            <CardBlock header={value.company} body={value.ticker} footer={value.stockPrice} />
            {/* {props.children} */}
        </Col>
    )
}

export default PanelContainer;
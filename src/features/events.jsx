import React from 'react'
import CardBlock from '../components/card';
import PanelContainer from '../components/panel';
import { topGrid } from '../data'
import {Col} from 'react-bootstrap'

const Events = () => {
    return (
        // <Panel event={"name"} />
        <PanelContainer>
            {
                topGrid.map((value, key) => {
                
                    //panel with top grid info
                    <Col xl={3} className={'mt-4 card-container'}>
                        <return CardBlock header={value.company} body={value.ticker} footer={value.stockPrice} />
                    </Col>
                })
            }
        </PanelContainer>
    )
}


export default Events;
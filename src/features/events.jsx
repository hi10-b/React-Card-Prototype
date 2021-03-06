import React from 'react'
import CardBlock from '../components/card';
import PanelContainer from '../components/panel';
import {Col} from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux';

const Events = () => {
    return (
        // <Panel event={"name"} />
        <PanelContainer events={events} />
    )
}

const { events } = useSelector(state =>  state.events );



export default Events;
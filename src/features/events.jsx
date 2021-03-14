import React from 'react'
import IndividualCard from '../components/individualCard';
import PanelContainer from '../components/panel';
import {Col} from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux';

const Events = () => {
    const { events } = useSelector(state =>  state.events );
    return (
        // <Panel event={"name"} />
        <PanelContainer events={events} />
    )
}





export default Events;
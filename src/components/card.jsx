import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import CardDetail from './cardDetail'
import IndividualCard from './individualCard'
import PropTypes from 'prop-types';

const Card = ({data}) => {
    return (
        <div>
            <IndividualCard />
            <CardDetail />
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object
}

export default Card;
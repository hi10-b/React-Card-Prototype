import React from 'react';
import { Card,Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './card2.css';
import image from '../randIMG.jpg'
import PropTypes from 'prop-types';

const IndividualCard = ( { header, body, footer }) => {
    return (        
            <Card className={'fullCard'}>
                {header && <Header header={header} />}
                
                {body && <Body body={body} /> }

                {footer && <Footer footer={footer} />}
                {/* <Header />
                <Body />
                <Footer /> */}
            </Card>   
    )
}

IndividualCard.propTypes = {
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string
}

//title name
const Header = ({header}) => {
    return <Card.Header>{header}</Card.Header>
}

//photo
//info
const Body = ({body}) => {
    return  <Card.Body>
                <img src={image} style={{ height: '80%', width:'100%'}}></img>
                <Card.Text>
                    {body}
                </Card.Text>
                <Card.Text>
                    <h1>asd</h1>
                </Card.Text>
            </Card.Body>
}

//dates?
//info
//read more
const Footer = ({footer}) => {
    return <Card.Footer>
        {/* <small className="text-muted">This is footer</small> */}
        <Button variant="primary">{footer}</Button>
    </Card.Footer>
}

export default IndividualCard;
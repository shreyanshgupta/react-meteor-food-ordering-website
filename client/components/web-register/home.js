import React, {Component} from 'react'
import {Accordion, Button, Col, Grid, Panel, Row} from 'react-bootstrap'
import {createContainer} from 'meteor/react-meteor-data'

export default class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-buttons">
                    <Grid bsClass="container">
                        <Row>
                            <Col md={3}>
                                <div className="home-buttons-order">

                                </div>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Grid>
                </div>
            </div>

        )
    }

}

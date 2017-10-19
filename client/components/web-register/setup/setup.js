import React, {Component} from 'react'
import {Col, Grid, ListGroup, ListGroupItem, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Switch} from 'react-router-dom'
import PrivateRoute from '../../account/private-route'
import Accounts from './accounts'

export default class Setup extends Component {
    render() {
        return (
            <Grid bsClass="container-fluid">
                <Row>
                    <Col md={2}>
                        <ListGroup>
                            <LinkContainer to={`${this.props.match.url}/accounts`}>
                                <ListGroupItem href="#">Accounts</ListGroupItem>
                            </LinkContainer>
                        </ListGroup>
                    </Col>
                    <Col md={10}>
                        <Switch>
                            <PrivateRoute path={`${this.props.match.url}/accounts`} strict component={Accounts}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
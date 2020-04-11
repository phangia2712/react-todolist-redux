import React, { /* useState, useMemo, */ useEffect } from 'react'
import $ from 'jquery'
import { Container, Row, Col } from 'reactstrap';
import Title from './Title'
import Control from './Control'
import Form from './Form'
import List from './List'
import '../../scss/styles.scss'

function ToDoList(props) {
    useEffect(() => {
        $('body').css({background: '#f5f5f5'})
    })
    return (
        <div className="todolist">
            <Container fluid>
                <Row>
                    <Col lg="12"><Title /></Col>
                    <Col lg="12"><Control /></Col>
                    <Col lg="12"><Form /></Col>
                    <Col lg="12"><List /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ToDoList;

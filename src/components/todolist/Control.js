import React/* , { useState, useMemo, useEffect } */ from 'react'
import { /* Container, */ Row, Col } from 'reactstrap';
import ControlSearch from './ControlSearch'
import ControlSort from './ControlSort'
import ToggleForm from './ToggleForm'

function Control(props) {
    return (
        <div className="control">
            <Row>
                <Col lg="8">
                    <Row>
                        <Col lg="8"><ControlSearch /></Col>
                        <Col lg="4"><ControlSort /></Col>
                    </Row>
                </Col>
                <Col lg="4">
                    <ToggleForm />
                </Col>
            </Row>
           
           
           
        </div>
    )
}

export default Control;